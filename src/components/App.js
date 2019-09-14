import React, { useEffect, useState } from "react";
import { Container, Toolbar, Tabs, Tab } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

import NavBar from "./layout/NavBar";
import TabResult from "./layout/TabResult";
import TabView from "./layout/TabBase";
import PreviewSpell from "./layout/areas/preview/PreviewSpell";
import PreviewTraits from "./layout/areas/preview/PreviewTraits";
import PreviewTroop from "./layout/areas/preview/PreviewTroop";
import FormSpell from "./layout/areas/form/FormSpell";
import FormTraits from "./layout/areas/form/FormTraits";
import FormTroop from "./layout/areas/form/FormTroop";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    maxHeight: `calc(100vh - 64px)`,
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("lg")]: {
      width: `calc(100vw - 240px)`
    }
  },
  previewGridItem: {
    [theme.breakpoints.up("xs")]: {
      order: 1
    },
    [theme.breakpoints.up("lg")]: {
      order: 2
    },
    padding: theme.spacing(3),
    width: `calc(75vh)`
  },
  formGridItem: {
    [theme.breakpoints.up("xs")]: {
      order: 2,
      margin: "0"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 -12px",
      order: 1
    }
  },
  grid: {
    display: "flex"
  },
  tabView: {
    marginBottom: "22vh"
  }
}));

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
    [value, delay]
  );

  return debouncedValue;
}

const App = () => {
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

    type1: "Divine",
    type2: "Elemental",

    attack: "40",
    armor: "40",
    life: "40",

    troopimage: null,
    magic: "25",

    spellname: "Eruption",
    spelldesc:
      "Deal {magic} damage to 2 random enemies, and half of that damage to adjacent enemies. Explode 5 random Gems.",
    spellmult: "1",
    spellbase: "10",
    spellrange: false,

    spellimage: null,
    trait1name: "Elemental Shield",
    trait1desc: "Allied Elementals gain 2 Armor.",
    trait1code: "elementalbond",
    trait2name: "Fiery Death",
    trait2desc: "Summon a Firestorm when an enemy dies.",
    trait2code: "firebrand",
    trait3name: "Conflagration",
    trait3desc: "Burn all enemies on 4 or 5 Gem matches.",
    trait3code: "molten"
  });

  const [currentTab, setCurrentTab] = React.useState(1);

  const debouncedTroop = useDebounce(troop, 500);

  const handleTabEvent = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const canvasResult = React.createRef();

  return (
    <div>
      <NavBar />
      <Toolbar />
      <Container maxWidth={false} className={classes.content}>
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
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={currentTab}
          onChangeIndex={setCurrentTab}
        >
          <TabView value={currentTab} index={0} dir={theme.direction}>
            <FormSpell
              troop={troop}
              className={classes.formGridItem}
              setTroop={setTroop}
            />
            <PreviewSpell
              troop={debouncedTroop}
              canvasResult={canvasResult}
              className={classes.previewGridItem}
            />
          </TabView>
          <TabView value={currentTab} index={1} dir={theme.direction}>
            <FormTroop
              troop={troop}
              className={classes.formGridItem}
              setTroop={setTroop}
            />
            <PreviewTroop
              troop={debouncedTroop}
              canvasResult={canvasResult}
              className={classes.previewGridItem}
            />
          </TabView>
          <TabView value={currentTab} index={2} dir={theme.direction}>
            <FormTraits
              troop={troop}
              className={classes.formGridItem}
              setTroop={setTroop}
            />
            <PreviewTraits
              troop={debouncedTroop}
              canvasResult={canvasResult}
              className={classes.previewGridItem}
            />
          </TabView>
          <TabView value={currentTab} index={3} dir={theme.direction}>
            <TabResult
              className={classes.tabView}
              canvasResult={canvasResult}
              troop={troop}
            />
          </TabView>
        </SwipeableViews>
      </Container>
    </div>
  );
};

export default App;
