import React from "react";
import {
  Typography,
  CardContent,
  Grid,
  Card,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FormTraitAutosuggest from "./FormTraitAutosuggest";

import { Image } from "../../../Icon";

const useStyles = makeStyles(theme => {
  return {
    traitcode: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
        width: "80px",
        padding: `${theme.spacing(0.5)}px`
      }
    },
    traitname: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - 80px)`,
        padding: `${theme.spacing(0.5)}px`
      }
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

const FormTrait = ({ index, troop, setTroop }) => {
  const classes = useStyles();

  const handleChange = name => event => {
    setTroop({ ...troop, [name]: event.target.value });
  };

  return (
    <Grid
      item
      className={classes.formElement}
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={4}
    >
      <Card className={classes.overflow}>
        <CardContent>
          <Typography variant="h4">{`Trait ${index}`}</Typography>
          <div className={classes.iconSelector}>
            <Image
              className={classes.traitIcon}
              source={`./assets/graphics/troopcard/traits/${
                troop[`trait${index}code`]
              }.png`}
            />
            <TextField
              id={`form-trait${index}name`}
              value={troop[`trait${index}name`]}
              onChange={handleChange(`trait${index}name`)}
              margin="normal"
              type="text"
              label="Trait Name"
              className={classes.traitname}
              variant="outlined"
            />
          </div>
          <TextField
            id={`form-trait${index}desc`}
            value={troop[`trait${index}desc`]}
            onChange={handleChange(`trait${index}desc`)}
            margin="normal"
            type="text"
            multiline
            label="Trait Description"
            style={{ width: "100%" }}
            variant="outlined"
          />
          <FormTraitAutosuggest
            index={index}
            troop={troop}
            setTroop={setTroop}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FormTrait;
