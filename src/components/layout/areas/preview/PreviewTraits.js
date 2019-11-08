import React from "react";

import CardTraits from "./cards/CardTraits";
import PreviewBase from "./PreviewBase";

const PreviewTraits = ({ troop, displayLayer, fontsLoaded, className }) => {
  return (
    <PreviewBase
      troopName={troop.name}
      className={className}
      displayLayer={displayLayer}
    >
      <CardTraits
        troop={troop}
        displayLayer={displayLayer}
        fontsLoaded={fontsLoaded}
      />
    </PreviewBase>
  );
};

export default PreviewTraits;
