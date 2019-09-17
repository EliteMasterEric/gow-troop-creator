import React from "react";

import { CardBase, fillMixedText } from "./CardBase";
import { rarities } from "../../../../Values";

const coreSources = [
  "./assets/graphics/troopcard/top.png", // 0 - CardTop
  "./assets/graphics/troopcard/bottom.png", // 1 - CardBottom
  "./assets/graphics/troopcard/divider.png", // 2 - SpellDivider
  "./assets/graphics/troopcard/spellbg.png", // 3 - SpellBackground
  "./assets/graphics/troopcard/magic.png" // 4 - Magic
];

const writeSpellDescriptionLines = (
  context,
  x,
  y,
  maxWidth,
  maxHeight,
  baseLineHeight,
  troop,
  text
) => {
  //
  // DEATH TO ALL YE WHO ENTER HERE
  // This function is a nightmare of confusing logic, combining word wrapping
  // with the code that colors the magic formatting text.
  //

  let lineHeight = baseLineHeight;

  const fillStyle = "#000000";
  const altFillStyle = "#680b7c";

  while (lineHeight > 0) {
    const words = text.split(" ");
    const lines = [];
    const lineIndexes = [0];
    let currentLine = words[0];
    let magicFillWordIndex = -1;

    context.font = '600 {}px "Open Sans"'.replace("{}", lineHeight);

    // Build an array of lines, starting a new line if the current one is too long.
    let i = 1;
    for (i = 1; i < words.length; i += 1) {
      let word = words[i];
      // If word matches any...
      if (["{magic}", "{MAGIC}", "{Magic}"].indexOf(word) !== -1) {
        magicFillWordIndex = i;
        const magicDamage =
          parseInt(troop.spellbase, 10) +
          parseInt(troop.spellmult, 10) * parseInt(troop.magic, 10);
        if (troop.spellrange) {
          word = `${Math.floor(magicDamage / 2)} - ${magicDamage}`;
        } else {
          word = magicDamage;
        }
      }
      const { width } = context.measureText(`${currentLine} ${word}`);
      if (width < maxWidth) {
        currentLine += ` ${word}`;
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
      const newY = y - (lines.length * lineHeight) / 2;

      for (let j = 0; j < lines.length; j += 1) {
        if (
          magicFillWordIndex !== -1 &&
          (magicFillWordIndex <= lineIndexes[j + 1] &&
            lineIndexes[j] < magicFillWordIndex)
        ) {
          context.textAlign = "left";
          const newX = x - context.measureText(lines[j]).width / 2;
          context.fillStyle = altFillStyle;
          const magicFillWordLocalIndex = magicFillWordIndex - lineIndexes[j];

          const lineWords = lines[j].split(" ");
          const magicWords = lineWords.splice(
            magicFillWordLocalIndex,
            troop.spellrange ? 3 : 1
          );

          const lineFirstPart = lines[j].split(magicWords.join(" "))[0];
          const lineLastPart = lines[j].split(magicWords.join(" "))[1];
          let textParts = [];
          const boldFont = 'bold {}px "Open Sans"'.replace("{}", lineHeight);
          if (troop.spellrange) {
            textParts = [
              { text: lineFirstPart, fillStyle },
              {
                text: `${magicWords[0]} `,
                fillStyle: altFillStyle,
                font: boldFont
              },
              { text: magicWords[1], fillStyle },
              {
                text: ` ${magicWords[2]}`,
                fillStyle: altFillStyle,
                font: boldFont
              },
              { text: lineLastPart, fillStyle }
            ];
          } else {
            textParts = [
              { text: lineFirstPart, fillStyle },
              { text: magicWords[0], fillStyle: altFillStyle, font: boldFont },
              { text: lineLastPart, fillStyle }
            ];
          }
          fillMixedText(context, textParts, newX, newY + lineHeight * j);
        } else {
          context.textAlign = "center";
          context.fillStyle = fillStyle;
          context.fillText(lines[j], x, newY + lineHeight * j);
        }
      }
      break;
    }
  }
};

// Render the canvas itself.
const renderSpell = (
  canvas,
  temp,
  troop,
  images,
  setDownloadUrl,
  canvasResult
) => {
  // Set the canvas size.
  canvas.width = 460;
  canvas.height = 723;
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
  ctemp.drawImage(images[1], 0, 689, 460, 34);
  // SpellDivider
  ctemp.drawImage(images[2], 0, 427, 460, 14);
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
  ctx.fillRect(0, 16, 460, 71);

  // Spell Name
  ctx.font = '600 50px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = "center";
  ctx.fillText(troop.spellname, 215, 66);

  // Spell Image
  ctx.drawImage(images[5], 0, 87, 460, 340);

  // Spell Card
  ctx.drawImage(images[3], 0, 441, 460, 248);

  // Magic Icon
  ctx.drawImage(images[4], 185, 454, 34, 42);

  // Magic Value
  ctx.font = '600 40px "Open Sans"';
  ctx.fillStyle = "#FFF";
  ctx.textAlign = "left";
  ctx.fillText(troop.magic, 235, 488);

  // SpellDesc
  writeSpellDescriptionLines(
    ctx,
    230,
    623,
    430,
    150,
    36,
    troop,
    troop.spelldesc
  );

  // Add the spell to the results.
  const cresult = canvasResult.getContext("2d");
  // Resize to match the trait card.
  const baseHeight = 709;
  const baseWidth = canvas.width / canvas.height * 709;
  console.log(baseWidth);
  cresult.clearRect(5, 30, baseWidth, baseHeight);
  cresult.drawImage(canvas, 5, 30, baseWidth, baseHeight);
  //cresult.clearRect(5, 17, canvas.width, canvas.height);
  //cresult.drawImage(canvas, 5, 17, canvas.width, canvas.height);

  // Set the download URL.
  setDownloadUrl(canvas.toDataURL("image/png"));
};

const getImageURL = troop => {
  // Fetch the URL for the spell image, or return a default.
  if (troop.spellimage !== null) {
    return URL.createObjectURL(troop.spellimage);
  }
  // Else, use the default.
  return `./assets/graphics/troopcard/eruption.png`;
};

// Render a spell as part of a full-size card (like in the troop list).
const CardSpell = ({ troop, setDownloadUrl, canvasResult }) => {
  return (
    <CardBase
      troop={troop}
      sources={coreSources.concat([getImageURL(troop)])}
      renderFunction={renderSpell}
      setDownloadUrl={setDownloadUrl}
      canvasResult={canvasResult}
    />
  );
};

export default CardSpell;
