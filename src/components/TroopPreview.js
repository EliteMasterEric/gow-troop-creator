import React from "react";
import { Typography, CardContent, Grid, Card, Button, Tooltip} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { TroopCard } from "./TroopCard";
import { Icon } from './Icon';

const useStyles = makeStyles(theme => ({
  buttonGrid: {
    paddingTop: '6px'
  },
  buttonIcon: {
    fontSize: '2em'
  }
}));

export const TroopPreview = ({className, troop, downloadUrl, setDownloadUrl}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={4} className={className}>
      <Card>
        <CardContent>
          <Typography align="center" variant="h2">Preview</Typography>
          <TroopCard troop={troop} setDownloadUrl={setDownloadUrl} />
          <Grid container className={classes.buttonGrid} spacing={3}>
            <Grid item>
              <Tooltip title="Download" aria-label="download">
                <Button
                  variant="outlined"
                  size="large"
                  href={downloadUrl}
                  download>
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