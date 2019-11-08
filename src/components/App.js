import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Toolbar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import WebFontLoader from "webfontloader";

import NavBar from "./layout/NavBar";
import TabResult from "./layout/TabResult";
import { TabView, ScrollingContainer, TabList } from "./layout/TabBase";
import FormSpell from "./layout/areas/form/FormSpell";
import FormTraits from "./layout/areas/form/FormTraits";
import FormTroop from "./layout/areas/form/FormTroop";
import PreviewSpell from "./layout/areas/preview/PreviewSpell";
import PreviewTraits from "./layout/areas/preview/PreviewTraits";
import PreviewTroop from "./layout/areas/preview/PreviewTroop";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: `calc(100vh - 64px)`,
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "calc(100vw - 64px)",
      height: "calc(100vh - 112px)"
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(100vw - 64px)",
      height: "calc(100vh - 112px)"
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100vw - 240px)",
      height: "calc(100vh - 112px)"
    }
  },
  previewGridItem: {
    [theme.breakpoints.up("xs")]: {
      order: 1,
      padding: 0,
      paddingTop: theme.spacing(3),
      margin: 0,
      marginBottom: theme.spacing(1.5)
    },
    [theme.breakpoints.up("sm")]: {
      order: 1,
      padding: theme.spacing(1.5),
      margin: "0 auto"
    },
    [theme.breakpoints.up("md")]: {
      order: 2
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(3)
    },
    width: `calc(75vh)`
  },
  formGridItem: {
    [theme.breakpoints.up("xs")]: {
      order: 2,
      margin: "0"
    },
    [theme.breakpoints.up("md")]: {
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

// Default troop for the troop creator.
const troopInfernus = {
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
    "Deal {magic} splash damage to 2 random enemies. Explode 5 random Gems.",
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
};

const App = () => {
  const classes = useStyles();
  const theme = useTheme();

  // State of troop info, stored in the forms.
  const [troop, setTroop] = React.useState(troopInfernus);

  // Creates an onChange function by passing the setState function. Uses callbacks for performance.
  const handleTroopChange = useCallback(
    (field, value) => setTroop(oldState => ({ ...oldState, [field]: value })),
    [setTroop]
  );

  // State of the currently selected tab number.
  const [currentTab, setCurrentTab] = useState(1);

  const layerSpellDisplay = useRef(null);
  const layerTroopDisplay = useRef(null);
  const layerTraitsDisplay = useRef(null);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Handle loading effects.
  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: ["Open Sans:400,600,700", "Roboto", "Raleway"]
      },
      fontactive: () => {
        setTimeout(() => {
          setFontsLoaded(true);
        }, 500);
      }
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Toolbar />
      <Container maxWidth={false} className={classes.content}>
        <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <ScrollingContainer>
          <SwipeableViews
            className={classes.swipeableView}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={currentTab}
            onChangeIndex={setCurrentTab}
          >
            <TabView value={currentTab} index={0} dir={theme.direction}>
              {currentTab === 0 ? (
                <FormSpell
                  troop={troop}
                  className={classes.formGridItem}
                  handleTroopChange={handleTroopChange}
                />
              ) : null}
              <PreviewSpell
                troop={troop}
                displayLayer={layerSpellDisplay}
                fontsLoaded={fontsLoaded}
                className={classes.previewGridItem}
              />
            </TabView>
            <TabView value={currentTab} index={1} dir={theme.direction}>
              {currentTab === 1 ? (
                <FormTroop
                  troop={troop}
                  className={classes.formGridItem}
                  handleTroopChange={handleTroopChange}
                />
              ) : null}
              <PreviewTroop
                troop={troop}
                displayLayer={layerTroopDisplay}
                fontsLoaded={fontsLoaded}
                className={classes.previewGridItem}
              />
            </TabView>
            <TabView value={currentTab} index={2} dir={theme.direction}>
              {currentTab === 2 ? (
                <FormTraits
                  troop={troop}
                  className={classes.formGridItem}
                  handleTroopChange={handleTroopChange}
                />
              ) : null}
              <PreviewTraits
                troop={troop}
                displayLayer={layerTraitsDisplay}
                fontsLoaded={fontsLoaded}
                className={classes.previewGridItem}
              />
            </TabView>
            <TabView value={currentTab} index={3} dir={theme.direction}>
              <TabResult
                className={classes.tabView}
                spellLayer={layerSpellDisplay}
                troopLayer={layerTroopDisplay}
                traitsLayer={layerTraitsDisplay}
                troop={troop}
              />
            </TabView>
          </SwipeableViews>
        </ScrollingContainer>
      </Container>
    </div>
  );
};

export default App;
