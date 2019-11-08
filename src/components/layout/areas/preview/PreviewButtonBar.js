import React from "react";
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

const PreviewButtonBar = ({ troopName, displayLayer }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonGrid}>
      <Tooltip title="Download" aria-label="download">
        <Button
          variant="outlined"
          size="large"
          className={classes.button}
          onClick={() => {
            if (displayLayer.current !== null) {
              const link = document.createElement("a");
              link.download = `${troopName}.png`;
              link.href = displayLayer.current.toDataURL();
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          }}
        >
          <Icon className={classes.buttonIcon} icon="nf-mdi-download" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default PreviewButtonBar;
