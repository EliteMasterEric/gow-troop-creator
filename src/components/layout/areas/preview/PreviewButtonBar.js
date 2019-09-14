import React from "react";
import { Grid, Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Icon } from "../../../Icon";

const useStyles = makeStyles(() => ({
  buttonGrid: {
    paddingTop: "6px"
  },
  buttonIcon: {
    fontSize: "2em"
  }
}));

const PreviewButtonBar = ({ troopName, downloadUrl }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.buttonGrid} spacing={3}>
      <Grid item>
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
      </Grid>
    </Grid>
  );
};

export default PreviewButtonBar;
