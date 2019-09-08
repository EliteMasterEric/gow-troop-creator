import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { FormSpell } from "./FormSpell";
import { PreviewSpell } from "./PreviewSpell";

const useStyles = makeStyles(theme => ({
  cardGridItem: {
    order: 2,
    width: `calc(75vh)`
  },
  formGridItem: {
    order: 1
  }
}));

export const TabSpell = ({troop, setTroop, canvasResult, ...other}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" {...other}>
      <FormSpell
        troop={troop}
        className={classes.formGridItem}
        setTroop={setTroop} />
      <PreviewSpell
        troop={troop}
        canvasResult={canvasResult} 
        className={classes.cardGridItem} />
    </Grid>
  )
}