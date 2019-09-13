import React from 'react'
import { Typography, CardContent, Grid, Card, TextField, InputAdornment, FormControlLabel, Checkbox } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
    spellPower: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1400)]: {
        width: '50%',
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

export const FormSpell = ({ spellData, setSpellData, ...other }) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = name => event => {
    setSpellData({ ...spellData, [name]: event.target.value });
  };

  const handleChangeCheckbox = name => event => {
    setSpellData({ ...spellData, [name]: event.target.checked });
  };

  const handleChangeFiles = files => {
    if (files.length === 0) {
      setSpellData({ ...spellData, spellimage: null });
    } else {
      setSpellData({ ...spellData, spellimage: files[0] });
    }
  };

  return (
    <Grid xs={12} lg={8} container item direction="row" {...other}>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Spell Name</Typography>
            <TextField
              id="form-spellname"
              value={spellData.spellname}
              onChange={handleChange('spellname')}
              margin="normal"
              type="text"
              label="Spell Name"
              style={{ width: '100%' }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Spell Description</Typography>
            <TextField
              id="form-spelldesc"
              value={spellData.spelldesc}
              onChange={handleChange('spelldesc')}
              margin="normal"
              type="text"
              multiline
              helperText="{magic} specifies spell power"
              label="Spell Description"
              style={{ width: '100%' }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Magic</Typography>
            <TextField
              id="form-magic"
              value={spellData.magic}
              type="number"
              label="Magic"
              onChange={handleChange('magic')}
              margin="normal"
              style={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source={`./assets/graphics/troopcard/magic.png`} />
                  </InputAdornment>
                ),
              }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Spell Power</Typography>
            <TextField
              id="form-spellmult"
              value={spellData.spellmult}
              type="number"
              label="Multiplier"
              onChange={handleChange('spellmult')}
              margin="normal"
              className={classes.spellPower}
              variant="outlined" />
            <TextField
              id="form-spellbase"
              value={spellData.spellbase}
              type="number"
              label="Base"
              onChange={handleChange('spellbase')}
              margin="normal"
              className={classes.spellPower}
              variant="outlined" />
            <FormControlLabel
              control={
                <Checkbox checked={spellData.spellrange} onChange={handleChangeCheckbox('spellrange')} value="spellrange" />
              }
              label="Range?" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Image</Typography>
            <Typography variant="subtitle2" gutterBottom>Preferred Size: 460x340</Typography>
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
