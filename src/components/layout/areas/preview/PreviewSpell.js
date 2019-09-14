import React from "react";

import CardSpell from "./cards/CardSpell";
import PreviewPanel from "./PreviewBase";

const PreviewSpell = ({ troop, canvasResult, className }) => {
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
};

export default PreviewSpell;
