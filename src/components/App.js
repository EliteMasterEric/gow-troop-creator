import React from "react";
import { CssBaseline, Container, Toolbar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';

import { NavBar } from "./NavBar";
import { TabResult } from "./TabResult";
import { TabSpell } from "./TabSpell";
import { TabTraits } from "./TabTraits";
import { TabTroop } from "./TabTroop";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    width: `calc(100vw - 240px)`,
    maxHeight: `calc(100vh - 64px)`,
  },
  grid: {
    display: 'flex'
  },
  tabView: {
  }
}));


const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const App = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [troop, setTroop] = React.useState({
    name: "Infernus",
    kingdom: "Broken Spire",
    rarity: "Mythic",
    level: "20",

    role: "Mage",
    cost: "24",
    colors: "RedYellowPurple",
    attack: "40",
    armor: "40",
    life: "40",
    magic: "25",

    type1: "Divine",
    type2: "Elemental",

    trait1name: 'Elemental Shield',
    trait1desc: 'Allied Elementals gain 2 Armor.',
    trait1code: 'elementalbond',
    trait2name: 'Fiery Death',
    trait2desc: 'Summon a Firestorm when an enemy dies.',
    trait2code: 'firebrand',
    trait3name: 'Conflagration',
    trait3desc: 'Burn all enemies on 4 or 5 Gem matches.',
    trait3code: 'molten',

    spellname: "Eruption",
    spelldesc: "Deal {magic} damage to 2 random enemies, and half of that damage to adjacent enemies. Explode 5 random Gems.",
    spellmult: "1",
    spellbase: "10",
    spellrange: false,

    file_base: "Troop_K00_10",
    files: []
  });

  const [currentTab, setCurrentTab] = React.useState(1);

  const handleTabEvent = (event, newValue) => {
    setCurrentTab(newValue);
  }

  const canvasResult = React.createRef();

  return (
    <CssBaseline>
      <NavBar />
      <Toolbar />
      <Container maxWidth="xl" className={classes.content}>
        <Tabs
          value={currentTab}
          onChange={handleTabEvent}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="Spell" {...a11yProps(0)} />
          <Tab label="Troop" {...a11yProps(1)} />
          <Tab label="Traits" {...a11yProps(2)} />
          <Tab label="Result" {...a11yProps(3)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={currentTab}
          onChangeIndex={setCurrentTab}>
          <TabPanel value={currentTab} index={0} dir={theme.direction}>
            <TabSpell className={classes.tabView} canvasResult={canvasResult} troop={troop} setTroop={setTroop} />
          </TabPanel>
          <TabPanel value={currentTab} index={1} dir={theme.direction}>
            <TabTroop className={classes.tabView} canvasResult={canvasResult} troop={troop} setTroop={setTroop} />
          </TabPanel>
          <TabPanel value={currentTab} index={2} dir={theme.direction}>
            <TabTraits className={classes.tabView} canvasResult={canvasResult} troop={troop} setTroop={setTroop} />
          </TabPanel>
          <TabPanel value={currentTab} index={3} dir={theme.direction}>
            <TabResult className={classes.tabView} canvasResult={canvasResult} troop={troop} />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </CssBaseline>
  );  
};
