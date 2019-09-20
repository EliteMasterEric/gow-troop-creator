import React, { memo } from "react";

import isEqual from "lodash/isEqual";

import CardSpell from "./cards/CardSpell";
import PreviewPanel from "./PreviewBase";

const PreviewSpell = memo(
  ({ troop, canvasResult, className }) => {
    const [downloadUrl, setDownloadUrl] = React.useState("");

    return (
      <PreviewPanel
        troopName={troop.name}
        downloadUrl={downloadUrl}
        className={className}
      >
        <CardSpell
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

export default PreviewSpell;
