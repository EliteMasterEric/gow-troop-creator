import React, { memo } from "react";

import isEqual from "lodash/isEqual";

import CardTraits from "./cards/CardTraits";
import PreviewPanel from "./PreviewBase";

const PreviewTraits = memo(
  ({ troop, loadingLayer, displayLayer, className }) => {
    return (
      <PreviewPanel troopName={troop.name} className={className}>
        <CardTraits
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

export default PreviewTraits;
