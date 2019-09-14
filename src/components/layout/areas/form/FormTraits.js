import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import FormTrait from "./FormTrait";

const FormTraits = ({ troop, setTroop, className }) => {
  const theme = useTheme();

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
      <FormTrait index={1} troop={troop} setTroop={setTroop} />
      <FormTrait index={2} troop={troop} setTroop={setTroop} />
      <FormTrait index={3} troop={troop} setTroop={setTroop} />
    </Grid>
  );
};

export default FormTraits;
