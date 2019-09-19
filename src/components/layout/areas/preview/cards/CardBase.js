import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import WebFontLoader from "webfontloader";

const useStyles = makeStyles(theme => ({
  cardBox: {
    padding: `${theme.spacing(1.5)}px 0 ${theme.spacing(3)}px 0`
  },
  card: {
    width: "100%",
    margin: "0px auto",
    display: "table"
  }
}));

const loadFonts = setFontReady => {
  // Fetch necessary fonts.
  WebFontLoader.load({
    google: {
      families: ["Open Sans:400,600,700", "Roboto", "Raleway"]
    },
    fontactive: () => {
      setFontReady(true);
    }
  });
};

// Ensure all images are loaded before rendering the canvas itself.
const loadImages = (
  canvas,
  temp,
  troop,
  sources,
  callback,
  setDownloadUrl,
  canvasResult
) => {
  const images = {};
  let loadedImages = 0;

  sources.forEach((src, index) => {
    images[index] = new Image();
    images[index].onload = () => {
      loadedImages += 1;
      if (loadedImages >= sources.length) {
        callback(canvas, temp, troop, images, setDownloadUrl, canvasResult);
      }
    };
    images[index].src = src;
  });
};

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

const drawInactive = canvas => {
  // Set the canvas size.
  canvas.width = 491;
  canvas.height = 727;

  const ctx = canvas.getContext("2d");

  const loadingImage = new Image();
  loadingImage.onload = () => {
    ctx.drawImage(loadingImage, 180, 308, 100, 100);
  };
  loadingImage.src = "./assets/graphics/troopcard/loading.png";
};

// Render a troop as a full-size card (like in the troop list).
export const CardBase = ({
  troop,
  sources,
  renderFunction,
  setDownloadUrl,
  canvasResult
}) => {
  const classes = useStyles();

  const card = React.useRef(null);
  const temp = React.useRef(null);

  const [isFontReady, setFontReady] = React.useState(false);

  useEffect(() => {
    loadFonts(setFontReady);
  }, []);

  // Perform when troop changes.
  useEffect(() => {
    // Draw the canvas.
    if (isFontReady) {
      loadImages(
        card.current,
        temp.current,
        troop,
        sources,
        renderFunction, // Pass a render function from the parent.
        setDownloadUrl,
        canvasResult.current
      );
    } else {
      drawInactive(card.current);
    }
  }, [troop, isFontReady]);

  return (
    <Box height={1} className={classes.cardBox}>
      <canvas ref={card} className={classes.card} />
      <canvas ref={temp} style={{ display: "none" }} />
    </Box>
  );
};
