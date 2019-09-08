import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { FormTraits } from "./FormTraits";
import { PreviewTraits } from "./PreviewTraits";

const useStyles = makeStyles(theme => ({
  cardGridItem: {
    order: 2,
    width: `calc(75vh)`
  },
  formGridItem: {
    order: 1
  }
}));

export const TabTraits = ({troop, setTroop, canvasResult, ...other}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" {...other}>
      <FormTraits
        troop={troop}
        className={classes.formGridItem}
        setTroop={setTroop} />
      <PreviewTraits
        troop={troop}
        canvasResult={canvasResult} 
        className={classes.cardGridItem} />
    </Grid>
  )
}