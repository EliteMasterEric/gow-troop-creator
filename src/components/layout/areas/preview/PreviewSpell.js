import React, { memo } from "react";

import isEqual from "lodash/isEqual";

import CardSpell from "./cards/CardSpell";
import PreviewPanel from "./PreviewBase";

const PreviewSpell = memo(
  ({ troop, loadingLayer, displayLayer, className }) => {
    return (
      <PreviewPanel troopName={troop.name} className={className}>
        <CardSpell
          troop={troop}
          loadingLayer={loadingLayer}
          displayLayer={displayLayer}
        />
      </PreviewPanel>
    );
  },
  (prevProps, nextProps) => {
    return isEqual(prevProps.troop, nextProps.troop);
  }
);

export default PreviewSpell;
