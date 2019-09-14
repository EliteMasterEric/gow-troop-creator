import React from "react";

import CardTraits from "./cards/CardTraits";
import PreviewPanel from "./PreviewBase";

const PreviewTraits = ({ troop, canvasResult, className }) => {
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
};

export default PreviewTraits;
