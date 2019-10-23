import React from "react";

import CardTraits from "./cards/CardTraits";
import PreviewBase from "./PreviewBase";

const PreviewTraits = ({ troop, displayLayer, className }) => {
  return (
    <PreviewBase troopName={troop.name} className={className}>
      <CardTraits troop={troop} displayLayer={displayLayer} />
    </PreviewBase>
  );
};

export default PreviewTraits;
