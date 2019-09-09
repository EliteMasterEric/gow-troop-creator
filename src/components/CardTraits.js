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
  "./assets/graphics/troopcard/divider.png", // 2 - TraitDivider
  './assets/graphics/troopcard/ascension.png', // 3 - Trait Pip
  './assets/graphics/troopcard/traitbg.png', // 4 - Trait background
]

const rarities = {
  "Common":     { color: "#FEFEFE", pips: 1 },
  "Rare":       { color: "#54A721", pips: 2 },
  "Ultra-Rare": { color: "#1D71FF", pips: 3 },
  "Epic":       { color: "#9635E7", pips: 4 },
  "Legendary":  { color: "#F3A120", pips: 5 },
  "Mythic":     { color: "#13E3F6", pips: 6 },
  "Doomed":     { color: "#B90000", pips: 6 },
}

// Ensure all images are loaded before rendering the canvas itself.
function loadImages(canvas, temp, troop, troop_sources, callback, setDownloadUrl, canvasResult) {
  var images = {};
  var loadedImages = 0;
  var countImages = core_sources.length + troop_sources.length;
  for (var src in core_sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if (++loadedImages >= countImages) {
          callback(canvas, temp, troop, images, setDownloadUrl, canvasResult);
        }
      };
      images[src].src = core_sources[src];
  }
  for (src in troop_sources) {
    var index = parseInt(src) + core_sources.length;
    images[index] = new Image();
    images[index].onload = function() {
      if (++loadedImages >= countImages) {
        callback(canvas, temp, troop, images, setDownloadUrl, canvasResult);
      }
    };
    images[index].src = troop_sources[src];
}
};

function writeLines(context, x, y, maxWidth, lineHeight, text) {
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];

  // Build an array of lines, starting a new line if the current one is too long.
  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = context.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  // Finish up.
  lines.push(currentLine);

  const newY = y - (lines.length * lineHeight / 2);

  for (var j = 0; j < lines.length; j++) {
    context.fillText(lines[j], x, newY + lineHeight * j);
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
  ctemp.drawImage(images[1], 0, 693, 460, 34);
  // TraitDivider1
  ctemp.drawImage(images[2], 0, 281, 460, 14);
  // TraitDivider2
  ctemp.drawImage(images[2], 0, 487, 460, 14);
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
  ctx.fillRect(0, 16, 460, 73);

  // "Traits" Label
  ctx.font = '600 50px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'center';
  ctx.fillText("Traits", 215, 66);

  // TraitCard1
  ctx.drawImage(images[4], 0, 89, 460, 192);
  // TraitCard2
  ctx.drawImage(images[4], 0, 295, 460, 192);
  // TraitCard3
  ctx.drawImage(images[4], 0, 501, 460, 192);

  // TraitIcon1, TraitPip1
  // To color Epic, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[3], 12, 104, 36, 36);
  ctemp.drawImage(images[5], 404, 104, 36, 36);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities['Epic'].color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.globalAlpha = 1;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // TraitIcon2, TraitPip2
  // To color Legendary, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[3], 12, 310, 36, 36);
  ctemp.drawImage(images[6], 404, 310, 36, 36);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities['Legendary'].color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // TraitIcon3, TraitPip3
  // To color Mythic, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[3], 12, 516, 36, 36);
  ctemp.drawImage(images[7], 404, 516, 36, 36);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities['Mythic'].color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // TraitName1
  ctx.font = '600 32px "Open Sans"';
  ctx.textAlign = 'left';
  ctx.fillStyle = rarities['Epic'].color;
  ctx.fillText(troop.trait.trait1name, 60, 104 + 30);

  // TraitName2
  ctx.fillStyle = rarities['Legendary'].color;
  ctx.fillText(troop.trait.trait2name, 60, 310 + 30);

  // TraitName3
  ctx.fillStyle = rarities['Mythic'].color;
  ctx.fillText(troop.trait.trait3name, 60, 516 + 30);

  // TraitDesc1
  ctx.font = '600 32px "Open Sans"';
  ctx.fillStyle = "#000";
  ctx.textAlign = 'center';
  writeLines(ctx, 230, 246, 400, 32, troop.trait.trait1desc);

  // TraitDesc2
  writeLines(ctx, 230, 452, 400, 32, troop.trait.trait2desc);

  // TraitDesc3
  writeLines(ctx, 230, 658, 400, 32, troop.trait.trait3desc);

  // Add the traits to the results.
  const cresult = canvasResult.getContext('2d');
  cresult.clearRect(975, 10, canvas.width, canvas.height);
  cresult.drawImage(canvas, 975, 10, canvas.width, canvas.height);

  // Set the download URL.
  setDownloadUrl(canvas.toDataURL("image/png"));
}

const drawInactive = (canvas) => {
  // Set the canvas size.
  canvas.width = 460;
  canvas.height = 727;
}

// Render a troop as a full-size card (like in the troop list).
export const CardTraits = ({troop, canvasResult, setDownloadUrl}) => {
  const classes = useStyles();

  const troopCard = React.useRef(null);
  const temp = React.useRef(null);

  const [isFontReady, setFontReady] = React.useState(false);

  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: [ 'Open Sans:400,600,700', 'Roboto', 'Raleway'],
      },
      fontactive: () => { setFontReady(true) },
    })
  }, []);

  // Perform when troop changes.
  useEffect(() => {
    // Draw the canvas.
    if (isFontReady) {
      loadImages(troopCard.current, temp.current, troop, [
        `./assets/graphics/troopcard/traits/${troop.trait.trait1code}.png`, // 5 - Trait Icon 1
        `./assets/graphics/troopcard/traits/${troop.trait.trait2code}.png`, // 6 - Trait Icon 2
        `./assets/graphics/troopcard/traits/${troop.trait.trait3code}.png`, // 7 - Trait Icon 3
      ], draw, setDownloadUrl, canvasResult.current);
    } else {
      drawInactive(troopCard.current);
    }
  }, [troop, isFontReady]);

  return (
    <Box height={1} className={classes.cardBox}>
        <canvas ref={troopCard} className={classes.card} />
        <canvas ref={temp} style={{display: 'none'}} />
    </Box>
  );
}