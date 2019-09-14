import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  image: {
    width: "auto",
    height: theme.spacing(3),
    paddingRight: "4px"
  }
}));

/*
  Renders font icons. Great for buttons!
  Powered by Nerd Fonts. Find class names on https://www.nerdfonts.com/cheat-sheet
  Example: <Icon icon="nf-mdi-login" />
 */
export const Icon = ({ icon, className }) => {
  return (
    <div>
      <i className={`nf ${icon || "nf-fa-amazon"} ${className || ""}`} />
    </div>
  );
};

// Render a troop as a full-size card (like in the troop list).
export const Image = ({ source, className }) => {
  const classes = useStyles();
  return <img alt="" src={source} className={className || classes.image} />;
};
