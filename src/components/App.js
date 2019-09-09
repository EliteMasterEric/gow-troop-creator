import React, { useEffect, useState } from "react";
import { CssBaseline, Container, Toolbar, Tabs, Tab, Typography, Box, useMediaQuery } from '@material-ui/core';
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
    maxHeight: `calc(100vh - 64px)`,
    [theme.breakpoints.up('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      width: `calc(100vw - 240px)`,
    }
  },
  grid: {
    display: 'flex'
  },
  tabView: {
    marginBottom: '22vh'
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

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value] 
  );

  return debouncedValue;
}

export const App = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [troop, setTroop] = React.useState({
    troop: {
      name: "Infernus",
      kingdom: "Broken Spire",
      rarity: "Mythic",
      level: "20",
  
      role: "Mage",
      cost: "24",
      colors: "RedYellowPurple",
  
      type1: "Divine",
      type2: "Elemental",
  
      attack: "40",
      armor: "40",
      life: "40",

      troopimage: null,
    },
    spell: {
      magic: "25",

      spellname: "Eruption",
      spelldesc: "Deal {magic} damage to 2 random enemies, and half of that damage to adjacent enemies. Explode 5 random Gems.",
      spellmult: "1",
      spellbase: "10",
      spellrange: false,

      spellimage: null,
    },
    trait: {
      trait1name: 'Elemental Shield',
      trait1desc: 'Allied Elementals gain 2 Armor.',
      trait1code: 'elementalbond',
      trait2name: 'Fiery Death',
      trait2desc: 'Summon a Firestorm when an enemy dies.',
      trait2code: 'firebrand',
      trait3name: 'Conflagration',
      trait3desc: 'Burn all enemies on 4 or 5 Gem matches.',
      trait3code: 'molten',
    }
  });


  const setTraitData = (value) => {
    setTroop({ ...troop, trait: value });
  }

  const setSpellData = (value) => {
    setTroop({ ...troop, spell: value });
  }

  const setTroopData = (value) => {
    setTroop({ ...troop, troop: value });
  }

  const [currentTab, setCurrentTab] = React.useState(1);

  const debouncedTroop = useDebounce(troop, 100);

  const handleTabEvent = (event, newValue) => {
    setCurrentTab(newValue);
  }

  const canvasResult = React.createRef();

  const mediaQueryLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <CssBaseline>
      <NavBar />
      <Toolbar />
      <Container maxWidth={false} className={classes.content}>
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
            <TabSpell
              className={classes.tabView}
              canvasResult={canvasResult}
              spellData={troop.spell}
              setSpellData={setSpellData} 
              debouncedTroop={debouncedTroop} />
          </TabPanel>
          <TabPanel value={currentTab} index={1} dir={theme.direction}>
            <TabTroop
              className={classes.tabView}
              canvasResult={canvasResult}
              troopData={troop.troop}
              setTroopData={setTroopData} 
              debouncedTroop={debouncedTroop} />
          </TabPanel>
          <TabPanel value={currentTab} index={2} dir={theme.direction}>
            <TabTraits
              className={classes.tabView}
              canvasResult={canvasResult}
              traitData={troop.trait}
              setTraitData={setTraitData} 
              debouncedTroop={debouncedTroop} />
          </TabPanel>
          <TabPanel value={currentTab} index={3} dir={theme.direction}>
            <TabResult
              className={classes.tabView}
              canvasResult={canvasResult}
              troop={troop} />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </CssBaseline>
  );  
};
