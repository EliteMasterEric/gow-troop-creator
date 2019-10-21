import React, { useEffect, useRef, useState } from "react";
import { Layer } from "react-konva";
import { CardBase, CardImage, CardText, CardTextRef } from "./CardBase";
import { rarities } from "../../../../Values";

const getImageURL = troop => {
  if (troop.troopimage !== null) {
    return URL.createObjectURL(troop.troopimage);
  }
  // Else, use the default.
  return `./assets/graphics/troop/infernus.png`;
};

// Render a spell as part of a full-size card (like in the troop list).
const CardTroop = ({ troop, displayLayer }) => {
  const loadingLayer = React.createRef();

  const typeRef = useRef();

  useEffect(() => {
    // Hide while loading.
    loadingLayer.current.show();
    displayLayer.current.hide();
    loadingLayer.current.draw();
  }, [displayLayer, loadingLayer]);

  const [typeTextWidth, setTypeTextWidth] = useState(0);

  useEffect(() => {
    if (typeRef.current !== undefined) {
      setTypeTextWidth(typeRef.current.textWidth);
    }
  }, [troop]);

  const typeText =
    troop.type2 !== "" ? `${troop.type1} / ${troop.type2}` : troop.type1;

  return (
    <CardBase width={490} height={739}>
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
          src={getImageURL(troop)}
          x={30}
          y={37 + 9}
          width={461}
          height={643}
          crop={{ x: 0, y: 9, width: 460, height: 643 }}
        />

        <CardImage
          src={
            troop.rarity !== ""
              ? `./assets/graphics/troopcard/${troop.rarity}.png`
              : null
          }
          width={490}
          height={739}
          onLoad={() => {
            // Assume loading is finished.
            if (loadingLayer.current != null) {
              loadingLayer.current.hide();
              displayLayer.current.show();
              displayLayer.current.draw();
            }
          }}
        />

        <CardImage
          src={
            troop.rarity !== ""
              ? `./assets/graphics/colors/${troop.colors}.png`
              : null
          }
          width={100}
          height={100}
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
        />

        <CardText
          text={troop.level}
          x={0}
          y={96}
          width={475}
          horizontalAlign="right"
          fontSize={50}
          fontWeight={600}
        />

        <CardImage
          src={
            troop.trait1code !== ""
              ? `./assets/graphics/traiticons/${troop.trait1code}.png`
              : null
          }
          x={45}
          y={243}
          color={rarities.Epic.color}
          width={50}
          height={50}
        />
        <CardImage
          src={
            troop.trait2code !== ""
              ? `./assets/graphics/traiticons/${troop.trait2code}.png`
              : null
          }
          x={45}
          y={313}
          color={rarities.Legendary.color}
          width={50}
          height={50}
        />
        <CardImage
          src={
            troop.trait3code !== ""
              ? `./assets/graphics/traiticons/${troop.trait3code}.png`
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
        />

        <CardText
          text={troop.attack}
          x={110}
          y={635}
          width={460}
          horizontalAlign="left"
          fontSize={45}
          fontWeight={600}
        />
        <CardText
          text={troop.armor}
          x={250}
          y={635}
          width={460}
          horizontalAlign="left"
          fontSize={45}
          fontWeight={600}
        />
        <CardText
          text={troop.life}
          x={400}
          y={635}
          width={460}
          horizontalAlign="left"
          fontSize={45}
          fontWeight={600}
        />

        <CardImage
          src={
            troop.rarity !== ""
              ? `./assets/graphics/roles/${troop.role}.png`
              : null
          }
          x={205 - typeTextWidth / 2}
          y={692}
          color="#000000"
          width={44}
          height={44}
        />
        <CardTextRef
          ref={typeRef}
          text={typeText}
          x={30}
          y={700}
          width={460}
          color="#000000"
          fontSize={30}
          fontWeight={600}
        />
        <CardImage
          src={
            troop.rarity !== ""
              ? `./assets/graphics/roles/${troop.role}.png`
              : null
          }
          x={270 + typeTextWidth / 2}
          y={692}
          color="#000000"
          width={44}
          height={44}
        />
      </Layer>
    </CardBase>
  );
};

export default CardTroop;
