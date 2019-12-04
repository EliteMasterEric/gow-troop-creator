import React, { useCallback } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GridCard } from "../../Util";

const useStyles = makeStyles(theme => ({
  formElement: {
    margin: `${theme.spacing(1.5)}px 0`
  },
  dropzone: {
    backgroundColor: "#1f1f1f"
  }
}));

export const FormUploaderTroop = ({ handleTroopChange, dimensions }) => {
  return (
    <FormUploader
      fieldKey="troopimage"
      handleTroopChange={handleTroopChange}
      dimensions={dimensions}
    />
  );
};

export const FormUploaderSpell = ({ handleTroopChange, dimensions }) => {
  return (
    <FormUploader
      fieldKey="spellimage"
      handleTroopChange={handleTroopChange}
      dimensions={dimensions}
    />
  );
};

export const FormUploader = ({ handleTroopChange, fieldKey, dimensions }) => {
  const classes = useStyles();

  const handleChangeFiles = useCallback(
    files => {
      if (files.length !== 0) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          handleTroopChange(fieldKey, reader.result);
        };
        reader.onerror = error => {
          console.log(error);
        };
      }
    },
    [handleTroopChange]
  );

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
        Preferred Size: {dimensions || ""}
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
};
