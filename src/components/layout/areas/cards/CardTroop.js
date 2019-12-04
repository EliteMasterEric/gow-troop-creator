import React, { useEffect, useRef, useState } from "react";
import Konva from "konva";
import { Layer } from "react-konva";
import debounceRender from "react-debounce-render";

import { rarities } from "../../../Values";

import {
  CardBase,
  CardImage,
  CardText,
  CardTextRef,
  CardImageRotating
} from "./CardBase";

// Render a spell as part of a full-size card (like in the troop list).
const CardTroop = debounceRender(({ troop, displayLayer, fontsLoaded }) => {
  const loadingLayer = useRef(null);

  useEffect(() => {
    // Hide while loading.
    displayLayer.current.loaded = false;
    loadingLayer.current.show();
    displayLayer.current.hide();
    loadingLayer.current.draw();
  }, []);

  // Show once loaded.
  useEffect(() => {
    if (fontsLoaded && displayLayer.current.loaded) {
      loadingLayer.current.hide();
      displayLayer.current.show();
      displayLayer.current.draw();
    }
  }, [fontsLoaded, (displayLayer.current || { loaded: false }).loaded]);

  // Troop type text to display.
  const typeText =
    troop.type2 !== "" ? `${troop.type1} / ${troop.type2}` : troop.type1;

  // Logic for positioning role icons.
  const measureTypeText = () => {
    const measure = new Konva.Text({
      fontFamily: "Open Sans",
      fontSize: 30,
      fontWeight: 600,
      text: typeText
    });
    return measure.width();
  };

  return (
    <CardBase width={490} height={739}>
      <Layer ref={loadingLayer}>
        <CardImageRotating
          base="./graphics/troop/loading"
          x={195}
          y={323}
          width={100}
          height={100}
          angularRate={90}
        />
      </Layer>
      <Layer ref={displayLayer}>
        <CardImage
          url={troop.troopimage}
          base="./graphics/troop/infernus"
          x={30}
          y={37 + 9}
          width={461}
          height={643}
        />
        <CardImage
          base={
            troop.rarity !== "" ? `./graphics/troopcard/${troop.rarity}` : null
          }
          width={490}
          height={739}
          onLoad={() => {
            displayLayer.current.loaded = true;
          }}
        />

        <CardImage
          base={
            troop.rarity !== "" ? `./graphics/colors/${troop.colors}` : null
          }
          width={100}
          height={100}
          x={0}
          y={0}
        />
        <CardText
          text={troop.cost}
          x={15}
          y={25}
          width={70}
          fontSize={60}
          fontWeight={600}
          shadowColor="black"
          horizontalAlign="center"
          shadowOffset={2}
          fontsLoaded={fontsLoaded}
        />

        <CardText
          text={troop.level}
          x={0}
          y={96}
          width={475}
          horizontalAlign="right"
          fontSize={50}
          fontWeight={600}
          fontsLoaded={fontsLoaded}
        />

        <CardImage
          base={
            troop.trait1code !== ""
              ? `./graphics/traiticons/${troop.trait1code}`
              : null
          }
          x={45}
          y={243}
          color={rarities.Epic.color}
          width={50}
          height={50}
        />
        <CardImage
          base={
            troop.trait2code !== ""
              ? `./graphics/traiticons/${troop.trait2code}`
              : null
          }
          x={45}
          y={308}
          color={rarities.Legendary.color}
          width={50}
          height={50}
        />
        <CardImage
          base={
            troop.trait3code !== ""
              ? `./graphics/traiticons/${troop.trait3code}`
              : null
          }
          x={45}
          y={373}
          color={rarities.Mythic.color}
          width={50}
          height={50}
        />

        <CardText
          text={troop.name}
          x={45}
          y={285}
          width={380}
          height={300}
          fontFamily="Raleway"
          horizontalAlign="left"
          verticalAlign="bottom"
          fontSize={57}
          fontWeight={500}
          fontsLoaded={fontsLoaded}
        />
        <CardText
          text={troop.kingdom}
          x={45}
          y={585}
          width={460}
          horizontalAlign="left"
          color="#CCCCCC"
          fontSize={30}
          fontWeight={600}
          fontsLoaded={fontsLoaded}
        />

        <CardText
          text={troop.attack}
          x={110}
          y={635}
          width={460}
          horizontalAlign="left"
          fontSize={45}
          fontWeight={600}
          fontsLoaded={fontsLoaded}
        />
        <CardText
          text={troop.armor}
          x={250}
          y={635}
          width={460}
          horizontalAlign="left"
          fontSize={45}
          fontWeight={600}
          fontsLoaded={fontsLoaded}
        />
        <CardText
          text={troop.life}
          x={400}
          y={635}
          width={460}
          horizontalAlign="left"
          fontSize={45}
          fontWeight={600}
          fontsLoaded={fontsLoaded}
        />

        <CardImage
          base={
            troop.rarity !== "" && fontsLoaded
              ? `./graphics/roles/${troop.role}`
              : null
          }
          x={260 - 44 - 8 - measureTypeText() / 2}
          y={692}
          color="#000000"
          width={44}
          height={44}
        />
        <CardTextRef
          text={typeText}
          x={40}
          y={700}
          horizontalAlign="center"
          width={440}
          color="#000000"
          fontSize={30}
          fontWeight={600}
          fontsLoaded={fontsLoaded}
        />
        <CardImage
          base={
            troop.rarity !== "" && fontsLoaded
              ? `./graphics/roles/${troop.role}`
              : null
          }
          x={260 + 8 + measureTypeText() / 2}
          y={692}
          color="#000000"
          width={44}
          height={44}
        />
      </Layer>
    </CardBase>
  );
}, 300);

export default CardTroop;
