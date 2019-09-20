import React, { memo } from "react";
import { Grid, Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Icon } from "../../../Util";

const useStyles = makeStyles(() => ({
  buttonGrid: {},
  buttonIcon: {
    fontSize: "2em"
  }
}));

const PreviewButtonBar = memo(({ troopName, downloadUrl }) => {
  const classes = useStyles();

  return (
    <Tooltip title="Download" aria-label="download">
      <Button
        variant="outlined"
        size="large"
        href={downloadUrl}
        download={`${troopName}.png`}
      >
        <Icon className={classes.buttonIcon} icon="nf-mdi-download" />
      </Button>
    </Tooltip>
  );
});

export default PreviewButtonBar;
