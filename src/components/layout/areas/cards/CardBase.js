/* eslint-disable no-underscore-dangle */
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Stage, Image, Text } from "react-konva";
import { Box } from "@material-ui/core";
import useImage from "use-image";
import { makeStyles } from "@material-ui/core/styles";
import Konva from "konva";
import { hexToRgb, measureText, hasWebP } from "../../../Util";

const useStyles = makeStyles(() => ({
  card: {
    margin: "0px auto",
    paddingBottom: "12px",
    "& .konvajs-content": {
      width: "100% !important",
      height: "auto !important",
      "& canvas": {
        position: "relative !important",
        width: "100% !important",
        height: "auto !important"
      }
    }
  }
}));

// https://gist.github.com/mrcoles/0dfaab93a1c899e5f46690676c8c29e5
export const fillMixedText = (ctx, args, x, y) => {
  let textXPos = x;
  const defaultFillStyle = ctx.fillStyle;
  const defaultFont = ctx.font;

  ctx.save();
  args.forEach(({ text, fillStyle, font }) => {
    ctx.fillStyle = fillStyle || defaultFillStyle;
    ctx.font = font || defaultFont;
    ctx.fillText(text, textXPos, y);
    textXPos += ctx.measureText(text).width;
  });
  ctx.restore();
};

export const writeLines = (
  context,
  x,
  y,
  maxWidth,
  baseLineHeight,
  maxLineCount,
  text,
  fontText,
  centerVertical
) => {
  let lineHeight = baseLineHeight;

  while (lineHeight > 0) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];
    context.font = fontText.replace("{}", lineHeight);

    // Build an array of lines, starting a new line if the current one is too long.
    for (let i = 1; i < words.length; i += 1) {
      const word = words[i];
      const { width } = context.measureText(`${currentLine} ${word}`);
      if (width < maxWidth) {
        currentLine += ` ${word}`;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    // Finish up.
    lines.push(currentLine);

    if (lines.length > maxLineCount) {
      lineHeight -= 2;
    } else {
      // Write the actual text.
      let newY = y - (lines.length - 1) * lineHeight;
      if (centerVertical && lines.length === 1) newY -= lineHeight / 2;

      for (let j = 0; j < lines.length; j += 1) {
        context.fillText(lines[j], x, newY + lineHeight * j);
      }
      break;
    }
  }
};

// Copy an existing layer to the given coordinates.
// This requires converting it to a data URL then converting it back.
// Is there a simpler way?
export const CardLayer = ({
  layerRef,
  x,
  y,
  width = 0,
  height = 0,
  loadingY = 0
}) => {
  useEffect(() => {
    console.log(layerRef.current.canvas._canvas);
  }, [layerRef.current.canvas._canvas]);
  // If the layer is valid, display it, otherwise display a loading icon.
  return layerRef.current && layerRef.current.loaded ? (
    <Image
      image={layerRef.current.canvas._canvas}
      x={x}
      y={y}
      width={width || layerRef.current.canvas.width}
      height={height || layerRef.current.canvas.height}
    />
  ) : (
    <CardImageRotating
      base="./graphics/troop/loading"
      x={x + 195}
      y={(loadingY || y) + 323}
      width={100}
      height={100}
    />
  );
};

export const CardImage = ({
  url = null,
  base = null,
  x,
  y,
  width,
  height,
  color = null,
  crop = {},
  onLoad = null
}) => {
  // Full URL, fallback to base + extension.
  const [src, setSrc] = useState(url);
  const [image, status] = useImage(src);
  const ref = useRef(null);

  useEffect(() => {
    // hasWebP is asynchronous.
    hasWebP().then(webp => {
      setSrc(url || `${base}.${webp ? "webp" : "png"}`);
    });
  }, [url, base]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.cache();
      ref.current.getLayer().batchDraw();
      if (status === "loaded" && onLoad != null) onLoad();
    }
  }, [image, onLoad, status]);

  if (src == null) return null;

  return (
    <Image
      ref={ref}
      image={image}
      x={x}
      y={y}
      filters={color !== null ? [Konva.Filters.RGB] : null}
      red={color !== null ? hexToRgb(color).r : null}
      green={color !== null ? hexToRgb(color).g : null}
      blue={color !== null ? hexToRgb(color).b : null}
      width={width}
      height={height}
      crop={crop}
    />
  );
};

