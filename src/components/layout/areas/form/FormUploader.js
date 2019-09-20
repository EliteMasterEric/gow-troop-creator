import React, { memo, useCallback } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GridCard } from "../../../Util";

const useStyles = makeStyles(theme => ({
  formElement: {
    margin: `${theme.spacing(1.5)}px 0`
  },
  dropzone: {
    backgroundColor: "#1f1f1f"
  }
}));

const FormUploader = memo(({ handleTroopChange }) => {
  const classes = useStyles();

  const handleChangeFiles = useCallback(files => {
    handleTroopChange("files", files.length !== 0 ? files[0] : null);
  });

  return (
    <GridCard
      gridClassName={classes.formElement}
      cardClassName={classes.card}
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
    >
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
    </GridCard>
  );
});

export default FormUploader;
