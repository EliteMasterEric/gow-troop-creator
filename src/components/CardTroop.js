import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import WebFontLoader from "webfontloader";

const useStyles = makeStyles(theme => ({
  card: {
    width: 'auto',
    margin: '0px auto',
    display: 'table'
  }
}));

const core_sources = [
  "./assets/graphics/troopcard/top.png", // 0 - CardTop
  "./assets/graphics/troopcard/bottom.png", // 1 - CardBottom
  "./assets/graphics/troopcard/attack.png", // 2 - Attack Skill
  "./assets/graphics/troopcard/armor.png", // 3 - Armor Skil
  "./assets/graphics/troopcard/life.png", // 4 - Life Skill
  "./assets/graphics/troopcard/trait_flag.png", // 5 - Trait Flag
  "./assets/graphics/troopcard/ascension.png", // 6 - Rarity Pip without Spikes
  "./assets/graphics/troopcard/ascension_spike.png", // 7 - Rarity Pip with Spikes
  "./assets/graphics/troopcard/shading_horizontal.png", // 8 - Horizontal Gradient
  "./assets/graphics/troopcard/shading_vertical.png", // 9 - Vertical Gradient
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

// Render the canvas itself.
function draw(canvas, temp, troop, images, setDownloadUrl, canvasResult) {
  // Set the canvas size.
  canvas.width = 491;
  canvas.height = 746;
  var ctx = canvas.getContext('2d');
  temp.width = canvas.width;
  temp.height = canvas.height;
  var ctemp = temp.getContext('2d');

  const rarity_color = rarities[troop.rarity].color;
  const rarity_pips = rarities[troop.rarity].pips;

  // TroopImage
  // Clip to prevent the image appearing behind the top bar.
  // Save and restore to undo the clip.
  ctx.save();
  ctx.rect(0, 46, canvas.width, canvas.height);
  ctx.clip();
  ctx.drawImage(images[10], 30, 37, 460, 652);
  ctx.restore();

  // TopGradient, behind the ascension pips
  // Clip to prevent the image appearing behind the top bar.
  // Save and restore to undo the clip.
  ctx.save();
  ctx.rect(0, 46, canvas.width, canvas.height);
  ctx.clip();
  // Set transparency
  ctx.globalAlpha = 0.8235
  ctx.drawImage(images[9], 30, 37, 460, 107);
  ctx.restore();

  // LevelGradient, behind the troop level
  // Clip to prevent the image appearing behind the top bar.
  // Save and restore to undo the clip.
  ctx.save();
  ctx.rect(0, 46, canvas.width, canvas.height);
  ctx.clip();
  // Set transparency
  ctx.globalAlpha = 0.7843
  // Flip horizontally
  ctx.translate(460, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(images[8], -30, 45, 195, 107);
  ctx.restore();
  
  // CardTop and CardBottom
  // To color by rarity, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  // CardTop border
  ctemp.drawImage(images[0], 0, 0, 460, 16);
  // CardBottom border
  ctemp.drawImage(images[1], 0, 659, 460, 50);
  // Fill in the area with the color.
  ctemp.fillStyle = rarity_color;
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  // Move the image to the main canvas, then clear out the temp canvas.
  ctx.drawImage(temp, 30, 30, canvas.width, canvas.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  // LevelLabel
  ctx.font = '500 40px "Raleway"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'right';
  ctx.fillText("Level", canvas.width - 8, 56 + 30);

  // LevelValue
  ctx.font = '600 50px "Open Sans"';
  // Same fillStyle and textAlign
  ctx.fillText(troop.level, canvas.width - 8, 108 + 30);

  // ManaColor
  ctx.drawImage(images[15], 0, 0, 100, 100);

  // ManaCost
  ctx.save();
  ctx.font = '600 60px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'center';
  // 2px Black shadow
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowColor = '#000';
  ctx.fillText(troop.cost, 50, 70);
  ctx.restore();

  // Ascension Pips
  // To color by rarity, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  for (const i of Array(rarity_pips).keys()) {
    ctemp.drawImage(images[7], 105 + 30 * i, 60, 30, 30);
  }
  // Fill in the area with the color.
  ctemp.fillStyle = rarity_color;
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  // Move the image to the main canvas, then clear out the temp canvas.
  ctx.drawImage(temp, 0, 0, canvas.width, canvas.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  // Unascended Pips
  // To color gray, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  for (const i of Array(6 - rarity_pips).keys()) {
    ctemp.drawImage(images[6], 255 - 30 * i, 60, 30, 30);
  }
  // Fill in the area with the color.
  ctemp.fillStyle = "#AFAFAF";
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  // Move the image to the main canvas, then clear out the temp canvas.
  ctx.drawImage(temp, 0, 0, canvas.width, canvas.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  // Skill Background
  ctx.fillStyle = "#000000B2";
  ctx.fillRect(30, 618, 460, 71);

  // Attack Icon
  ctx.drawImage(images[2], 49, 630, 50, 50);
  // Armor Icon
  ctx.drawImage(images[3], 213, 630, 50, 50);
  // Life Icon
  ctx.drawImage(images[4], 368, 630, 50, 50);

  ctx.font = '700 40px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'left';
  // Attack Value
  ctx.fillText(troop.attack, 104, 667);
  // Armor Value
  ctx.fillText(troop.armor, 268, 667);
  // Life Value
  ctx.fillText(troop.life, 423, 667);

  // Troop Name
  ctx.font = '500 57px "Raleway"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'left';
  ctx.fillText(troop.name, 50, 573);

  // Troop Kingdom
  ctx.font = '600 30px "Open Sans"';
  ctx.fillStyle = "#CCCCCCFF";
  ctx.fillText(troop.kingdom, 50, 608);

  // Type
  ctx.fillStyle = "#000";
  ctx.textAlign = 'center';
  const type = troop.type2 !== "" ? `${troop.type1} / ${troop.type2}` : troop.type1;
  const txtSize = ctx.measureText(type).width;
  ctx.fillText(type, 260, 722);

  // Role Icons
  // To color black, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  const leftRoleX = 210 - (txtSize / 2);
  const rightRoleX = 266 + (txtSize / 2);
  ctemp.drawImage(images[11], leftRoleX, 692, 44, 44);
  ctemp.drawImage(images[11], rightRoleX, 692, 44, 44);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = "#000000";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // Trait Flags
  // To color black/transparent, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[5], 30, 238, 120, 60);
  ctemp.drawImage(images[5], 30, 303, 120, 60);
  ctemp.drawImage(images[5], 30, 368, 120, 60);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = "#000000";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.globalAlpha = 0.706;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // TraitIcon1
  // To color Epic, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[12], 45, 243, 50, 50);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities['Epic'].color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.globalAlpha = 1;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // TraitIcon2
  // To color Legendary, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[13], 45, 313, 50, 50);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities['Legendary'].color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // TraitIcon3
  // To color Mythic, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[14], 45, 373, 50, 50);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities['Mythic'].color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height)
  ctemp.restore();

  // Add the troop to the results.
  const cresult = canvasResult.getContext('2d');
  cresult.clearRect(460 + 5, 0, ctx.width, ctx.height);
  cresult.drawImage(canvas, 460 + 5, 0, ctx.width, ctx.height);

  // Set the download URL.
  setDownloadUrl(canvas.toDataURL("image/png"));
}

const drawInactive = (canvas) => {
  // Set the canvas size.
  canvas.width = 490;
  canvas.height = 746;
}

// Render a troop as a full-size card (like in the troop list).
export const CardTroop = ({troop, canvasResult, setDownloadUrl}) => {
  const classes = useStyles();

  const troopCard = React.useRef(null);
  const temp = React.useRef(null);

  const [isFontReady, setFontReady] = React.useState(false);

  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: [ 'Open Sans', 'Roboto', 'Raleway'],
      },
      fontactive: () => { setFontReady(true) },
    })
  }, []);

  // Perform when troop changes.
  useEffect(() => {
    // Draw the canvas.
    if (isFontReady) {
      loadImages(troopCard.current, temp.current, troop, [
        `./assets/graphics/troopcard/infernus.png`, // 10 - Troop Image
        `./assets/graphics/troopcard/roles/${troop.role}.png`, // 11 - Role Icon
        `./assets/graphics/troopcard/traits/${troop.trait1code}.png`, // 12 - Trait Icon 1
        `./assets/graphics/troopcard/traits/${troop.trait2code}.png`, // 13 - Trait Icon 2
        `./assets/graphics/troopcard/traits/${troop.trait3code}.png`, // 14 - Trait Icon 3
        `./assets/graphics/troopcard/colors/${troop.colors}.png`, // 15 - Mana Colors
      ], draw, setDownloadUrl, canvasResult.current);
    } else {
      drawInactive(troopCard.current);
    }
  }, [troop, isFontReady]);

  return (
    <Box height={1}>
        <canvas ref={troopCard} className={classes.card} />
        <canvas ref={temp} style={{display: 'none'}} />
    </Box>
  );
}