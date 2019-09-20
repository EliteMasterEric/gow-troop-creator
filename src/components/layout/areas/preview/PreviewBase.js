import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

import PreviewButtonBar from "./PreviewButtonBar";

import { GridCard } from "../../../Util";

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.up("xs")]: {
      padding: 0
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1.5)
    }
  }
}));

const PreviewBase = memo(({ troopName, downloadUrl, children, className }) => {
  const classes = useStyles();

  return (
    <GridCard
      gridClassName={className}
      cardClassName={classes.card}
      xs={12}
      sm={12}
      md={12}
      lg={4}
      xl={4}
    >
      {children}
      <PreviewButtonBar troopName={troopName} downloadUrl={downloadUrl} />
    </GridCard>
  );
});

export default PreviewBase;
