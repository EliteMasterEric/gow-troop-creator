import React, { memo } from "react";

import isEqual from "lodash/isEqual";

import CardTroop from "./cards/CardTroop";
import PreviewPanel from "./PreviewBase";

const PreviewTroop = memo(
  ({ troop, loadingLayer, displayLayer, className }) => {
    return (
      <PreviewPanel troopName={troop.name} className={className}>
        <CardTroop
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

export default PreviewTroop;
