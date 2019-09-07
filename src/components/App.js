import React from "react";
import { CssBaseline, Typography, CardContent, Grid, Card, Container, Toolbar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { NavBar } from "./NavBar";
import { TroopCard } from "./TroopCard";
import { TroopForm } from "./TroopForm";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 240px)`,
    maxHeight: `calc(100vh - 64px)`,
  },
  grid: {
    display: 'flex'
  },
  troopCardGridItem: {
    order: 2,
    width: `calc(75vh)`
  },
  formGridItem: {
    order: 1
  }
}));

export const App = () => {
  const classes = useStyles();

  const [troop, setTroop] = React.useState({
    name: "Infernus",
    kingdom: "Broken Spire",
    rarity: "Mythic",
    level: 20,

    role: "Mage",
    cost: 24,
    colors: "RedYellowPurple",
    attack: 40,
    armor: 40,
    life: 40,

    type1: "Divine",
    type2: "Elemental",
    trait1: "nagabond",
    trait2: "indigestible",
    trait3: "molten",

    file_base: "Troop_K00_10",
    files: []
  });

  const handleChange = name => event => {
    setTroop({ ...troop, [name]: event.target.value });
  };

  return (
    <CssBaseline>
      <NavBar />
      <Toolbar />
      <Container maxWidth="xl" className={classes.content}>
        <Grid container spacing={3} direction="row" className={classes.formGridItem}>
          <TroopForm troop={troop} className={classes.formGridItem} setTroop={handleChange} />
          <Grid item xs={12} lg={4} className={classes.troopCardGridItem}>
            <Card className={classes.card}>
              <CardContent>
                <Typography align="center" variant="h2">Preview</Typography>
                <TroopCard troop={troop} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );  
};