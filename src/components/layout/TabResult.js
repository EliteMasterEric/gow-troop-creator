import React, { useRef } from "react";
import { CardContent, Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Stage, Layer } from "react-konva";
import { CardLayer } from "./areas/preview/cards/CardBase";

import PreviewButtonBar from "./areas/preview/PreviewButtonBar";

const useStyles = makeStyles(theme => ({
  buttonIcon: {
    fontSize: "2em"
  },
  canvas: {
    width: "100%",
    margin: "0px auto",
    display: "table"
  },
  card: {
    margin: "0px auto",
    paddingBottom: "12px",
    "& .konvajs-content": {
      width: "100% !important",
      height: "auto !important",
      "& canvas": {
        position: "relative !important",
        width: "100% !important",
        height: "auto !important"
      }
    }
  },
  cardBox: {
    padding: `${theme.spacing(1.5)}px 0 ${theme.spacing(3)}px 0`
  },
  mainCard: {
    margin: `${theme.spacing(3)}px auto`,
    padding: 0
  }
}));

const TabResult = ({ troop, spellLayer, troopLayer, traitsLayer }) => {
  const classes = useStyles();

  const resultStageRef = useRef();

  return (
    <Card className={classes.mainCard}>
      <CardContent>
        <Grid container>
          <Grid item container justify="center" xs={12}>
            <Grid item>
              <Box className={classes.card}>
                <Stage scaleX={1} width={1470} height={744}>
                  <Layer ref={resultStageRef}>
                    <CardLayer
                      height={709}
                      width={460}
                      x={5}
                      y={30}
                      layerRef={spellLayer}
                    />
                    <CardLayer
                      height={739}
                      width={490}
                      x={475}
                      y={0}
                      loadingY={30}
                      layerRef={troopLayer}
                    />
                    <CardLayer
                      height={709}
                      width={460}
                      x={1005}
                      y={30}
                      layerRef={traitsLayer}
                    />
                  </Layer>
                </Stage>
              </Box>
            </Grid>
          </Grid>
          <PreviewButtonBar
            troopName={troop.name}
            displayLayer={resultStageRef}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TabResult;
