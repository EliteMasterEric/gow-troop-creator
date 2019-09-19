import React from "react";
import {
  Typography,
  CardContent,
  Grid,
  Card,
  MenuItem,
  InputAdornment,
  useMediaQuery
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { colors, roles, rarities } from "../../../Values";
import { Image } from "../../../Util";
import FormUploader from "./FormUploader";

import { FormText, FormSelect, validateFieldLength } from "../../../Util";

const useStyles = makeStyles(theme => {
  return {
    menuColor: {
      width: 400
    },
    skill: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1200)]: {
        width: "33%",
        padding: "4px"
      }
    },
    manaCost: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "25%",
        padding: "4px"
      }
    },
    manaColors: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "75%",
        padding: "4px"
      }
    },
    typeField: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up(1400)]: {
        width: "50%",
        padding: "4px"
      }
    },
    fieldIcon: {
      width: "auto",
      height: theme.spacing(3),
      marginRight: theme.spacing(0.5)
    },
    formElement: {
      margin: `${theme.spacing(1.5)}px 0`
    },
    iconSelector: {
      display: "flex",
      alignItems: "center"
    },
    fullField: {
      width: "100%"
    }
  };
});

const FormTroop = ({ troop, handleTroopChange, className }) => {
  const classes = useStyles();
  const theme = useTheme();

  const mediaQueryLg = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      xs={12}
      lg={8}
      spacing={mediaQueryLg ? 3 : 0}
      container
      item
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
        xl={3}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Name</Typography>
            <FormText
              id="form-name"
              fieldName={"name"}
              value={troop.name}
              onChange={handleTroopChange}
              label="Name"
              className={classes.fullField}
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
        xl={3}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Kingdom</Typography>
            <FormText
              id="form-kingdom"
              fieldName={"kingdom"}
              value={troop.kingdom}
              onChange={handleTroopChange}
              label="Kingdom"
              className={classes.fullField}
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
        xl={3}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Rarity</Typography>
            <FormSelect
              id="form-rarity"
              fieldName={"rarity"}
              value={troop.rarity}
              onChange={handleTroopChange}
              label="Rarity"
              className={classes.fullField}
            >
              {Object.keys(rarities).map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </FormSelect>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        className={classes.formElement}
        xs={12}
        sm={12}
        md={6}
        lg={3}
        xl={3}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Level</Typography>
            <FormText
              id="form-level"
              fieldName={"level"}
              value={troop.level}
              onChange={handleTroopChange}
              label="Level"
              type="number"
              className={classes.fullField}
              onInput={validateFieldLength(5)}
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
        lg={3}
        xl={3}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Role</Typography>
            <FormSelect
              id="form-role"
              fieldName={"role"}
              value={troop.role}
              onChange={handleTroopChange}
              label="Role"
              className={classes.iconSelector}
            >
              {roles.map(option => (
                <MenuItem key={option} value={option}>
                  <Image
                    source={`./assets/graphics/troopcard/roles/${option}.png`}
                    className={classes.fieldIcon}
                  />
                  {option}
                </MenuItem>
              ))}
            </FormSelect>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        className={classes.formElement}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={5}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Mana Cost</Typography>
            <FormText
              id="form-cost"
              fieldName={"cost"}
              value={troop.cost}
              onChange={handleTroopChange}
              label="Cost"
              type="number"
              className={classes.manaCost}
              onInput={validateFieldLength(3)}
            />
            <FormSelect
              id="form-colors"
              fieldName={"colors"}
              value={troop.colors}
              onChange={handleTroopChange}
              label="Colors"
              className={classes.manaColors}
              SelectProps={{
                MenuProps: {
                  className: classes.menuColor
                }
              }}
              inputProps={{ className: classes.iconSelector }}
            >
              {colors.map(option => (
                <MenuItem key={option.value} value={option.value}>
                <Image
                  source={`./assets/graphics/troopcard/colors/${option.value}.png`}
                  className={classes.fieldIcon}
                />
                {option.label}
              </MenuItem>
              ))}
            </FormSelect>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.formElement} xs={12} sm={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Types</Typography>
            <FormText
              id="form-type1"
              fieldName={"type1"}
              value={troop.type1}
              onChange={handleTroopChange}
              label="Type 1"
              className={classes.typeField}
              onInput={validateFieldLength(10)}
            />
            <FormText
              id="form-type2"
              fieldName={"type2"}
              value={troop.type2}
              onChange={handleTroopChange}
              label="Type 2"
              className={classes.typeField}
              onInput={validateFieldLength(10)}
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
        lg={6}
        xl={5}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Skills</Typography>
            <FormText
              id="form-attack"
              fieldName={"attack"}
              value={troop.attack}
              onChange={handleTroopChange}
              label="Attack"
              className={classes.skill}
              onInput={validateFieldLength(3)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source="./assets/graphics/troopcard/attack.png" className={classes.fieldIcon} />
                  </InputAdornment>
                )
              }}
            />
            <FormText
              id="form-armor"
              fieldName={"armor"}
              value={troop.armor}
              onChange={handleTroopChange}
              label="Armor"
              className={classes.skill}
              onInput={validateFieldLength(3)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source="./assets/graphics/troopcard/armor.png" className={classes.fieldIcon} />
                  </InputAdornment>
                )
              }}
            />
            <FormText
              id="form-life"
              fieldName={"life"}
              value={troop.life}
              onChange={handleTroopChange}
              label="Life"
              className={classes.skill}
              onInput={validateFieldLength(3)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source="./assets/graphics/troopcard/life.png" className={classes.fieldIcon} />
                  </InputAdornment>
                )
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <FormUploader handleTroopChange={handleTroopChange} />
    </Grid>
  );
};

export default FormTroop;
