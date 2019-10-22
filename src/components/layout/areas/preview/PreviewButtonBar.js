import React, { memo } from "react";
import { Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Icon } from "../../../Util";

const useStyles = makeStyles(() => ({
  buttonGrid: {
    width: "100%"
  },
  buttonIcon: {
    fontSize: "2em"
  },
  button: {
    margin: "0 auto",
    display: "table"
  }
}));

const PreviewButtonBar = memo(({ troopName, downloadUrl }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonGrid}>
      <Tooltip title="Download" aria-label="download">
        <Button
          variant="outlined"
          size="large"
          className={classes.button}
          href={downloadUrl}
          download={`${troopName}.png`}
        >
          <Icon className={classes.buttonIcon} icon="nf-mdi-download" />
        </Button>
      </Tooltip>
    </div>
  );
});

export default PreviewButtonBar;
