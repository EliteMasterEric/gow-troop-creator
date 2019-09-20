import React, { memo } from "react";
import { Typography, CardContent, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FormTraitAutosuggest from "./FormTraitAutosuggest";

import { Image, FormText, validateFieldLength, GridCard } from "../../../Util";

const useStyles = makeStyles(theme => {
  return {
    traitName: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - 80px)`,
        padding: `${theme.spacing(0.5)}px`
      }
    },
    traitDesc: {
      width: "100%"
    },
    traitIcon: {
      width: "48px",
      height: "48px",
      marginRight: theme.spacing(0.5)
    },
    formElement: {
      margin: `${theme.spacing(1.5)}px 0`
    },
    iconSelector: {
      display: "flex",
      alignItems: "center"
    },
    overflow: {
      overflow: "visible"
    }
  };
});

const FormTrait = memo(({ index, troop, handleTroopChange }) => {
  const classes = useStyles();

  return (
    <GridCard
      gridClassName={classes.formElement}
      cardClassName={classes.overflow}
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={4}
    >
      <Typography variant="h4">{`Trait ${index}`}</Typography>
      <div className={classes.iconSelector}>
        <Image
          className={classes.traitIcon}
          source={`./assets/graphics/troopcard/traits/${
            troop[`trait${index}code`]
          }.png`}
        />
        <FormText
          id={`form-trait${index}name`}
          fieldName={`trait${index}name`}
          value={troop[`trait${index}name`]}
          onChange={handleTroopChange}
          label="Trait Name"
          className={classes.traitname}
          onInput={validateFieldLength(20)}
        />
      </div>
      <FormText
        id={`form-trait${index}desc`}
        fieldName={`trait${index}desc`}
        value={troop[`trait${index}desc`]}
        onChange={handleTroopChange}
        label="Trait Description"
        multiline
        className={classes.traitDesc}
      />
      <FormTraitAutosuggest
        index={index}
        handleTroopChange={handleTroopChange}
      />
    </GridCard>
  );
});

export default FormTrait;
