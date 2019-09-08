import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <AppBar color="primary" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Image source={'./logo256.png'} className={classes.image} />
        <Typography className={classes.appbarText} variant="h4" color="inherit">
          Gems of War Troop Creator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
