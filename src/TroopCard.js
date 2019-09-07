import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    width: '490p',
    height: '746px'
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
  // troop_sources
  // 10 - Troop Image
  // 11 - Role Icon
  // 12 - Trait Icon 1
  // 13 - Trait Icon 2
  // 14 - Trait Icon 3
  // 15 - Mana Colors
]

// Ensure all images are loaded before rendering the canvas itself.
function loadImages(canvas, temp, troop_sources, callback) {
  var images = {};
  var loadedImages = 0;
  var countImages = core_sources.length + troop_sources.length;
  for (var src in core_sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if (++loadedImages >= countImages) {
          callback(canvas, temp, images);
        }
      };
      images[src].src = core_sources[src];
  }
  for (var src in troop_sources) {
    images[src + core_sources.length] = new Image();
    images[src + core_sources.length].onload = function() {
      if (++loadedImages >= countImages) {
        callback(canvas, temp, images);
      }
    };
    images[src + core_sources.length].src = troop_sources[src];
}
};

// Render the canvas itself.
function draw(canvas, temp, images) {
  // Set the canvas size.
  const width = 460;
  canvas.width = 490;
  canvas.height = 746;
  var ctx = canvas.getContext('2d');
  temp.width = canvas.width;
  temp.height = canvas.height;
  var ctemp = temp.getContext('2d');

  // TroopImage
  // Clip to prevent the image appearing behind the top bar.
  // Save and restore to undo the clip.
  ctx.save();
  ctx.rect(0, 46, canvas.width, canvas.height);
  ctx.clip();
  ctx.drawImage(images[10], 30, 37, 460, 652);
  ctx.restore();
  
  // Draw all the images that are colored based on rarity.
  // To do this, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  // CardTop border
  ctemp.drawImage(images[0], 0, 0, 460, 16);
  // CardBottom border
  ctemp.drawImage(images[1], 30, 688, 460, 50);
  // Fill in the area with the color.
  ctemp.fillStyle = "#F3A120";
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  // Move the image to the main canvas, then clear out the temp canvas.
  ctx.drawImage(temp, 30, 30, canvas.width, canvas.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  

  
  
  

  // TopGradient behind the ascension pips
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.rect(0, 46, temp.width, temp.height);
  ctemp.clip();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.globalAlpha = 0.8235
  ctemp.drawImage(images[9], 29, 37, width, 107);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // NameGradient behind the troop name
  // I can't even see this on the real card!

  // CardBottom border colored by rarity
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#F3A120";
  ctemp.fillRect(0, 400, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();



  // LevelGradient
  ctemp.save();
  ctemp.rect(0, 67, temp.width, temp.height);
  ctemp.clip();
  ctemp.globalAlpha = 0.7843
  ctemp.translate(width, 0);
  ctemp.scale(-1, 1);
  ctemp.drawImage(images[8], -30, 45, 195, 107);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // LevelLabel
  ctx.font = '500 40px "Raleway"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'right';
  ctx.fillText("Level", canvas.width - 8, 56 + 30);

  // LevelValue
  ctx.font = '600 50px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'right';
  ctx.fillText("20", canvas.width - 8, 108 + 30);

  // ManaColor
  ctx.drawImage(images[10], 0, 0, 100, 100);

  // ManaCost
  ctx.font = '600 60px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowColor = '#000';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'center';
  ctx.fillText("24", 50, 70);

  // Clear shadow
  ctx.shadowColor = '#00000000';

  // Ascension Pips
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#F3A120";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[12], 0, 0, 30, 30);
  // 6 Pips
  // inactive: #AFAFAF
  ctx.drawImage(temp, 105, 30 + 30, temp.width, temp.height);
  ctx.drawImage(temp, 135, 30 + 30, temp.width, temp.height);
  ctx.drawImage(temp, 165, 30 + 30, temp.width, temp.height);
  ctx.drawImage(temp, 195, 30 + 30, temp.width, temp.height);
  ctx.drawImage(temp, 225, 30 + 30, temp.width, temp.height);
  ctemp.restore();
  
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#AFAFAF";
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[11], 0, 0, 30, 30);
  ctx.drawImage(temp, 255, 30 + 30, temp.width, temp.height);
  ctemp.restore();

  // Skill Background
  ctx.fillStyle = "#000000B2";
  ctx.fillRect(30, 616, width, 71);

  // Attack Icon
  ctx.drawImage(images[13], 49, 630, 50, 50);

  // Attack Value
  ctx.font = '700 40px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'left';
  ctx.fillText("40", 104, 667);

  // Armor Icon
  ctx.drawImage(images[14], 213, 630, 50, 50);

  // Armor Value
  ctx.fillText("40", 268, 667);

  // Life Icon
  ctx.drawImage(images[15], 368, 630, 50, 50);

  // Life Value
  ctx.fillText("40", 423, 667);

  // Troop Name
  ctx.font = '500 57px "Raleway"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = 'left';
  ctx.fillText("Hapatra", 50, 573);

  // Troop Kingdom
  ctx.font = '600 30px "Open Sans"';
  ctx.fillStyle = "#CCCCCCFF";
  ctx.textAlign = 'left';
  ctx.fillText("Amonkhet", 50, 608);

  // Type
  ctx.font = '600 29px "Open Sans"';
  ctx.fillStyle = "#000";
  ctx.textAlign = 'center';
  const type = "Human / Cleric";
  const txtSize = ctx.measureText(type).width;
  ctx.fillText(type, width/2 + 30, 722);

  const leftRoleX = (width / 2) - (txtSize / 2) - 50 + 30;
  const rightRoleX = (width / 2) + (txtSize / 2) + 6 + 30;

  // RoleLeft
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctx.globalAlpha = 1;
  ctemp.fillStyle = "#000000";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[3], leftRoleX, 692, 44, 44);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // RoleRight
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#000000";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[3], rightRoleX, 692, 44, 44);
  ctx.globalAlpha = 1;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitFlag1
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#000000";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[4], 30, 238, 120, 60);
  ctx.globalAlpha = 0.706;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitFlag2
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#000000";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[4], 30, 303, 120, 60);
  ctx.globalAlpha = 0.706;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();
  
  // TraitFlag3
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#000000";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[4], 30, 368, 120, 60);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitIcon1
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#9635E7";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[5], 45, 243, 50, 50);
  ctx.globalAlpha = 1;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitIcon2
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#F3A120";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[6], 45, 313, 50, 50);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitIcon3
  ctemp.save();
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.fillStyle = "#13E3F6";
  ctemp.fillRect(0, 0, canvas.width, canvas.height);
  ctemp.globalCompositeOperation = "destination-in";
  ctemp.drawImage(images[7], 45, 373, 50, 50);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.restore();
}

// Render a troop as a full-size card (like in the troop list).
export const TroopCardLarge = ({troop}) => {
  const classes = useStyles();

  const troopCard = React.useRef(null);
  const temp = React.useRef(null);

  // Perform once.
  useEffect(() => {
    // Draw the canvas.
    loadImages(troopCard.current, temp.current, [
      "./assets/graphics/troopcard/hapatra.png",
      "./assets/graphics/troopcard/roles/Mage.png",
      "./assets/graphics/troopcard/traits/nagabond.png",
      "./assets/graphics/troopcard/traits/indigestible.png",
      "./assets/graphics/troopcard/traits/aspectofplague.png",
      "./assets/graphics/troopcard/colors/GreenYellowOrange.png",
    ], draw);
  }, []);

  return (
    <div style={{padding: '24px'}}>
    <canvas ref={troopCard} className={classes.card} />
    <canvas ref={temp} style={{display: 'none'}} />
    </div>
  );
}