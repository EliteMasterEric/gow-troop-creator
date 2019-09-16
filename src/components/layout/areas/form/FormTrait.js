import React from "react";
import {
  Typography,
  CardContent,
  Grid,
  Card,
  TextField,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { traitCodes } from "../../../Values";

import { Image } from "../../../Icon";

const useStyles = makeStyles(theme => {
  return {
    appbar: {
      elevation: 0,
      position: "fixed"
    },
    toolbar: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
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
    skill: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1200)]: {
        width: "33%",
        padding: `${theme.spacing(0.5)}px`
      }
    },
    manaCost: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "33%",
        padding: `${theme.spacing(0.5)}px`
      }
    },
    manaColors: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "66%",
        padding: `${theme.spacing(0.5)}px`
      }
    },
    typeField: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "50%",
        padding: `${theme.spacing(0.5)}px`
      }
    },
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
    formElement: {
      margin: `${theme.spacing(1.5)}px 0`
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
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">{`Trait ${index}`}</Typography>
          <TextField
            id={`form-trait${index}code`}
            value={troop[`trait${index}code`]}
            select
            label="Trait Icon"
            onChange={handleChange(`trait${index}code`)}
            margin="normal"
            className={classes.traitcode}
            variant="outlined"
          >
            {traitCodes.map(code => (
              <MenuItem key={code} value={code}>
                <Image
                  source={`./assets/graphics/troopcard/traits/${code}.png`}
                />
              </MenuItem>
            ))}
          </TextField>
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FormTrait;
