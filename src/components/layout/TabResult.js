import React, { memo } from "react";
import {
  CardContent,
  Grid,
  Card,
  Button,
  Tooltip,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Icon } from "../Util";

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

const TabResult = memo(({ troop, canvasResult }) => {
  const classes = useStyles();

  const [downloadUrl] = React.useState("");

  return (
    <Card className={classes.mainCard}>
      <CardContent>
        <Grid container>
          <Grid item container justify="center" xs={12}>
            <Grid item>
              <Box className={classes.cardBox}>
                <canvas
                  ref={canvasResult}
                  className={classes.canvas}
                  width={1470}
                  height={744}
                />
              </Box>
            </Grid>
          </Grid>
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
      </CardContent>
    </Card>
  );
});

export default TabResult;
