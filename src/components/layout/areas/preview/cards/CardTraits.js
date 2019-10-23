import React, { useEffect, useState, useRef } from "react";
import { Layer, Group } from "react-konva";
import { CardBase, CardImage, CardText, CardTextRef } from "./CardBase";
import { rarities } from "../../../../Values";

const CardTraitDescText = ({
  text,
  yCenter,
  cardWidth,
  innerWidth,
  height,
  baseFontSize,
  fontFamily = "Open Sans",
  fontWeight = 600,
  color = "#000"
}) => {
  // A reference to the hidden text display used for math.
  const baseDisplayRef = useRef(null);

  // Create a basic state that resets when the troop changes.
  const [state, setState] = useState({ stable: false, fontSize: baseFontSize });
  useEffect(() => {
    setState({ stable: false, fontSize: baseFontSize });
  }, [text, baseFontSize]);

  // Modify the font size until it's right.
  useEffect(() => {
    if (!state.stable && baseDisplayRef.current !== null) {
      if (baseDisplayRef.current.textArr.length * state.fontSize > height) {
        setState(oldState => ({
          ...oldState,
          fontSize: oldState.fontSize - 3
        }));
      } else {
        // Finalize the state.
        setState(oldState => ({ ...oldState, stable: true }));
      }
    }
  }, [state, height]);

  // The invisible text is used to calculate line heights.
  const baseDisplay = (
    <CardTextRef
      ref={baseDisplayRef}
      x={(cardWidth - innerWidth) / 2}
      y={0}
      text={text}
      fontFamily={fontFamily}
      verticalAlign="middle"
      horizontalAlign="center"
      width={innerWidth}
      color="#009"
      opacity={0}
      height={1000}
      fontSize={state.fontSize}
      fontWeight={fontWeight}
    />
  );

  return state.stable ? (
    <Group>
      {baseDisplay}
      <CardText
        x={(cardWidth - innerWidth) / 2}
        y={yCenter - height / 2}
        text={text}
        color={color}
        fontFamily={fontFamily}
        fontSize={state.fontSize}
        fontWeight={fontWeight}
        width={innerWidth}
        height={height}
        verticalAlign="middle"
        horizontalAlign="center"
      />
    </Group>
  ) : (
    <Group>
      {baseDisplay}
      <CardImage
        src="./assets/graphics/troop/loading.png"
        x={195}
        y={323}
        width={100}
        height={100}
      />
    </Group>
  );
};

const CardTraits = ({ troop, displayLayer }) => {
  const loadingLayer = useRef(null);

  useEffect(() => {
    // Hide while loading.
    displayLayer.current.loaded = false;
    loadingLayer.current.show();
    displayLayer.current.hide();
    loadingLayer.current.draw();
  }, [displayLayer, loadingLayer]);

  return (
    <CardBase width={460} height={727}>
      <Layer ref={loadingLayer}>
        <CardImage
          src="./assets/graphics/troop/loading.png"
          x={195}
          y={323}
          width={100}
          height={100}
        />
      </Layer>
      <Layer ref={displayLayer}>
        <CardImage
          src={
            troop.rarity !== ""
              ? `./assets/graphics/traitscard/${troop.rarity}.png`
              : null
          }
          width={460}
          height={727}
          onLoad={() => {
            // Assume loading is finished.
            displayLayer.current.loaded = true;
            if (loadingLayer.current != null) {
              loadingLayer.current.hide();
              displayLayer.current.show();
              displayLayer.current.draw();
            }
          }}
        />

        <CardImage
          src={
            troop.trait1code !== ""
              ? `./assets/graphics/traiticons/${troop.trait1code}.png`
              : null
          }
          x={400}
          y={100}
          color={rarities.Epic.color}
          width={44}
          height={44}
        />
        <CardImage
          src={
            troop.trait2code !== ""
              ? `./assets/graphics/traiticons/${troop.trait2code}.png`
              : null
          }
          x={400}
          y={306}
          color={rarities.Legendary.color}
          width={44}
          height={44}
        />
        <CardImage
          src={
            troop.trait3code !== ""
              ? `./assets/graphics/traiticons/${troop.trait3code}.png`
              : null
          }
          x={400}
          y={512}
          color={rarities.Mythic.color}
          width={44}
          height={44}
        />

        <CardText
          text={troop.trait1name}
          x={60}
          y={110}
          width={475}
          color={rarities.Epic.color}
          horizontalAlign="left"
          fontSize={32}
          fontWeight={600}
        />

        <CardTraitDescText
          yCenter={220}
          cardWidth={460}
          innerWidth={410}
          height={100}
          text={troop.trait1desc}
          fontWeight={600}
          baseFontSize={32}
        />

        <CardText
          text={troop.trait2name}
          x={60}
          y={316}
          width={475}
          color={rarities.Legendary.color}
          horizontalAlign="left"
          fontSize={32}
          fontWeight={600}
        />

        <CardTraitDescText
          yCenter={425}
          cardWidth={460}
          innerWidth={410}
          height={100}
          text={troop.trait2desc}
          fontWeight={600}
          baseFontSize={32}
        />

        <CardText
          text={troop.trait3name}
          x={60}
          y={522}
          color={rarities.Mythic.color}
          width={475}
          horizontalAlign="left"
          fontSize={32}
          fontWeight={600}
        />

        <CardTraitDescText
          yCenter={630}
          cardWidth={460}
          innerWidth={410}
          height={100}
          text={troop.trait3desc}
          fontWeight={600}
          baseFontSize={32}
        />
      </Layer>
    </CardBase>
  );
};

export default CardTraits;
