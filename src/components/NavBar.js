import React from 'react'
import { AppBar, Toolbar, Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Image } from './Icon';

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
    image: {
      width: 'auto',
      height: '36px',
      paddingRight: '8px',
      borderRadius: '24px',
      overflow: 'hidden'
    }
  };
});

export const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mediaQueryLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <AppBar color="primary" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Image source={'./logo256.png'} className={classes.image} />
        <Typography className={classes.appbarText} variant="h4" color="inherit">
          {mediaQueryLg ? 'Gems of War Troop Creator' : 'Troop Creator'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
