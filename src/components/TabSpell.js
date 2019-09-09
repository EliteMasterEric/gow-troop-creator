import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { FormSpell } from "./FormSpell";
import { PreviewSpell } from "./PreviewSpell";

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

export const TabSpell = ({spellData, debouncedTroop, setSpellData, canvasResult, ...other}) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" {...other}>
      <FormSpell
        spellData={spellData}
        className={classes.formGridItem}
        setSpellData={setSpellData} />
      <PreviewSpell
        troop={debouncedTroop}
        canvasResult={canvasResult} 
        className={classes.cardGridItem} />
    </Grid>
  )
}