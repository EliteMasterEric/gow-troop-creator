import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const TabBase = ({ children, value, index, dir }) => {
  const theme = useTheme();

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      dir={dir}
    >
      <Grid
        container
        direction="row"
      >
        {children}
      </Grid>
    </Typography>
  );
};

export default TabBase;
