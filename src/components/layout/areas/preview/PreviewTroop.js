import React from "react";

import CardTroop from "./cards/CardTroop";
import PreviewBase from "./PreviewBase";

const PreviewTroop = ({ troop, displayLayer, className }) => {
  return (
    <PreviewBase
      troopName={troop.name}
      className={className}
      downloadUrl={(() => {
        console.log(displayLayer.current);
        return displayLayer.current !== null
          ? displayLayer.current.toDataURL()
          : "";
      })()}
    >
      <CardTroop troop={troop} displayLayer={displayLayer} />
    </PreviewBase>
  );
};

export default PreviewTroop;
