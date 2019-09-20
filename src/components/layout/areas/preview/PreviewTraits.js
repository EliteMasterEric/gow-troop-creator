import React, { memo } from "react";

import isEqual from "lodash/isEqual";

import CardTraits from "./cards/CardTraits";
import PreviewPanel from "./PreviewBase";

const PreviewTraits = memo(
  ({ troop, canvasResult, className }) => {
    const [downloadUrl, setDownloadUrl] = React.useState("");

    return (
      <PreviewPanel
        troopName={troop.name}
        downloadUrl={downloadUrl}
        className={className}
      >
        <CardTraits
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

export default PreviewTraits;
