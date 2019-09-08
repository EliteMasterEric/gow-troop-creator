import React, { useEffect } from "react";
import { Typography, CardContent, Grid, Card, Button, Tooltip} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { CardTroop } from "./CardTroop";
import { CardTraits } from "./CardTraits";
import { CardSpell } from "./CardSpell";
import { Icon } from './Icon';

const useStyles = makeStyles(theme => ({
  buttonGrid: {
    paddingTop: '6px'
  },
  buttonIcon: {
    fontSize: '2em'
  }
}));

export const TabResult = ({troop, canvasResult}) => {
  const classes = useStyles();

  useEffect(() => {
    if (canvasResult != null) {
      canvasResult.current.width = 490 + 10 + 460;
      canvasResult.current.height = 746;  
    }
  }, [canvasResult]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography align="center" variant="h2">Result</Typography>
            <canvas ref={canvasResult} />
            <Grid item container justify="center" className={classes.buttonGrid} spacing={3}>
              <Grid item>
                <Tooltip title="Download" aria-label="download">
                  <Button
                    variant="outlined"
                    size="large"
                    href={"Test"}
                    download={`${troop.name}.png`}>
                    <Icon className={classes.buttonIcon} icon={"nf-mdi-download"}/>
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}