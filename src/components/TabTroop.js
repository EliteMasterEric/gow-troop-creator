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

export const TabTroop = ({ troopData, debouncedTroop, setTroopData, canvasResult, ...other }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" {...other}>
      <FormTroop
        troopData={troopData}
        className={classes.formGridItem}
        setTroopData={setTroopData} />
      <PreviewTroop
        troop={debouncedTroop}
        canvasResult={canvasResult}
        className={classes.cardGridItem} />
    </Grid>
  )
}