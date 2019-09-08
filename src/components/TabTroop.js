import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { FormTroop } from "./FormTroop";
import { PreviewTroop } from "./PreviewTroop";

const useStyles = makeStyles(theme => ({
  cardGridItem: {
    [theme.breakpoints.up('xs')]: {
      order: 1,
    },
    [theme.breakpoints.up('lg')]: {
      order: 2,
    },
    order: 2,
    width: `calc(75vh)`
  },
  formGridItem: {
    [theme.breakpoints.up('xs')]: {
      order: 2,
    },
    [theme.breakpoints.up('lg')]: {
      order: 1,
    }
  }
}));

export const TabTroop = ({troop, setTroop, canvasResult, ...other}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" {...other}>
      <FormTroop
        troop={troop}
        className={classes.formGridItem}
        setTroop={setTroop} />
      <PreviewTroop
        troop={troop}
        canvasResult={canvasResult} 
        className={classes.cardGridItem} />
    </Grid>
  )
}