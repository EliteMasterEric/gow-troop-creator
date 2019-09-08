import React from 'react'
import { Typography, CardContent, Grid, Card, TextField, MenuItem, InputAdornment } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles } from "@material-ui/core/styles";

import { colors, roles, trait_codes, rarities } from "./Values";
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
    traitcode: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('md')]: {
        width: '80px',
        padding: '4px'
      }
    },
    traitname: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - 80px)`,
        padding: '4px'
      }
    }
  };
 });

export const FormTraits = ({troop, setTroop, ...other}) => {
  const classes = useStyles();

  const handleChange = name => event => {
    setTroop({ ...troop, [name]: event.target.value });
  };

  return (
    <Grid xs={12} lg={8} spacing={3} container item direction="row" {...other}>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Trait 1</Typography>
            <TextField
              id="form-trait1code"
              value={troop.trait1code}
              select
              label="Trait Icon"
              onChange={handleChange("trait1code")}
              margin="normal"
              className={classes.traitcode}
              variant="outlined">
              {trait_codes.map(code => (
                <MenuItem key={code} value={code}>
                  <Image source={`./assets/graphics/troopcard/traits/${code}.png`}/>
                </MenuItem>
              ))}
            </TextField>
            <TextField
                id="form-trait1name"
                value={troop.trait1name}
                onChange={handleChange('trait1name')}
                margin="normal"
                type="text"
                label="Trait Name"
                className={classes.traitname}
                variant="outlined" />
            <TextField
                id="form-trait1desc"
                value={troop.trait1desc}
                onChange={handleChange('trait1desc')}
                margin="normal"
                type="text"
                multiline
                label="Trait Description"
                style={{width: '100%'}}
                variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card>
          <CardContent>
            <Typography variant="h4">Trait 2</Typography>
            <TextField
              id="form-trait2code"
              value={troop.trait2code}
              select
              label="Trait Icon"
              onChange={handleChange("trait2code")}
              margin="normal"
              className={classes.traitcode}
              variant="outlined">
              {trait_codes.map(code => (
                <MenuItem key={code} value={code}>
                  <Image source={`./assets/graphics/troopcard/traits/${code}.png`}/>
                </MenuItem>
              ))}
            </TextField>
            <TextField
                id="form-trait2name"
                value={troop.trait2name}
                onChange={handleChange('trait2name')}
                margin="normal"
                type="text"
                label="Trait Name"
                className={classes.traitname}
                variant="outlined" />
            <TextField
                id="form-trait2desc"
                value={troop.trait2desc}
                onChange={handleChange('trait2desc')}
                margin="normal"
                type="text"
                multiline
                label="Trait Description"
                style={{width: '100%'}}
                variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card>
          <CardContent>
            <Typography variant="h4">Trait 3</Typography>
            <TextField
              id="form-trait3code"
              value={troop.trait3code}
              select
              label="Trait Icon"
              onChange={handleChange("trait3code")}
              margin="normal"
              className={classes.traitcode}
              variant="outlined">
              {trait_codes.map(code => (
                <MenuItem key={code} value={code}>
                  <Image source={`./assets/graphics/troopcard/traits/${code}.png`}/>
                </MenuItem>
              ))}
            </TextField>
            <TextField
                id="form-trait3name"
                value={troop.trait3name}
                onChange={handleChange('trait3name')}
                margin="normal"
                type="text"
                label="Trait Name"
                className={classes.traitname}
                variant="outlined" />
            <TextField
                id="form-trait3desc"
                value={troop.trait3desc}
                onChange={handleChange('trait3desc')}
                margin="normal"
                type="text"
                multiline
                label="Trait Description"
                style={{width: '100%'}}
                variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};