export const CardImageRotating = ({
  base,
  x,
  y,
  width,
  height,
  color = null,
  crop = {},
  onLoad = null,
  angularRate = 0
}) => {
  const src = `${base}.${hasWebP() ? "webp" : "png"}`;
  const [image, status] = useImage(src);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.cache();
      ref.current.getLayer().batchDraw();
      if (status === "loaded") {
        if (onLoad != null) onLoad();

        if (angularRate !== 0) {
          // Animation.
          const anim = new Konva.Animation(frame => {
            const angleDiff = (frame.timeDiff * angularRate) / 1000;
            ref.current.rotate(angleDiff);
          }, ref.current);
          anim.start();
        }
      }
    }
  }, [image, onLoad, status]);

  if (src == null) return null;

  return (
    <Image
      ref={ref}
      image={image}
      x={x + width / 2}
      y={y + height / 2}
      filters={color !== null ? [Konva.Filters.RGB] : null}
      red={color !== null ? hexToRgb(color).r : null}
      green={color !== null ? hexToRgb(color).g : null}
      blue={color !== null ? hexToRgb(color).b : null}
      width={width}
      height={height}
      crop={crop}
      offset={{ x: width / 2, y: height / 2 }}
    />
  );
};

/* Takes an array of lines; each line is an array of phrase objects.
 * Sadly assumes horizontal and vertical centering. Too much work to make more general.
 * Example: [
 *   [
 *     { text: "Deal ", weight: 600, size: 50, family: "Open Sans", color: "#333" },
 *     { text: "83", weight: 600, size: 50, family: "Open Sans", color: "#433" },
 *   ],
 *   [
 *     { text: "damage", weight: 600, size: 50, family: "Open Sans", color: "#333" },
 *   ]
 * ]
 */
export const CardMultiStyleText = ({
  textArray,
  yCenter,
  xCenter,
  fontsLoaded
}) => {
  const textHeight = textArray.reduce(
    (sum, textLine) => sum + Math.max(...textLine.map(phrase => phrase.size)),
    0
  );
  let topYOffset = yCenter - textHeight / 2;
  return textArray.map((textLine, textLineIndex) => {
    const maxFontSize = Math.max(...textLine.map(phrase => phrase.size));
    const yPos = topYOffset;
    topYOffset += maxFontSize;
    const lineWidth = textLine.reduce(
      (sum, phrase) =>
        sum +
        measureText(phrase.text, phrase.weight, phrase.size, phrase.family),
      0
    );
    let leftXOffset = xCenter - lineWidth / 2;

    return textLine.map((phrase, phraseIndex) => {
      const xPos = leftXOffset;
      leftXOffset += measureText(
        phrase.text,
        phrase.weight,
        phrase.size,
        phrase.family
      );
      return (
        <CardText
          // eslint-disable-next-line react/no-array-index-key
          key={`spellDesc${textLineIndex}-${phraseIndex}`}
          x={xPos}
          y={yPos}
          text={phrase.text}
          color={phrase.color}
          fontFamily={phrase.family}
          fontSize={phrase.size}
          fontWeight={phrase.weight}
          fontsLoaded={fontsLoaded}
        />
      );
    });
  });
};

export const CardText = ({
  text,
  color = "#FFF",
  fontSize,
  fontFamily = "Open Sans",
  fontWeight,
  x = 0,
  y = 0,
  opacity = 1,
  width = null,
  height = null,
  horizontalAlign = "center",
  verticalAlign = "top",
  shadowColor = null,
  shadowOffset = 0,
  fontsLoaded
}) => {
  return (
    <Text
      text={text}
      fill={color}
      x={x}
      y={y}
      width={width}
      opacity={opacity}
      height={height}
      fontSize={fontSize}
      fontFamily={fontsLoaded ? fontFamily : "Arial"}
      fontStyle={fontWeight}
      align={horizontalAlign}
      verticalAlign={verticalAlign}
      shadowColor={shadowColor}
      shadowOffset={{ x: shadowOffset, y: shadowOffset }}
    />
  );
};

export const CardTextRef = forwardRef(
  (
    {
      text,
      color = "#FFF",
      fontSize,
      fontFamily = "Open Sans",
      fontWeight,
      x = 0,
      y = 0,
      opacity = 1,
      width = null,
      height = null,
      horizontalAlign = "center",
      verticalAlign = "top",
      shadowColor = null,
      shadowOffset = 0,
      fontsLoaded
    },
    ref
  ) => {
    return (
      <Text
        ref={ref}
        text={text}
        fill={color}
        x={x}
        y={y}
        width={width}
        opacity={opacity}
        height={height}
        fontSize={fontSize}
        fontFamily={fontsLoaded ? fontFamily : "sans-serif"}
        fontStyle={fontWeight}
        align={horizontalAlign}
        verticalAlign={verticalAlign}
        shadowColor={shadowColor}
        shadowOffset={{ x: shadowOffset, y: shadowOffset }}
      />
    );
  }
);

// Render a troop as a full-size card (like in the troop list).
export const CardBase = ({ children, width, height }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Stage scaleX={1} width={width} height={height}>
        {children}
      </Stage>
    </Box>
  );
};
