import React, { useEffect } from "react";
import {
  Typography,
  CardContent,
  Grid,
  Card,
  Button,
  Tooltip,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Icon } from "../Icon";

const useStyles = makeStyles(theme => ({
  buttonIcon: {
    fontSize: "2em"
  },
  canvas: {
    width: "100%",
    margin: "0px auto",
    display: "table"
  },
  cardBox: {
    padding: `${theme.spacing(1.5)}px 0 ${theme.spacing(3)}px 0`
  },
  mainCard: {
    margin: `${theme.spacing(3)}px 0 0 0`,
    padding: 0
  }
}));

const TabResult = ({ troop, canvasResult }) => {
  const classes = useStyles();

  const [downloadUrl, setDownloadUrl] = React.useState("");

  const updateDownloadURL = () => {
    // Get the data URL of the canvas.
    setDownloadUrl(canvasResult.current.toDataURL("image/png"));
  };
  // Perform when component first renders.
  useEffect(updateDownloadURL, [canvasResult]);
  // Perform when troop changes.
  useEffect(updateDownloadURL, [troop]);

  return (
    <Card className={classes.mainCard}>
      <CardContent>
        <Typography align="center" variant="h2">
          Result
        </Typography>
        <Grid container>
          <Grid item container justify="center" xs={12}>
            <Grid item>
              <Box className={classes.cardBox}>
                <canvas
                  ref={canvasResult}
                  className={classes.canvas}
                  width={1470}
                  height={757}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item container justify="center" xs={12}>
            <Grid item>
              <Tooltip title="Download" aria-label="download">
                <Button
                  variant="outlined"
                  size="large"
                  href={downloadUrl}
                  download={`${troop.name}.png`}
                >
                  <Icon className={classes.buttonIcon} icon="nf-mdi-download" />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TabResult;
