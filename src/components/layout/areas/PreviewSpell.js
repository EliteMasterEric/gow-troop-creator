import React from "react";

import CardSpell from "./cards/CardSpell";
import PreviewBase from "./PreviewBase";

const PreviewSpell = ({ troop, displayLayer, className, fontsLoaded }) => {
  return (
    <PreviewBase
      troopName={troop.name}
      className={className}
      displayLayer={displayLayer}
    >
      <CardSpell
        troop={troop}
        displayLayer={displayLayer}
        fontsLoaded={fontsLoaded}
      />
    </PreviewBase>
  );
};

export default PreviewSpell;
