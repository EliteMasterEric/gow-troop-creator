import React from "react";

import CardTroop from "./cards/CardTroop";
import PreviewBase from "./PreviewBase";

const PreviewTroop = ({ troop, displayLayer, className, fontsLoaded }) => {
  return (
    <PreviewBase
      troopName={troop.name}
      className={className}
      displayLayer={displayLayer}
    >
      <CardTroop
        troop={troop}
        displayLayer={displayLayer}
        fontsLoaded={fontsLoaded}
      />
    </PreviewBase>
  );
};

export default PreviewTroop;
