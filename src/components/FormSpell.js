import React from 'react'
import { Typography, CardContent, Grid, Card, TextField, MenuItem, InputAdornment } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles } from "@material-ui/core/styles";

import { colors, roles, rarities } from "./Values";
import { Image } from "./Icon";

const useStyles = makeStyles(theme => {
  return {
    appbar: {
      elevation: 0,
      position: "fixed" 
    },
    toolbar: {
      paddingLeft: "8px",
      paddingRight: "8px"
    },
    appbarText: {
      alignSelf: "center",
      marginRight: "10px"
    },
    input: {
      marginLeft: "auto"
    },
    menu: {
      width: 200,
    },
    menuColor: {
      width: 400,
    },
    skill: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1200)]: {
        width: '33%',
        padding: '4px'
      }
    },
    manaCost: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1400)]: {
        width: '33%',
        padding: '4px'
      }
    },
    manaColors: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1400)]: {
        width: '66%',
        padding: '4px'
      }
    },
    typeField: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1400)]: {
        width: '50%',
        padding: '4px'
      }
    },
    trait: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('xl')]: {
        width: '33%',
        padding: '4px'
      }
    }
  };
 });

export const FormSpell = ({troop, setTroop, ...other}) => {
  const classes = useStyles();

  const handleChange = name => event => {
    setTroop({ ...troop, [name]: event.target.value });
  };

  return (
    <Grid xs={12} lg={8} spacing={3} container item direction="row" {...other}>
    </Grid>
  );
};