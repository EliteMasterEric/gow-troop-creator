import React, { memo, useEffect } from "react";
import { CardContent, Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Stage, Layer, Image } from "react-konva";
import { CardImage } from "./areas/preview/cards/CardBase";

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
  cardBox: {
    padding: `${theme.spacing(1.5)}px 0 ${theme.spacing(3)}px 0`
  },
  mainCard: {
    margin: `${theme.spacing(3)}px 0 0 0`,
    padding: 0
  }
}));

const TabResult = memo(({ troop, spellLayer, troopLayer, traitsLayer }) => {
  const classes = useStyles();

  //const [spellImage, setSpellImage] = useImage(src);
  //const [troopImage, setTraitImage] = useImage(src);
  //const [traitsImage, setTraitsImage] = useImage(src);
//
  //useEffect(() => {
  //  if (spellLayer.current !== null) {
  //    const image = new window.Image();
  //    image.src = this.props.src;
  //    image.addEventListener("load", () => {
  //      setSpellImage(this);
  //    });
  //    spellImage;
  //    ref.current.getLayer().batchDraw();
  //    if (status === "loaded" && onLoad != null) onLoad();
  //  }
  //}, [spellLayer]);

  const [downloadUrl] = React.useState("");

  return (
    <Card className={classes.mainCard}>
      <CardContent>
        <Grid container>
          <Grid item container justify="center" xs={12}>
            <Grid item>
              <Box className={classes.card}>
                <Stage width={1470} height={744}>
                  <Layer>
                    <Image
                      src={
                        spellLayer.current != null
                          ? spellLayer.current.toDataURL()
                          : ""
                      }
                      x={0}
                      y={0}
                    />
                    <CardImage
                      src={
                        troopLayer.current != null
                          ? troopLayer.current.toDataURL()
                          : ""
                      }
                    />
                    <CardImage
                      src={
                        traitsLayer.current != null
                          ? traitsLayer.current.toDataURL()
                          : ""
                      }
                    />
                  </Layer>
                </Stage>
              </Box>
            </Grid>
          </Grid>
          <PreviewButtonBar troopName={troop.name} downloadUrl={downloadUrl} />
        </Grid>
      </CardContent>
    </Card>
  );
});

export default TabResult;
