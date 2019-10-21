import React from "react";
import { Layer } from "react-konva";
import { CardBase, CardImage } from "./CardBase";

const CardTraits = ({ troop, displayLayer }) => {
  const loadingLayer = React.createRef();

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
            if (loadingLayer.current != null) {
              loadingLayer.current.hide();
              displayLayer.current.show();
              displayLayer.current.draw();
            }
          }}
        />
      </Layer>
    </CardBase>
  );
};

export default CardTraits;
