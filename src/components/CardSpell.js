import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import WebFontLoader from "webfontloader";

const useStyles = makeStyles(theme => ({
  cardBox: {
    padding: (theme.spacing(3) + 'px 0')
  },
  card: {
    width: '100%',
    margin: '0px auto',
    display: 'table'
  }
}));

const core_sources = [
  "./assets/graphics/troopcard/top.png", // 0 - CardTop
  "./assets/graphics/troopcard/bottom.png", // 1 - CardBottom
  "./assets/graphics/troopcard/divider.png", // 2 - SpellDivider
  './assets/graphics/troopcard/spellbg.png', // 3 - SpellBackground
  './assets/graphics/troopcard/magic.png', // 4 - Magic
]

const rarities = {
  "Common": { color: "#FEFEFE", pips: 1 },
  "Rare": { color: "#54A721", pips: 2 },
  "Ultra-Rare": { color: "#1D71FF", pips: 3 },
  "Epic": { color: "#9635E7", pips: 4 },
  "Legendary": { color: "#F3A120", pips: 5 },
  "Mythic": { color: "#13E3F6", pips: 6 },
  "Doomed": { color: "#B90000", pips: 6 },
}

// Ensure all images are loaded before rendering the canvas itself.
function loadImages(canvas, temp, troop, troop_sources, callback, setDownloadUrl, canvasResult) {
  var images = {};
  var loadedImages = 0;
  var countImages = core_sources.length + troop_sources.length;
  for (var src in core_sources) {
    images[src] = new Image();
    images[src].onload = function () {
      if (++loadedImages >= countImages) {
        callback(canvas, temp, troop, images, setDownloadUrl, canvasResult);
      }
    };
    images[src].src = core_sources[src];
  }
  for (src in troop_sources) {
    var index = parseInt(src) + core_sources.length;
    images[index] = new Image();
    images[index].onload = function () {
      if (++loadedImages >= countImages) {
        callback(canvas, temp, troop, images, setDownloadUrl, canvasResult);
      }
    };
    images[index].src = troop_sources[src];
  }
};

// https://gist.github.com/mrcoles/0dfaab93a1c899e5f46690676c8c29e5
const fillMixedText = (ctx, args, x, y) => {
  let defaultFillStyle = ctx.fillStyle;
  let defaultFont = ctx.font;

  ctx.save();
  args.forEach(({ text, fillStyle, font }) => {
    ctx.fillStyle = fillStyle || defaultFillStyle;
    ctx.font = font || defaultFont;
    ctx.fillText(text, x, y);
    x += ctx.measureText(text).width;
  });
  ctx.restore();
};

const writeSpellDescriptionLines = (context, x, y, maxWidth, maxHeight, baseLineHeight, troop, text) => {
  //
  // DEATH TO ALL YE WHO ENTER HERE
  // This function is a nightmare of confusing logic, combining word wrapping
  // with the code that colors the magic formatting text.
  //

  var lineHeight = baseLineHeight;

  const fillStyle = "#000000";
  const altFillStyle = "#680b7c";

  while (lineHeight > 0) {
    var words = text.split(" ");
    var lines = [];
    var lineIndexes = [0]
    var currentLine = words[0];
    var magicFillWordIndex = -1;

    context.font = '600 {}px "Open Sans"'.replace("{}", lineHeight);

    // Build an array of lines, starting a new line if the current one is too long.
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      if (word === "{magic}") {
        magicFillWordIndex = i;
        const magicDamage = parseInt(troop.spell.spellbase) + (parseInt(troop.spell.spellmult) * parseInt(troop.spell.magic));
        if (troop.spell.spellrange) {
          word = Math.floor(magicDamage / 2) + " - " + (magicDamage);
        } else {
          word = magicDamage;
        }
      }
      var width = context.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        lineIndexes.push(i);
        currentLine = word;
      }
    }
    // Finish up.
    lines.push(currentLine);
    lineIndexes.push(i);
    if (lines.length * lineHeight > maxHeight) {
      // Make things shorter and start over.
      lineHeight -= 2;
    } else {
      // Actually use this size.
      const newY = y - (lines.length * lineHeight / 2);

      for (var j = 0; j < lines.length; j++) {
        if (magicFillWordIndex !== -1 &&
          (magicFillWordIndex <= lineIndexes[j + 1] && (lineIndexes[j] < magicFillWordIndex))) {
          context.textAlign = 'left';
          var newX = x - (context.measureText(lines[j]).width / 2);
          context.fillStyle = altFillStyle;
          const magicFillWordLocalIndex = magicFillWordIndex - lineIndexes[j];

          const lineWords = lines[j].split(" ");
          const magicWords = lineWords.splice(magicFillWordLocalIndex, troop.spell.spellrange ? 3 : 1);

          const lineFirstPart = lines[j].split(magicWords.join(' '))[0];
          const lineLastPart = lines[j].split(magicWords.join(' '))[1];
          var textParts = []
          const boldFont = 'bold {}px "Open Sans"'.replace("{}", lineHeight);
          if (troop.spell.spellrange) {
            textParts = [
              { text: lineFirstPart, fillStyle: fillStyle },
              { text: magicWords[0] + ' ', fillStyle: altFillStyle, font: boldFont },
              { text: magicWords[1], fillStyle: fillStyle },
              { text: ' ' + magicWords[2], fillStyle: altFillStyle, font: boldFont },
              { text: lineLastPart, fillStyle: fillStyle }
            ]
          } else {
            textParts = [
              { text: lineFirstPart, fillStyle: fillStyle },
              { text: magicWords[0], fillStyle: altFillStyle, font: boldFont },
              { text: lineLastPart, fillStyle: fillStyle }
            ]
          }
          fillMixedText(context, textParts, newX, newY + lineHeight * j);
        } else {
          context.textAlign = 'center';
          context.fillStyle = fillStyle;
          context.fillText(lines[j], x, newY + lineHeight * j);
        }
      }
      break;
    }
  }
}

