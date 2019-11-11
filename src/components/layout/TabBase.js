import React from "react";
import { Typography, Grid, Tabs, Tab } from "@material-ui/core";
import Scrollbars from "react-custom-scrollbars";
import { AutoSizer } from "react-virtualized";

const renderThumb = ({ style }) => (
  <div
    style={{
      ...style,
      cursor: "pointer",
      borderRadius: "inherit",
      backgroundColor: "rgba(255,255,255,.8)"
    }}
  />
);

export const TabList = ({ currentTab, setCurrentTab }) => {
  // Handle a change in tab.
  const handleTabEvent = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Tabs
      value={currentTab}
      onChange={handleTabEvent}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Spell" id="tab-0" />
      <Tab label="Troop" id="tab-1" />
      <Tab label="Traits" id="tab-2" />
      <Tab label="Result" id="tab-3" />
    </Tabs>
  );
};

export const ScrollingContainer = ({ children }) => {
  return (
    <AutoSizer>
      {({ width, height }) => (
        <Scrollbars style={{ width, height }} renderThumbVertical={renderThumb}>
          {children}
        </Scrollbars>
      )}
    </AutoSizer>
  );
};

export const TabView = ({ children, value, index, dir }) => (
  <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    dir={dir}
  >
    <Grid container direction="row">
      {children}
    </Grid>
  </Typography>
);
