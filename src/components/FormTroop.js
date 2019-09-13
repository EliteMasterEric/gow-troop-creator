import React from 'react'
import { Typography, CardContent, Grid, Card, TextField, MenuItem, InputAdornment, useMediaQuery } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
    },
    dropzone: {
      backgroundColor: "#1f1f1f"
    },
    formElement: {
      margin: '12px 0'
    }
  };
});

export const FormTroop = ({ troopData, setTroopData, ...other }) => {
  const classes = useStyles();
  const theme = useTheme();

  const mediaQueryLg = useMediaQuery(theme.breakpoints.up('lg'));

  const handleChange = name => event => {
    setTroopData({ ...troopData, [name]: event.target.value });
  };

  const handleChangeFiles = files => {
    if (files.length === 0) {
      setTroopData({ ...troopData, troopimage: null });
    } else {
      setTroopData({ ...troopData, troopimage: files[0] });
    }
  };

  return (
    <Grid xs={12} lg={8} spacing={mediaQueryLg ? 3 : 0} container item direction="row" {...other}>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Name</Typography>
            <TextField
              id="form-name"
              value={troopData.name}
              onChange={handleChange('name')}
              margin="normal"
              type="text"
              label="Name"
              style={{ width: '100%' }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Kingdom</Typography>
            <TextField
              id="form-kingdom"
              value={troopData.kingdom}
              onChange={handleChange('kingdom')}
              margin="normal"
              type="text"
              label="Kingdom"
              style={{ width: '100%' }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Rarity</Typography>
            <TextField
              id="form-rarity"
              value={troopData.rarity}
              select
              label="Rarity"
              onChange={handleChange('rarity')}
              margin="normal"
              style={{ width: '100%' }}
              variant="outlined">
              {rarities.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={3} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Level</Typography>
            <TextField
              id="form-level"
              value={troopData.level}
              type="number"
              onChange={handleChange('level')}
              margin="normal"
              label="Level"
              style={{ width: '100%' }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={3} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Role</Typography>
            <TextField
              id="form-role"
              value={troopData.role}
              select
              label="Role"
              onChange={handleChange('role')}
              margin="normal"
              style={{ width: '100%' }}
              variant="outlined">
              {roles.map(option => (
                <MenuItem key={option} value={option}>
                  <Image source={`./assets/graphics/troopcard/roles/${option}.png`} /> {option}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={6} xl={5}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Mana Cost</Typography>
            <TextField
              id="form-cost"
              value={troopData.cost}
              type="number"
              label="Cost"
              onChange={handleChange('cost')}
              margin="normal"
              className={classes.manaCost}
              variant="outlined" />
            <TextField
              id="form-colors"
              value={troopData.colors}
              select
              label="Colors"
              onChange={handleChange('colors')}
              SelectProps={{
                MenuProps: {
                  className: classes.menuColor,
                },
              }}
              margin="normal"
              className={classes.manaColors}
              variant="outlined">
              {colors.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  <Image source={`./assets/graphics/troopcard/colors/${option.value}.png`} /> {option.label}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Types</Typography>
            <TextField
              id="form-type1"
              value={troopData.type1}
              onChange={handleChange('type1')}
              margin="normal"
              type="text"
              label="Type 1"
              className={classes.typeField}
              variant="outlined" />
            <TextField
              id="form-type2"
              value={troopData.type2}
              onChange={handleChange('type2')}
              margin="normal"
              type="text"
              label="Type 2 (Optional)"
              className={classes.typeField}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={5} xl={5}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Skills</Typography>
            <TextField
              id="form-attack"
              value={troopData.attack}
              type="number"
              label="Attack"
              onChange={handleChange('attack')}
              margin="normal"
              className={classes.skill}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source={`./assets/graphics/troopcard/attack.png`} />
                  </InputAdornment>
                ),
              }}
              variant="outlined" />
            <TextField
              id="form-armor"
              value={troopData.armor}
              type="number"
              label="Armor"
              onChange={handleChange('armor')}
              margin="normal"
              className={classes.skill}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source={`./assets/graphics/troopcard/armor.png`} />
                  </InputAdornment>
                ),
              }}
              variant="outlined" />
            <TextField
              id="form-life"
              value={troopData.life}
              type="number"
              label="Life"
              onChange={handleChange('life')}
              margin="normal"
              className={classes.skill}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source={`./assets/graphics/troopcard/life.png`} />
                  </InputAdornment>
                ),
              }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Image</Typography>
            <Typography variant="subtitle2" gutterBottom>Preferred Size: 460x652</Typography>
            <DropzoneArea
              dropzoneClass={classes.dropzone}
              acceptedFiles={['image/*']}
              filesLimit={1}
              showAlerts
              onChange={handleChangeFiles} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};