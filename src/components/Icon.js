import React from 'react'

/*
  Renders font icons. Great for buttons!
  Powered by Nerd Fonts. Find class names on https://www.nerdfonts.com/cheat-sheet
  Example: <Icon icon="nf-mdi-login" />
 */
export const Icon = (props) => {
  var classString = "nf";
  classString += " " + (props.icon || "nf-fa-amazon");
  return (
      <div>
          <i className={classString}/>
      </div>
  );
};

// Render a troop as a full-size card (like in the troop list).
export const Image = ({source, style}) => {
  return (
    <img alt="" src={source} style={style || {width: 'auto', height: '24px', paddingRight: '4px'}}></img>
  );
}