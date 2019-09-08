import React from "react";
import { Typography, CardContent, Grid, Card, Button, Tooltip} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { CardTroop } from "./CardTroop";
import { Icon } from './Icon';

const useStyles = makeStyles(theme => ({
  buttonGrid: {
    paddingTop: '6px'
  },
  buttonIcon: {
    fontSize: '2em'
  },
  card: {
    padding: theme.spacing(3)
  }
}));

export const PreviewTroop = ({troop, canvasResult, ...other}) => {
  const classes = useStyles();

  const [downloadUrl, setDownloadUrl] = React.useState("");

  return (
    <Grid item xs={12} lg={4} {...other}>
      <Card className={classes.card}>
        <CardContent>
          <Typography align="center" variant="h2">Preview</Typography>
          <CardTroop troop={troop} canvasResult={canvasResult} setDownloadUrl={setDownloadUrl} />
          <Grid container justify="center" className={classes.buttonGrid} spacing={3}>
            <Grid item>
              <Tooltip title="Download" aria-label="download">
                <Button
                  variant="outlined"
                  size="large"
                  href={downloadUrl}
                  download={`${troop.name}.png`}>
                  <Icon className={classes.buttonIcon} icon={"nf-mdi-download"}/>
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}