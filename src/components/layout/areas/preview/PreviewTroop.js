import React from "react";

import CardTroop from "./cards/CardTroop";
import PreviewPanel from "./PreviewBase";

const PreviewTroop = ({ troop, canvasResult, className }) => {
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
};

export default PreviewTroop;
