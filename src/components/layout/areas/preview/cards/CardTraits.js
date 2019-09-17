import React from "react";

import { CardBase, writeLines } from "./CardBase";

import { rarities } from "../../../../Values";

const coreSources = [
  "./assets/graphics/troopcard/top.png", // 0 - CardTop
  "./assets/graphics/troopcard/bottom.png", // 1 - CardBottom
  "./assets/graphics/troopcard/divider.png", // 2 - TraitDivider
  "./assets/graphics/troopcard/ascension.png", // 3 - Trait Pip
  "./assets/graphics/troopcard/traitbg.png" // 4 - Trait background
];

// Render the canvas itself.
const renderTraits = (
  canvas,
  temp,
  troop,
  images,
  setDownloadUrl,
  canvasResult
) => {
  // Set the canvas size.
  canvas.width = 460;
  canvas.height = 727;
  const ctx = canvas.getContext("2d");
  temp.width = canvas.width;
  temp.height = canvas.height;
  const ctemp = temp.getContext("2d");

  const rarityColor = rarities[troop.rarity].color;

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
  ctemp.fillStyle = rarityColor;
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
  ctx.textAlign = "center";
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
  ctemp.fillStyle = rarities.Epic.color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.globalAlpha = 1;
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitIcon2, TraitPip2
  // To color Legendary, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[3], 12, 310, 36, 36);
  ctemp.drawImage(images[6], 404, 310, 36, 36);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities.Legendary.color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitIcon3, TraitPip3
  // To color Mythic, we draw on a hidden canvas, color it,
  // then copy it to the full canvas.
  ctemp.save();
  ctemp.drawImage(images[3], 12, 516, 36, 36);
  ctemp.drawImage(images[7], 404, 516, 36, 36);
  ctemp.globalCompositeOperation = "source-in";
  ctemp.fillStyle = rarities.Mythic.color;
  ctemp.fillRect(0, 0, temp.width, temp.height);
  ctx.drawImage(temp, 0, 0, temp.width, temp.height);
  ctemp.clearRect(0, 0, temp.width, temp.height);
  ctemp.restore();

  // TraitName1
  ctx.font = '600 32px "Open Sans"';
  ctx.textAlign = "left";
  ctx.fillStyle = rarities.Epic.color;
  ctx.fillText(troop.trait1name, 60, 104 + 30);

  // TraitName2
  ctx.fillStyle = rarities.Legendary.color;
  ctx.fillText(troop.trait2name, 60, 310 + 30);

  // TraitName3
  ctx.fillStyle = rarities.Mythic.color;
  ctx.fillText(troop.trait3name, 60, 516 + 30);

  // TraitDesc1
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  writeLines(
    ctx,
    230,
    246,
    400,
    32,
    3,
    troop.trait1desc,
    '600 {}px "Open Sans"',
    true
  );

  // TraitDesc2
  writeLines(
    ctx,
    230,
    452,
    400,
    32,
    3,
    troop.trait2desc,
    '600 {}px "Open Sans"',
    true
  );

  // TraitDesc3
  writeLines(
    ctx,
    230,
    658,
    400,
    32,
    3,
    troop.trait3desc,
    '600 {}px "Open Sans"',
    true
  );

  // Add the traits to the results.
  const cresult = canvasResult.getContext("2d");
  // Resize to match the trait card.
  const baseHeight = 709;
  const baseWidth = (canvas.width / canvas.height) * 709;
  console.log(baseWidth);
  cresult.clearRect(1005, 30, baseWidth, baseHeight);
  cresult.drawImage(canvas, 1005, 30, baseWidth, baseHeight);
  //cresult.clearRect(1005, 12, canvas.width, canvas.height);
  //cresult.drawImage(canvas, 1005, 12, canvas.width, canvas.height);

  // Set the download URL.
  setDownloadUrl(canvas.toDataURL("image/png"));
};

// Render a spell as part of a full-size card (like in the troop list).
const CardTraits = ({ troop, setDownloadUrl, canvasResult }) => {
  return (
    <CardBase
      troop={troop}
      sources={coreSources.concat([
        `./assets/graphics/troopcard/traits/${troop.trait1code}.png`, // 5 - Trait Icon 1
        `./assets/graphics/troopcard/traits/${troop.trait2code}.png`, // 6 - Trait Icon 2
        `./assets/graphics/troopcard/traits/${troop.trait3code}.png` // 7 - Trait Icon 3
      ])}
      renderFunction={renderTraits}
      setDownloadUrl={setDownloadUrl}
      canvasResult={canvasResult}
    />
  );
};

export default CardTraits;
