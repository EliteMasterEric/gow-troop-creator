import React, { memo } from "react";
import {
  Typography,
  Grid,
  InputAdornment,
  useMediaQuery
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Image,
  FormText,
  FormCheckbox,
  GridCard,
  validateFieldLength
} from "../../../Util";
import FormUploader from "./FormUploader";

const useStyles = makeStyles(theme => {
  return {
    spellPower: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "50%",
        padding: "4px"
      }
    },
    formElement: {
      margin: `${theme.spacing(1.5)}px 0 0 0`
    },
    fullField: {
      width: "100%"
    },
    fieldIcon: {
      width: "auto",
      height: theme.spacing(3),
      marginRight: theme.spacing(0.5)
    }
  };
});

const FormSpell = memo(({ troop, handleTroopChange, className }) => {
  const classes = useStyles();
  const theme = useTheme();

  const mediaQueryLg = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      xs={12}
      md={8}
      container
      item
      spacing={mediaQueryLg ? 3 : 0}
      direction="row"
      className={className}
    >
      <GridCard
        gridClassName={classes.formElement}
        cardClassName={classes.card}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Typography variant="h4">Spell Name</Typography>
        <FormText
          id="form-spellname"
          fieldName="spellname"
          value={troop.spellname}
          onChange={handleTroopChange}
          label="Spell Name"
          className={classes.fullField}
        />
      </GridCard>
      <GridCard
        gridClassName={classes.formElement}
        cardClassName={classes.card}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Typography variant="h4">Spell Description</Typography>
        <FormText
          id="form-spelldesc"
          fieldName="spelldesc"
          value={troop.spelldesc}
          onChange={handleTroopChange}
          label="Spell Description"
          multiline
          helperText="{magic} specifies spell power"
          className={classes.fullField}
        />
      </GridCard>
      <GridCard
        gridClassName={classes.formElement}
        cardClassName={classes.card}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Typography variant="h4">Magic</Typography>
        <FormText
          id="form-magic"
          fieldName="magic"
          value={troop.magic}
          onChange={handleTroopChange}
          label="Magic"
          type="number"
          className={classes.fullField}
          onInput={validateFieldLength(3)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  source="./assets/graphics/troop/magic.png"
                  className={classes.fieldIcon}
                />
              </InputAdornment>
            )
          }}
        />
      </GridCard>
      <GridCard
        gridClassName={classes.formElement}
        cardClassName={classes.card}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Typography variant="h4">Spell Power</Typography>
        <FormText
          id="form-spellmult"
          fieldName="spellmult"
          value={troop.spellmult}
          onChange={handleTroopChange}
          label="Multiplier"
          type="number"
          className={classes.spellPower}
        />
        <FormText
          id="form-spellbase"
          fieldName="spellbase"
          value={troop.spellbase}
          onChange={handleTroopChange}
          label="Base"
          type="number"
          className={classes.spellPower}
        />
        <FormCheckbox
          checked={troop.spellrange}
          fieldName="spellrange"
          onChange={handleTroopChange}
          label="Range?"
        />
      </GridCard>
      <FormUploader troop={troop} handleTroopChange={handleTroopChange} />
    </Grid>
  );
});

export default FormSpell;
