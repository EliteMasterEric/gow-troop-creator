import React, { memo } from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import FormTrait from "./FormTrait";

const FormTraits = memo(({ troop, handleTroopChange, className }) => {
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
      <FormTrait
        index={1}
        troop={troop}
        handleTroopChange={handleTroopChange}
      />
      <FormTrait
        index={2}
        troop={troop}
        handleTroopChange={handleTroopChange}
      />
      <FormTrait
        index={3}
        troop={troop}
        handleTroopChange={handleTroopChange}
      />
    </Grid>
  );
});

export default FormTraits;