// Render the canvas itself.
function draw(canvas, temp, troop, images, setDownloadUrl, canvasResult) {
  // Set the canvas size.
  canvas.width = 460;
  canvas.height = 727;
  var ctx = canvas.getContext('2d');
  temp.width = canvas.width;
  temp.height = canvas.height;
  var ctemp = temp.getContext('2d');

  const rarity_color = rarities[troop.troop.rarity].color;

  // CardTop and CardBottom, TraitDivider1, 2, and 3
  // To color by rarity, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  // CardTop border
  ctemp.drawImage(images[0], 0, 0, 460, 16);
  // CardBottom border
  ctemp.drawImage(images[1], 0, 689, 460, 34);
  // SpellDivider
  ctemp.drawImage(images[2], 0, 427, 460, 14);
  // Fill in the area with the color.
  ctemp.fillStyle = rarity_color;
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  // Move the image to the main canvas, then clear out the temp canvas.
  ctx.drawImage(temp, 0, 0, canvas.width, canvas.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  // Name Plate
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 16, 460, 71);

  // Spell Name
  ctx.font = '600 50px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'center';
  ctx.fillText(troop.spell.spellname, 215, 66);

  // Spell Image
  ctx.drawImage(images[5], 0, 87, 460, 340);

  // Spell Card
  ctx.drawImage(images[3], 0, 441, 460, 248);

  // Magic Icon
  ctx.drawImage(images[4], 185, 454, 34, 42);

  // Magic Value
  ctx.font = '600 40px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'left';
  ctx.fillText(troop.spell.magic, 235, 488);

  // SpellDesc
  writeSpellDescriptionLines(ctx, 230, 623, 430, 150, 36, troop, troop.spell.spelldesc);

  // Add the spell to the results.
  const cresult = canvasResult.getContext('2d');
  cresult.clearRect(5, 15, canvas.width, canvas.height);
  cresult.drawImage(canvas, 5, 15, canvas.width, canvas.height);

  // Set the download URL.
  setDownloadUrl(canvas.toDataURL("image/png"));
}

const drawInactive = (canvas) => {
  // Set the canvas size.
  canvas.width = 491;
  canvas.height = 727;
}

const getImageURL = (troop) => {
  if (troop.spell.spellimage !== null) {
    return URL.createObjectURL(troop.spell.spellimage);
  } else {
    // Else, use the default.
    return `./assets/graphics/troopcard/eruption.png`;
  }
}

// Render a troop as a full-size card (like in the troop list).
export const CardSpell = ({ troop, canvasResult, setDownloadUrl }) => {
  const classes = useStyles();

  const troopCard = React.useRef(null);
  const temp = React.useRef(null);

  const [isFontReady, setFontReady] = React.useState(false);

  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: ['Open Sans:400,600,700', 'Roboto', 'Raleway'],
      },
      fontactive: () => { setFontReady(true) },
    })
  }, []);

  // Perform when troop changes.
  useEffect(() => {
    // Draw the canvas.
    if (isFontReady) {
      loadImages(troopCard.current, temp.current, troop, [
        getImageURL(troop), // 5 - Spell icon
      ], draw, setDownloadUrl, canvasResult.current);
    } else {
      drawInactive(troopCard.current);
    }
  }, [troop, isFontReady]);

  return (
    <Box height={1} className={classes.cardBox}>
      <canvas ref={troopCard} className={classes.card} />
      <canvas ref={temp} style={{ display: 'none' }} />
    </Box>
  );
}