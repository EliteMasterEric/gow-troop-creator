import React from "react";
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

const PreviewBase = ({ troopName, displayLayer, children, className }) => {
  const classes = useStyles();

  return (
    <GridCard
      gridClassName={className}
      cardClassName={classes.card}
      xs={12}
      sm={6}
      md={4}
      lg={4}
      xl={4}
    >
      {children}
      <PreviewButtonBar troopName={troopName} displayLayer={displayLayer} />
    </GridCard>
  );
};

export default PreviewBase;
