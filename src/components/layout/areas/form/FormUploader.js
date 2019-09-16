import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Typography, CardContent, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  formElement: {
    margin: "12px 0"
  },
  dropzone: {
    backgroundColor: "#1f1f1f"
  }
}));

const FormUploader = ({ troop, setTroop }) => {
  const classes = useStyles();

  const handleChangeFiles = files => {
    if (files.length === 0) {
      setTroop({ ...troop, troopimage: null });
    } else {
      setTroop({ ...troop, troopimage: files[0] });
    }
  };

  return (
    <Grid item className={classes.formElement} xs={12}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">Image</Typography>
          <Typography variant="subtitle2" gutterBottom>
            Preferred Size: 460x652
          </Typography>
          <DropzoneArea
            dropzoneClass={classes.dropzone}
            acceptedFiles={["image/*"]}
            filesLimit={1}
            showAlerts
            onChange={handleChangeFiles}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FormUploader;
