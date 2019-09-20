import React, { memo } from "react";
import { Typography, Grid } from "@material-ui/core";

const TabBase = memo(({ children, value, index, dir }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      dir={dir}
    >
      <Grid container direction="row">
        {children}
      </Grid>
    </Typography>
  );
});

export default TabBase;
