import React, { memo } from "react";

import isEqual from "lodash/isEqual";

import CardTraits from "./cards/CardTraits";
import PreviewBase from "./PreviewBase";

const PreviewTraits = memo(
  ({ troop, loadingLayer, displayLayer, className }) => {
    return (
      <PreviewBase troopName={troop.name} className={className}>
        <CardTraits
          troop={troop}
          loadingLayer={loadingLayer}
          displayLayer={displayLayer}
        />
      </PreviewBase>
    );
  },
  (prevProps, nextProps) => {
    return isEqual(prevProps.troop, nextProps.troop);
  }
);

export default PreviewTraits;
