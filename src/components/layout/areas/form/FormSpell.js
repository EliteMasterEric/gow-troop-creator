import React from "react";
import {
  Typography,
  CardContent,
  Grid,
  Card,
  TextField,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  useMediaQuery
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Image } from "../../../Icon";
import FormUploader from "./FormUploader";

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
      width: 200
    },
    menuColor: {
      width: 400
    },
    spellPower: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "50%",
        padding: "4px"
      }
    },
    dropzone: {
      backgroundColor: "#1f1f1f"
    },
    formElement: {
      margin: "12px 0"
    }
  };
});

const FormSpell = ({ troop, setTroop, className }) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = name => event => {
    setTroop({ ...troop, [name]: event.target.value });
  };

  const handleChangeCheckbox = name => event => {
    setTroop({ ...troop, [name]: event.target.checked });
  };

  const mediaQueryLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid
      xs={12}
      lg={8}
      container
      item
      spacing={mediaQueryLg ? 3 : 0}
      direction="row"
      className={className}
    >
      <Grid
        item
        className={classes.formElement}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Spell Name</Typography>
            <TextField
              id="form-spellname"
              value={troop.spellname}
              onChange={handleChange("spellname")}
              margin="normal"
              type="text"
              label="Spell Name"
              style={{ width: "100%" }}
              variant="outlined"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        className={classes.formElement}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Spell Description</Typography>
            <TextField
              id="form-spelldesc"
              value={troop.spelldesc}
              onChange={handleChange("spelldesc")}
              margin="normal"
              type="text"
              multiline
              helperText="{magic} specifies spell power"
              label="Spell Description"
              style={{ width: "100%" }}
              variant="outlined"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        className={classes.formElement}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Magic</Typography>
            <TextField
              id="form-magic"
              value={troop.magic}
              type="number"
              label="Magic"
              onChange={handleChange("magic")}
              margin="normal"
              style={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source="./assets/graphics/troopcard/magic.png" />
                  </InputAdornment>
                )
              }}
              variant="outlined"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        className={classes.formElement}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Spell Power</Typography>
            <TextField
              id="form-spellmult"
              value={troop.spellmult}
              type="number"
              label="Multiplier"
              onChange={handleChange("spellmult")}
              margin="normal"
              className={classes.spellPower}
              variant="outlined"
            />
            <TextField
              id="form-spellbase"
              value={troop.spellbase}
              type="number"
              label="Base"
              onChange={handleChange("spellbase")}
              margin="normal"
              className={classes.spellPower}
              variant="outlined"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={troop.spellrange}
                  onChange={handleChangeCheckbox("spellrange")}
                  value="spellrange"
                />
              }
              label="Range?"
            />
          </CardContent>
        </Card>
      </Grid>
      <FormUploader troop={troop} setTroop={setTroop} />
    </Grid>
  );
};

export default FormSpell;
