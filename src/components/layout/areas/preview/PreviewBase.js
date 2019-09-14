import React from "react";
import { Typography, CardContent, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PreviewButtonBar from "./PreviewButtonBar";

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3)
  }
}));

const PreviewBase = ({ troopName, downloadUrl, children, className }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={4} className={className}>
      <Card className={classes.card}>
        <CardContent>
          <Typography align="center" variant="h2">
            Preview
          </Typography>
          {children}
          <PreviewButtonBar troopName={troopName} downloadUrl={downloadUrl} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PreviewBase;
