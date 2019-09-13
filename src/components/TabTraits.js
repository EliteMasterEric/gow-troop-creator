import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { FormTraits } from "./FormTraits";
import { PreviewTraits } from "./PreviewTraits";

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

export const TabTraits = ({ traitData, debouncedTroop, setTraitData, canvasResult, ...other }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" {...other}>
      <FormTraits
        traitData={traitData}
        className={classes.formGridItem}
        setTraitData={setTraitData} />
      <PreviewTraits
        troop={debouncedTroop}
        canvasResult={canvasResult}
        className={classes.cardGridItem} />
    </Grid>
  )
}