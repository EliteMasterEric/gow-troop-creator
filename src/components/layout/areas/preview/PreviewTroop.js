import React, { memo } from "react";

import isEqual from "lodash/isEqual";

import CardTroop from "./cards/CardTroop";
import PreviewPanel from "./PreviewBase";

const PreviewTroop = memo(
  ({ troop, canvasResult, className }) => {
    const [downloadUrl, setDownloadUrl] = React.useState("");

    return (
      <PreviewPanel
        troopName={troop.name}
        downloadUrl={downloadUrl}
        className={className}
      >
        <CardTroop
          troop={troop}
          canvasResult={canvasResult}
          setDownloadUrl={setDownloadUrl}
        />
      </PreviewPanel>
    );
  },
  (prevProps, nextProps) => {
    return isEqual(prevProps.troop, nextProps.troop);
  }
);

export default PreviewTroop;
