import React from "react";

import CardSpell from "./cards/CardSpell";
import PreviewBase from "./PreviewBase";

const PreviewSpell = ({ troop, displayLayer, className }) => {
  return (
    <PreviewBase troopName={troop.name} className={className}>
      <CardSpell troop={troop} displayLayer={displayLayer} />
    </PreviewBase>
  );
};

export default PreviewSpell;
