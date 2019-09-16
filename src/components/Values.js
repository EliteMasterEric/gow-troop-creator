export const colors = [
  { value: "Blue", label: "Blue" },
  { value: "Green", label: "Green" },
  { value: "Red", label: "Red" },
  { value: "Yellow", label: "Yellow" },
  { value: "Purple", label: "Purple" },
  { value: "Orange", label: "Brown" },
  { value: "BlueGreen", label: "Blue / Green" },
  { value: "BlueRed", label: "Blue / Red" },
  { value: "BlueYellow", label: "Blue / Yellow" },
  { value: "BluePurple", label: "Blue / Purple" },
  { value: "BlueOrange", label: "Blue / Brown" },
  { value: "GreenRed", label: "Green / Red" },
  { value: "GreenYellow", label: "Green / Yellow" },
  { value: "GreenPurple", label: "Green / Purple" },
  { value: "GreenOrange", label: "Green / Brown" },
  { value: "RedYellow", label: "Red / Yellow" },
  { value: "RedPurple", label: "Red / Purple" },
  { value: "RedOrange", label: "Red / Brown" },
  { value: "YellowPurple", label: "Yellow / Purple" },
  { value: "YellowOrange", label: "Yellow / Brown" },
  { value: "PurpleOrange", label: "Purple / Brown" },
  { value: "BlueGreenRed", label: "Blue / Green / Red" },
  { value: "BlueGreenYellow", label: "Blue / Green / Yellow" },
  { value: "BlueGreenPurple", label: "Blue / Green / Purple" },
  { value: "BlueGreenOrange", label: "Blue / Green / Brown" },
  { value: "BlueRedYellow", label: "Blue / Red / Yellow" },
  { value: "BlueRedPurple", label: "Blue / Red / Purple" },
  { value: "BlueRedOrange", label: "Blue / Red / Brown" },
  { value: "BlueYellowPurple", label: "Blue / Yellow / Purple" },
  { value: "BlueYellowOrange", label: "Blue / Yellow / Brown" },
  { value: "BluePurpleOrange", label: "Blue / Purple / Brown" },
  { value: "GreenRedYellow", label: "Green / Red / Yellow" },
  { value: "GreenRedPurple", label: "Green / Red / Purple" },
  { value: "GreenRedOrange", label: "Green / Red / Brown" },
  { value: "GreenYellowPurple", label: "Green / Yellow / Purple" },
  { value: "GreenYellowOrange", label: "Green / Yellow / Brown" },
  { value: "GreenPurpleOrange", label: "Green / Purple / Brown" },
  { value: "RedYellowPurple", label: "Red / Yellow / Purple" },
  { value: "RedYellowOrange", label: "Red / Yellow / Brown" },
  { value: "RedPurpleOrange", label: "Red / Purple / Brown" },
  { value: "YellowPurpleOrange", label: "Yellow / Purple / Brown" },
  { value: "All", label: "All" }
];

export const rarities = {
  Common: { color: "#FEFEFE", pips: 1 },
  Rare: { color: "#54A721", pips: 2 },
  "Ultra-Rare": { color: "#1D71FF", pips: 3 },
  Epic: { color: "#9635E7", pips: 4 },
  Legendary: { color: "#F3A120", pips: 5 },
  Mythic: { color: "#13E3F6", pips: 6 },
  Doomed: { color: "#B90000", pips: 6 }
};

export const roles = [
  "Assassin",
  "Defender",
  "Generator",
  "Mage",
  "Striker",
  "Support",
  "Warlock",
  "Warmaster",
  "Warrior"
];

// CUT: exchangeattacktomagic, magearmor
export const traits = [
  {
    name: "Absorb Power",
    code: "spikearmor",
    description: "Gain 3 Magic when an enemy casts a spell."
  },
  {
    name: "Accursed",
    code: "cursed",
    description: "All enemies lose 2 random Skill points."
  },
  {
    name: "Adagio",
    code: "silence",
    description: "Cleanse all allies when matching Yellow Gems."
  },
  {
    name: "Aegis",
    code: "stoneskin",
    description: "Reduce damage from Skulls by 60%."
  },
  {
    name: "Aflame",
    code: "aflame",
    description: "Burn enemies when doing Skull damage."
  },
  {
    name: "Agile",
    code: "agile",
    description: "20% chance to dodge Skull damage."
  },
  {
    name: "Air Brand",
    code: "airbrand",
    description: "Gain 1 Attack for each Yellow ally."
  },
  {
    name: "Air Heart",
    code: "airheart",
    description: "Gain 1 Life for each Yellow ally."
  },
  {
    name: "Air Link",
    code: "airlink",
    description: "Gain bonus Yellow Mana from Yellow Gem matches."
  },
  {
    name: "Air Spirit",
    code: "airspirit",
    description: "Gain 1 Magic for each Yellow ally."
  },
  { name: "Alert", code: "alert", description: "Immunity to Silence." },
  {
    name: "Ancient Blessing",
    code: "divineshield",
    description: "Bless a random Ally on 4 or 5 Gem matches."
  },
  {
    name: "Ancient Mysteries",
    code: "divineaura",
    description:
      "25% chance to grant a random Positive Status Effect to a random Ally when my turn begins."
  },
  {
    name: "Angry Bear",
    code: "nastyteeth",
    description: "Gain Enraged when matching Brown Gems."
  },
  {
    name: "Anti-Magic Sphere",
    code: "jinx",
    description: "Reduce damage from Spells by 20%."
  },
  {
    name: "Anti-Magic",
    code: "magiclink",
    description: "Deal double Skull damage vs. Enchanted enemies."
  },
  {
    name: "Antiquity",
    code: "feyslayer",
    description: "Gain 4 Magic when using Artifacts."
  },
  {
    name: "Apparition",
    code: "aspectofwar",
    description: "Gain 5 Attack when matching Skulls."
  },
  {
    name: "Aquatic Glory",
    code: "winterveil",
    description: "All Merfolk allies gain 2 Magic when an enemy dies."
  },
  {
    name: "Aquatic",
    code: "waterspirit",
    description: "Submerge myself when I receive damage."
  },
  {
    name: "Arcane Surge",
    code: "magiclink",
    description: "Gain bonus Purple Mana from Purple Gem matches."
  },
  {
    name: "Arcane",
    code: "arcane",
    description: "Gain 1 Magic when an ally casts a spell."
  },
  {
    name: "Armor of Light",
    code: "armored",
    description: "All troops gain 4 Armor."
  },
  {
    name: "Armor Piercing",
    code: "armorpiercing",
    description: "50% chance to ignore Armor with Skull damage."
  },
  {
    name: "Armor Plating",
    code: "clockwork",
    description: "All Mech Allies gain 2 Armor per turn."
  },
  {
    name: "Armored",
    code: "armored",
    description: "Reduce damage from Skulls by 25%."
  },
  {
    name: "Aspect of Death",
    code: "aspectofdeath",
    description: "Steal 2 Life from the first enemy at the start of each turn."
  },
  {
    name: "Aspect of Famine",
    code: "aspectoffamine",
    description: "First enemy loses 3 Skill points at the start of each turn."
  },
  {
    name: "Aspect of Plague",
    code: "aspectofplague",
    description: "Enemies lose 3 Skill points on 4 or 5 Gem matches."
  },
  {
    name: "Aspect of War",
    code: "aspectofwar",
    description: "Gain 3 Attack at the start of each turn."
  },
  {
    name: "Assassinate",
    code: "assassinate",
    description:
      "10% Chance to assassinate the last enemy when I deal Skull damage."
  },
  {
    name: "Aura of Power",
    code: "divineaura",
    description: "All Mystics gain 1 Magic on 4 or 5 Gem matches."
  },
  {
    name: "Avenger",
    code: "avenger",
    description: "Gain 3 Attack when an ally dies."
  },
  {
    name: "Axes of Doom",
    code: "dwarfslayer",
    description: "Gain 3 Magic if using an Axe."
  },
  {
    name: "Backup",
    code: "humanbond",
    description: "35% chance to summon a Bandit when an ally dies."
  },
  {
    name: "Ballistics",
    code: "immense",
    description: "Gain 2 to a random Skill on 4 or 5 Gem matches."
  },
  {
    name: "Banishment",
    code: "manashield",
    description: "Dispel all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Bardic Inspiration",
    code: "spikearmor",
    description:
      "All Yellow Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Barkskin",
    code: "natureheart",
    description: "Reduce damage from Skulls by 33%."
  },
  {
    name: "Beast Bond",
    code: "beastbond",
    description: "Allied Beasts gain 2 Life."
  },
  {
    name: "Beast Shield",
    code: "beastbond",
    description: "Allied Beasts gain 2 Armor."
  },
  {
    name: "Beast Slayer",
    code: "beastslayer",
    description: "Deal double Skull damage vs. Beasts."
  },
  {
    name: "Beast Spirit",
    code: "centaurslayer",
    description: "Gain 1 Magic for each Beast ally."
  },
  {
    name: "Big Teeth",
    code: "nagaslayer",
    description: "Gain 1 Attack when allies gain an Extra Turn."
  },
  {
    name: "Big",
    code: "big",
    description: "Gain 1 Life on 4 or 5 Gem matches."
  },
  {
    name: "Black Hunger",
    code: "hunger",
    description: "Steal 2 Life from the first enemy when I match Purple Gems."
  },
  {
    name: "Blessing of Anu",
    code: "divineshield",
    description:
      "All Blue Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Blessing of Gaard",
    code: "doom",
    description: "All Red Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Blood and Glory",
    code: "reinforced",
    description: "Gain 1 Glory in PvP Battles."
  },
  {
    name: "Bloodlust",
    code: "frenzy",
    description: "Become Enraged when enemy dies."
  },
  {
    name: "Bloodsucking",
    code: "bloodsucking",
    description: "Deal double Skull damage to wounded enemies."
  },
  {
    name: "Bloodthirsty",
    code: "bloodsucking",
    description: "Become enraged on 4 or 5 Gem matches."
  },
  {
    name: "Bloody Boughs",
    code: "dragonvines",
    description:
      "Entangle and inflict Bleed to a random Enemy when matching 4 or more Gems."
  },
  {
    name: "Boo!",
    code: "soullegion",
    description: "Gain 8 Magic on Purple gem matches."
  },
  {
    name: "Bountyhunter",
    code: "merchant",
    description: "Gain 2x - 6x to Bounty Score, based on my ascension."
  },
  {
    name: "Bright Death",
    code: "airbrand",
    description: "Summon a Lightstorm when an enemy dies."
  },
  {
    name: "Brilliant Aura",
    code: "blessed",
    description: "All allies gain 2 Life on 4 or 5 Gem matches."
  },
  {
    name: "Bull General",
    code: "taurosbond",
    description: "All Tauros allies gain 1 Attack every turn."
  },
  {
    name: "Bullish Vigor",
    code: "orclord",
    description: "All Allied Tauros start battles with 50% Mana."
  },
  {
    name: "Bullseye",
    code: "bullseye",
    description: "15% chance for Skull damage to be lethal."
  },
  {
    name: "Buried Hatred",
    code: "stonebrand",
    description: "Deal double Skull damage vs. Brown Enemies."
  },
  {
    name: "Burning Hatred",
    code: "firebrand",
    description: "Deal double Skull damage vs. Red Enemies."
  },
  {
    name: "Call Bones",
    code: "undeadbond",
    description: "Summon a Bonestorm when an ally summons a troop."
  },
  {
    name: "Call Doom",
    code: "daemonslayer",
    description: "Summon a Doomstorm when an ally summons a troop."
  },
  {
    name: "Call Fire",
    code: "firespirit",
    description: "Summon a Firestorm when an ally summons a troop."
  },
  {
    name: "Call Ice",
    code: "waterbrand",
    description: "Summon an Icestorm when an ally summons a troop."
  },
  {
    name: "Call Nature",
    code: "natureheart",
    description: "Summon a Leafstorm when an ally summons a troop."
  },
  {
    name: "Call Stone",
    code: "stonespirit",
    description: "Summon a Duststorm when an ally summons a troop."
  },
  {
    name: "Cataclysm",
    code: "molten",
    description: "Explode 2 random Gems when I deal skull damage."
  },
  {
    name: "Celestial Currents",
    code: "blessed",
    description: "All Centaur allies gain 1 Magic."
  },
  {
    name: "Celestial Sage",
    code: "divineshield",
    description: "Give all Allies 1 Magic on 4 or 5 matches."
  },
  {
    name: "Celestial Shield",
    code: "divineshield",
    description: "Gain a Barrier on 4 or 5 Gem matches."
  },
  {
    name: "Centaur Bond",
    code: "centaurbond",
    description: "Allied Centaurs gain 2 Life."
  },
  {
    name: "Centaur Shield",
    code: "centaurbond",
    description: "Allied Centaurs gain 2 Armor."
  },
  {
    name: "Centaur Slayer",
    code: "centaurslayer",
    description: "Deal double Skull damage vs. Centaurs."
  },
  {
    name: "Chaos Storm",
    code: "airspirit",
    description: "Summon a random storm on 4 or 5 Gem matches."
  },
  {
    name: "Chaos Wave",
    code: "inscribed",
    description:
      "All enemies lose 1 point on a random skill when I match Skulls."
  },
  {
    name: "Child of Sky",
    code: "divinebond",
    description: "25% chance to summon a Heronath when an ally casts a spell."
  },
  {
    name: "Chill of Death",
    code: "chilltouch",
    description: "When an enemy dies, Freeze another random enemy."
  },
  {
    name: "Chill Touch",
    code: "chilltouch",
    description: "Inflict Frozen when doing Skull damage."
  },
  {
    name: "Chill",
    code: "chill",
    description: "Gain 8 Magic on Blue gem matches."
  },
  {
    name: "Chilling Aura",
    code: "icycloak",
    description: "Steal 2 Attack from the first enemy on 4 or 5 matches."
  },
  {
    name: "Cleanse",
    code: "divineshield",
    description: "Cleanse all allies on 4 or 5 Gem matches."
  },
  {
    name: "Clobber",
    code: "clobber",
    description: "Deal double Skull damage vs. Stunned enemies."
  },
  {
    name: "Clockwork",
    code: "clockwork",
    description: "All Mechs start battle with 50% Mana."
  },
  {
    name: "Commander",
    code: "kingswill",
    description: "Gain 2 to all Skills if in first position."
  },
  {
    name: "Compassion",
    code: "compassion",
    description: "Gain 8 Magic on Red gem matches."
  },
  {
    name: "Conflagration",
    code: "molten",
    description: "Burn all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Construct Bond",
    code: "constructbond",
    description: "Allied Constructs gain 2 Life."
  },
  {
    name: "Construct Shield",
    code: "constructbond",
    description: "Allied Constructs gain 2 Armor."
  },
  {
    name: "Construct Slayer",
    code: "constructslayer",
    description: "Deal double Skull damage vs. Constructs."
  },
  {
    name: "Contagion",
    code: "siphon",
    description: "Inflict Disease on a random Enemy on Green Gem matches."
  },
  {
    name: "Corruption",
    code: "miasma",
    description: "Steal 3 Life from the first enemy when matching Red Gems."
  },
  {
    name: "Counterattack",
    code: "defender",
    description: "Gain 2 attack when I take damage."
  },
  {
    name: "Crashing Wave",
    code: "waterspirit",
    description: "Explode a Blue Gem when matching 4 or more Gems."
  },
  {
    name: "Creeping Doom",
    code: "ensoul",
    description: "75% chance to summon a Webspinner when an enemy dies."
  },
  {
    name: "Crystallize",
    code: "graniteskin",
    description: "Gain Enchant when matching Purple Gems."
  },
  {
    name: "Cunning",
    code: "cunning",
    description: "Immunity to Hunter's Mark."
  },
  {
    name: "Curse of Madness",
    code: "ward",
    description: "Curse a random Enemy when matching Brown."
  },
  {
    name: "Cursed Touch",
    code: "cursed",
    description: "Inflict Curse when dealing Skull damage."
  },
  {
    name: "Daemon Bond",
    code: "daemonbond",
    description: "Allied Daemons gain 2 Life."
  },
  {
    name: "Daemon Shield",
    code: "daemonbond",
    description: "Allied Daemons gain 2 Armor."
  },
  {
    name: "Daemon Slayer",
    code: "daemonslayer",
    description: "Deal double Skull damage vs. Daemons. "
  },
  {
    name: "Daemonic Pact",
    code: "daemonicpact",
    description: "25% chance to summon an Ancient Horror on death."
  },
  {
    name: "Daemonic Rage",
    code: "daemonslayer",
    description: "All Daemons gain 1 Attack."
  },
  {
    name: "Dark Ancestry",
    code: "cursed",
    description: "Immune to Mana Drain, Silence, Faerie Fire, and Web."
  },
  {
    name: "Dark Channel",
    code: "darkchannel",
    description: "50% chance to gain 1 Magic every turn."
  },
  {
    name: "Dark Covenant",
    code: "daemonicpact",
    description: "25% chance to summon Envy on death."
  },
  {
    name: "Dark Death",
    code: "magicbrand",
    description: "Summon a Darkstorm when an enemy dies."
  },
  {
    name: "Dark Fury",
    code: "aspectofdeath",
    description: "Gain 8 Attack and Magic when I take damage."
  },
  {
    name: "Dark Hatred",
    code: "magicbrand",
    description: "Deal double Skull damage vs. Purple Enemies."
  },
  {
    name: "Dark Hunger",
    code: "centaurslayer",
    description: "Steal 1 Life from the first enemy when matching Purple Gems."
  },
  {
    name: "Dark Venom",
    code: "venomous",
    description: "Poison a random Enemy when matching purple Gems."
  },
  {
    name: "Darkfall",
    code: "darkfall",
    description: "Gain 1 Attack when matching Purple Gems."
  },
  {
    name: "Darkness",
    code: "darkfall",
    description: "Decrease all enemies' Attack by 4 on 4 or 5 Gem matches."
  },
  {
    name: "Dawn’s Aura",
    code: "sunshine",
    description: "Create a lightstorm at the start of a battle."
  },
  {
    name: "Deadly Flock",
    code: "airbrand",
    description: "25% chance to summon a Bladewing when an Enemy dies."
  },
  {
    name: "Deadly Waters",
    code: "miasma",
    description: "Create a Bonestorm on 4 or 5 Gem matches."
  },
  {
    name: "Death Below",
    code: "hunger",
    description: "8% Chance to kill the last enemy on 4 or 5 Gem matches."
  },
  {
    name: "Death Curse",
    code: "aspectofdeath",
    description: "Death Mark all enemies when I die."
  },
  {
    name: "Death Ray",
    code: "trueshot",
    description: "Death Mark the first enemy when I take damage to Life."
  },
  {
    name: "Death Touch",
    code: "deathtouch",
    description: "Inflict Death Mark when doing Skull damage."
  },
  {
    name: "Deep Magic",
    code: "magicbrand",
    description: "Gain 5 Magic when attacking Delves."
  },
  {
    name: "Deep Shield",
    code: "reinforced",
    description: "Gain 9 Armor when attacking Delves."
  },
  {
    name: "Deep Strength",
    code: "avenger",
    description: "Gain 7 Attack when attacking Delves."
  },
  {
    name: "Deep Vitality",
    code: "regeneration",
    description: "Gain 9 Life when attacking Delves."
  },
  {
    name: "Deep Water",
    code: "bloodsucking",
    description: "Submerge myself on 4 or 5 Gem matches."
  },
  {
    name: "Deep Wounds",
    code: "assassinate",
    description: "Inflict Bleed on a random enemy on Red Gem matches."
  },
  {
    name: "Defender",
    code: "defender",
    description: "Allies gain 3 Armor when defending in PVP."
  },
  {
    name: "Delirium",
    code: "indigestible",
    description: "Gain 2 Magic and Attack when I take damage to Life."
  },
  {
    name: "Deluge",
    code: "waterlink",
    description: "Submerge a random ally on 4 or 5 Gem matches."
  },
  {
    name: "Depth Charge",
    code: "waterspirit",
    description: "Deal double Skull damage vs. Submerged enemies."
  },
  {
    name: "Desert King",
    code: "kingswill",
    description:
      "All Brown Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Destiny of Darkness",
    code: "darkfall",
    description:
      "2% chance to Deathmark an enemy when matching Purple Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Flame",
    code: "fierycloak",
    description:
      "2% chance to Deathmark an enemy when matching Red Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Ice",
    code: "frozensoul",
    description:
      "2% chance to Deathmark an enemy when matching Blue Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Light",
    code: "sunshine",
    description:
      "2% chance to Deathmark an enemy when matching Yellow Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Nature",
    code: "seedling",
    description:
      "2% chance to Deathmark an enemy when matching Green Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Stone",
    code: "graniteskin",
    description:
      "2% chance to Deathmark an enemy when matching Brown Gems, boosted by my ascensions."
  },
  {
    name: "Dexterous",
    code: "spikearmor",
    description: "40% chance to dodge Skull damage."
  },
  {
    name: "Dissonance",
    code: "silence",
    description: "Silence a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Divine Aura",
    code: "divineaura",
    description: "All allies heal 2 points per turn."
  },
  {
    name: "Divine Bond",
    code: "divinebond",
    description: "Allied Divines gain 2 Life."
  },
  {
    name: "Divine Right",
    code: "divineshield",
    description: "Gain 4 Armor when an ally casts a spell."
  },
  {
    name: "Divine Shield",
    code: "divinebond",
    description: "Allied Divines gain 2 Armor."
  },
  {
    name: "Divine Slayer",
    code: "divineslayer",
    description: "Deal double Skull damage vs. Divine."
  },
  {
    name: "Divinity",
    code: "divineaura",
    description: "All Divine Allies gain 2 Life every turn."
  },
  {
    name: "Dodge",
    code: "agile",
    description: "30% chance to dodge Skull damage."
  },
  {
    name: "Doom Aura",
    code: "aspectofdeath",
    description: "Create a Doomstorm on 4 or 5 Gem matches."
  },
  {
    name: "Doom",
    code: "doom",
    description: "Deal double Skull damage vs. Death Marked enemies."
  },
  {
    name: "Dragon Bond",
    code: "dragonbond",
    description: "Allied Dragons gain 2 Life."
  },
  {
    name: "Dragon Boon",
    code: "dragonbond",
    description: "25% chance to summon a Dragonette on death."
  },
  {
    name: "Dragon Shield",
    code: "dragonbond",
    description: "Allied Dragons gain 2 Armor."
  },
  {
    name: "Dragon Slayer",
    code: "dragonslayer",
    description: "Deal double Skull damage vs. Dragons."
  },
  {
    name: "Dragon Vines",
    code: "dragonvines",
    description: "Entangle the first enemy on 4 or 5 Gem matches."
  },
  {
    name: "Dragon's Blessing",
    code: "divineaura",
    description:
      "Cause a random positive status effect on a random Ally on 4 or 5 Gem matches."
  },
  {
    name: "Dragon's Grace",
    code: "manyheads",
    description: "All ally Dragons gain 1 Life and Magic on 4 or 5 Gem matches."
  },
  {
    name: "Drowned Crew",
    code: "undeadslayer",
    description: "All Elementals start battle with 50% Mana."
  },
  {
    name: "Dusk’s Aura",
    code: "darkchannel",
    description: "Create a darkstorm at the start of a battle."
  },
  {
    name: "Dwarf Bond",
    code: "dwarfbond",
    description: "Allied Dwarves gain 2 Life."
  },
  {
    name: "Dwarf Shield",
    code: "dwarfbond",
    description: "Allied Dwarves gain 2 Armor."
  },
  {
    name: "Dwarf Slayer",
    code: "dwarfslayer",
    description: "Deal double Skull damage vs. Dwarves."
  },
  {
    name: "Dwarven Armor",
    code: "giantbond",
    description: "Gain 4 Armor for each Dwarven ally."
  },
  {
    name: "Dwarven Doom",
    code: "soullegion",
    description: "Summon a Doomstorm when an enemy dies."
  },
  {
    name: "Dwarven Mettle",
    code: "giantslayer",
    description:
      "All Dwarven allies gain 2 Life and Attack on 4 or 5 Gem matches."
  },
  {
    name: "Eagle Eye",
    code: "alert",
    description: "Place Hunter's Mark on enemies when doing Skull damage."
  },
  {
    name: "Earthquake",
    code: "shatter",
    description: "Stun all Enemies on 4 or 5 Gem matches."
  },
  {
    name: "Electrified Plating",
    code: "technomancy",
    description: "Add 50% of Armor to Skull damage."
  },
  {
    name: "Elemental Bond",
    code: "elementalbond",
    description: "Allied Elementals gain 2 Life."
  },
  {
    name: "Elemental Shield",
    code: "elementalbond",
    description: "Allied Elementals gain 2 Armor."
  },
  {
    name: "Elemental Slayer",
    code: "elementalslayer",
    description: "Deal double Skull damage vs. Elementals."
  },
  {
    name: "Elf Bond",
    code: "elfbond",
    description: "Allied Elves gain 2 Life."
  },
  {
    name: "Elf Shield",
    code: "elfbond",
    description: "Allied Elves gain 2 Armor."
  },
  {
    name: "Elf Slayer",
    code: "elfslayer",
    description: "Deal double Skull damage vs. Elves."
  },
  {
    name: "Elven Kin",
    code: "dragonvines",
    description: "All Elves start battle with 50% Mana."
  },
  {
    name: "Elven Sentries",
    code: "elfbond",
    description: "All Elves gain 1 Magic and Attack at the start of a battle."
  },
  {
    name: "Emperor's Blessing",
    code: "kingswill",
    description: "Enchant a random ally on 4 or 5 Gem matches."
  },
  {
    name: "Empowered",
    code: "empowered",
    description: "Start battles with full Mana."
  },
  {
    name: "Energize",
    code: "technomancy",
    description: "Gain 3 Magic on Yellow gem matches."
  },
  {
    name: "Ensoul",
    code: "ensoul",
    description: "Gain an extra Soul on 4 or 5 Gem matches."
  },
  {
    name: "Entrapment",
    code: "fireproof",
    description: "Deal double Skull damage vs. Entangled enemies."
  },
  {
    name: "Eternal Summer",
    code: "feybond",
    description: "All Fey Allies gain 2 Life every turn."
  },
  { name: "Exemplar", code: "avenger", description: "Gain 5 Attack in PvP." },
  {
    name: "Experiment",
    code: "siphon",
    description: "Inflict a random status effect  on 4 or 5 Gem matches."
  },
  {
    name: "Extreme Greed",
    code: "greedy",
    description: "Gain 4 bonus Gold when matching 4 or more Gems."
  },
  {
    name: "Fall",
    code: "fall",
    description: "Gain 8 Magic on Brown gem matches."
  },
  {
    name: "Familiar",
    code: "goblord",
    description: "50% chance to summon a Giant Spider when I take damage."
  },
  {
    name: "Fast Healing",
    code: "regeneration",
    description: "Recover 2 Life every turn."
  },
  { name: "Fast", code: "fast", description: "Start battles with 50% Mana." },
  {
    name: "Feline Fury",
    code: "beastbond",
    description: "All Raksha gain 1 Attack and Life."
  },
  { name: "Ferocity", code: "deathtouch", description: "Gain 4 Attack." },
  { name: "Fey Bond", code: "feybond", description: "Allied Fey gain 2 Life." },
  {
    name: "Fey Link",
    code: "spiritfire",
    description:
      "50% chance to Faerie Fire a random Enemy at the start of my Turn."
  },
  {
    name: "Fey Shield",
    code: "feybond",
    description: "Allied Fey gain 2 Armor."
  },
  {
    name: "Fey Slayer",
    code: "feyslayer",
    description: "Deal double Skull damage vs. Fey."
  },
  {
    name: "Fey Touch",
    code: "feybond",
    description: "Faerie Fire enemies when doing Skull damage."
  },
  {
    name: "Fey Vengeance",
    code: "aflame",
    description: "Faerie Fire a random enemy when an Ally dies."
  },
  {
    name: "Feyblade",
    code: "feyslayer",
    description: "Deal double Skull damage vs. enemies with Faerie Fire."
  },
  {
    name: "Fiery Cloak",
    code: "fierycloak",
    description: "Burn a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Fiery Death",
    code: "firebrand",
    description: "Summon a Firestorm when an enemy dies."
  },
  {
    name: "Fire Aura",
    code: "fierycloak",
    description: "All Red Allies gain 5 to all Stats."
  },
  {
    name: "Fire Brand",
    code: "firebrand",
    description: "Gain 1 Attack for each Red ally."
  },
  {
    name: "Fire Heart",
    code: "fireheart",
    description: "Gain 1 Life for each Red ally."
  },
  {
    name: "Fire Link",
    code: "firelink",
    description: "Gain bonus Red Mana from Red Gem matches."
  },
  {
    name: "Fire Spirit",
    code: "firespirit",
    description: "Gain 1 Magic for each Red ally."
  },
  {
    name: "Fireblade",
    code: "pyromania",
    description: "Deal triple Skull damage to burning enemies."
  },
  {
    name: "Firebringer",
    code: "firelink",
    description: "Gain bonus Red Mana from Red Gem matches."
  },
  {
    name: "Fireproof",
    code: "fireproof",
    description: "Immunity to Burning and Faerie Fire."
  },
  {
    name: "Firestarter",
    code: "aflame",
    description: "Create a firestorm at the start of a battle."
  },
  {
    name: "First Wargare",
    code: "nastyteeth",
    description:
      "Give 2 Attack and Magic to Allied Wargare when matching 4 or more Gems."
  },
  {
    name: "Focus",
    code: "knightslayer",
    description: "Deal double Skull damage vs. enemies with Hunter's Mark."
  },
  {
    name: "For The Herd",
    code: "taurosbond",
    description:
      "Give all Tauros 1 Attack, Armor and Life on 4 or 5 Gem matches."
  },
  {
    name: "For the People",
    code: "queensgrace",
    description: "All Humans gain 2 Armor at the start of each turn."
  },
  {
    name: "Fortitude",
    code: "reinforced",
    description: "Immune to Stun, Poison, Disease, Death Mark and Devour."
  },
  {
    name: "Frenzy",
    code: "frenzy",
    description: "Gain 1 Attack when taking damage."
  },
  {
    name: "From Ashes",
    code: "fireheart",
    description: "Summon a Firestorm when an ally dies."
  },
  {
    name: "From Bones",
    code: "undeadbond",
    description: "Summon a Bonestorm when an ally dies."
  },
  {
    name: "From Dark",
    code: "magicheart",
    description: "Summon a Darkstorm when an ally dies."
  },
  {
    name: "From Doom",
    code: "deathtouch",
    description: "Summon a Doomstorm when an ally dies."
  },
  {
    name: "From Ice",
    code: "waterheart",
    description: "Summon an Icestorm when an ally dies."
  },
  {
    name: "From Light",
    code: "airheart",
    description: "Summon a Lightstorm when an ally dies."
  },
  {
    name: "From Nature",
    code: "natureheart",
    description: "Summon a Leafstorm when an ally dies."
  },
  {
    name: "From Stone",
    code: "stoneheart",
    description: "Summon a Duststorm when an ally dies."
  },
  {
    name: "Frostbite",
    code: "frozensoul",
    description:
      "25% chance to Freeze a random enemy when an ally casts a spell."
  },
  {
    name: "Frozen Hatred",
    code: "chilltouch",
    description: "Deal double Skull damage vs. Blue Enemies."
  },
  {
    name: "Frozen Soul",
    code: "frozensoul",
    description: "Inflict Frozen when enemies deal Skull damage to me."
  },
  {
    name: "Full Plate",
    code: "fullplate",
    description: "Gain 2 Armor every turn."
  },
  {
    name: "Gale Force",
    code: "airspirit",
    description: "All Yellow allies gain 2 Attack."
  },
  {
    name: "Gate Guardian",
    code: "gateguardian",
    description: "50% chance to Summon a Warg when an enemy dies."
  },
  {
    name: "General",
    code: "leader",
    description: "Gain 3 to all Skills if in last position."
  },
  {
    name: "Get Behind Me!",
    code: "divineshield",
    description: "25% chance to Barrier a random Ally at the start of my turn."
  },
  {
    name: "Giant Bond",
    code: "giantbond",
    description: "Allied Giants gain 2 Life."
  },
  {
    name: "Giant Lord",
    code: "goblord",
    description: "All Giants start battle with 50% Mana."
  },
  {
    name: "Giant Queen",
    code: "queensgrace",
    description: "All Giant Allies gain 2 Life and Magic on 4 or 5 Gem matches."
  },
  {
    name: "Giant Shield",
    code: "giantbond",
    description: "Allied Giants gain 2 Armor."
  },
  {
    name: "Giant Slayer",
    code: "giantslayer",
    description: "Deal double Skull damage vs. Giants."
  },
  {
    name: "Gift of Fire",
    code: "fireheart",
    description: "All Red Allies gain 1 Magic."
  },
  {
    name: "Gloom",
    code: "undeadbond",
    description: "All Purple allies gain 2 Life."
  },
  {
    name: "Goblin Bond",
    code: "goblinbond",
    description: "Allied Goblins gain 2 Life."
  },
  {
    name: "Goblin Friend",
    code: "goblinbond",
    description: "All Goblins gain 2 Attack."
  },
  {
    name: "Goblin Shield",
    code: "goblinbond",
    description: "Allied Goblins gain 2 Armor."
  },
  {
    name: "Goblin Slayer",
    code: "goblinslayer",
    description: "Deal double Skull damage vs. Goblins."
  },
  {
    name: "Goblord",
    code: "goblord",
    description: "Gain 20 Life if in last position."
  },
  {
    name: "Godslayer",
    code: "daemonslayer",
    description: "Deal 3x - 5x Skull damage vs. Bosses, based on my ascension."
  },
  {
    name: "Golem Protector",
    code: "taurosbond",
    description:
      "20% chance to summon an Ancient Golem when I take damage to Life."
  },
  {
    name: "Granite Skin",
    code: "graniteskin",
    description: "Reduce damage from Skulls by 75%."
  },
  {
    name: "Greedy",
    code: "greedy",
    description: "Gain 2 bonus Gold on 4 or 5 Gem matches."
  },
  {
    name: "Grim Curse",
    code: "virulence",
    description: "Disease a random enemy when matching Purple Gems."
  },
  {
    name: "Grudge",
    code: "grudge",
    description: "Gain 1 Attack when an enemy casts a spell."
  },
  {
    name: "Hack n Slash",
    code: "hacknslash",
    description: "Gain 3 Attack when dealing Skull damage."
  },
  {
    name: "Hammer Mastery",
    code: "dwarfbond",
    description: "Gain 2 Magic if using a Hammer."
  },
  {
    name: "Harpy Flock",
    code: "airheart",
    description: "5% chance to summon a Harpy when my turn begins."
  },
  {
    name: "Harvest Moon",
    code: "darkfall",
    description: "All Wargare Allies gain 2 Life every turn."
  },
  {
    name: "Haunted Weave",
    code: "stalker",
    description: "Web a random enemy when I summon a troop."
  },
  {
    name: "Head Hunter",
    code: "soullegion",
    description: "50% chance to summon a Vargouille when an Enemy dies."
  },
  {
    name: "Healing Herb",
    code: "naturespirit",
    description: "Gain 4 Life when matching Green Gems."
  },
  {
    name: "Heatwave",
    code: "fierycloak",
    description: "Create a Firestorm at the start of every turn."
  },
  {
    name: "Hellsteed",
    code: "fierycloak",
    description: "25% chance to summon a Nightmare when an Ally casts a Spell."
  },
  {
    name: "Hidden Trap",
    code: "darkchannel",
    description: "Explode a random Gem when matching Yellow Gems."
  },
  {
    name: "High Ancestry",
    code: "mysticbond",
    description: "Immune to Mana Drain, Silence, Faerie Fire, and Death Mark."
  },
  {
    name: "High Seas",
    code: "waterlink",
    description: "Gain 2 bonus Blue Mana when matching Blue Gems."
  },
  {
    name: "Holy Armor",
    code: "armored",
    description: "Reduce damage from Skulls by 40%."
  },
  {
    name: "Huge",
    code: "huge",
    description: "Gain 2 Life on 4 or 5 Gem matches."
  },
  {
    name: "Human Bond",
    code: "humanbond",
    description: "Allied Humans gain 2 Life."
  },
  {
    name: "Human Shield",
    code: "humanbond",
    description: "Allied Humans gain 2 Armor."
  },
  {
    name: "Human Slayer",
    code: "humanslayer",
    description: "Deal double Skull damage vs. Humans."
  },
  {
    name: "Hunger",
    code: "hunger",
    description: "Gain 2 to all Skills on Skull gem matches."
  },
  {
    name: "Hunt",
    code: "stryxslayer",
    description: "Hunter’s Mark a random enemy on 4 or 5 of a kind."
  },
  {
    name: "Hunter's Moon",
    code: "darkfall",
    description: "Hunter's Mark a random Enemy when matching Red Gems."
  },
  {
    name: "Ice Armor",
    code: "chilltouch",
    description: "Reduce damage from Skulls by 65%."
  },
  {
    name: "Ice Aura",
    code: "frozensoul",
    description: "All Blue Allies gain 5 to all Stats."
  },
  {
    name: "Icy Cloak",
    code: "icycloak",
    description: "Deal triple Skull damage vs. Frozen enemies."
  },
  {
    name: "Icy Death",
    code: "waterbrand",
    description: "Summon an Icestorm when an enemy dies."
  },
  {
    name: "Icy Rebirth",
    code: "chilltouch",
    description: "Freeze all Enemies when I die."
  },
  {
    name: "Icy Veil",
    code: "waterbrand",
    description: "Create an icestorm at the start of a battle."
  },
  {
    name: "Immense",
    code: "immense",
    description: "Gain 10 Life on 4 or 5 Gem matches."
  },
  {
    name: "Immortal",
    code: "immortal",
    description: "25% chance to resurrect after death."
  },
  { name: "Immune", code: "immune", description: "Immunity to Disease." },
  {
    name: "Impact",
    code: "shatter",
    description: "Inflict Stun when enemies deal Skull damage to me."
  },
  {
    name: "Impervious",
    code: "impervious",
    description: "Immune to all Status Effects, Devour, and Mana Burn."
  },
  {
    name: "Indigestible",
    code: "indigestible",
    description: "Immunity to Devour."
  },
  {
    name: "Infernal Armor",
    code: "aflame",
    description: "Reflect 25% of Skull damage."
  },
  {
    name: "Insane Growth",
    code: "immense",
    description: "Gain 5 to a random Skill on 4 or 5 Gem matches."
  },
  {
    name: "Inscribed",
    code: "inscribed",
    description: "Gain 1 Armor when an enemy casts a spell."
  },
  {
    name: "Inspiration",
    code: "queensgrace",
    description: "All Allies start battle with 15% Mana."
  },
  {
    name: "Inspire Hope",
    code: "sunshine",
    description: "All Humans start battle with 50% Mana."
  },
  { name: "Insulated", code: "insulated", description: "Immunity to Frozen." },
  {
    name: "Invention",
    code: "mechslayer",
    description: "Gain 2 Armor on 4 or 5 Gem matches."
  },
  {
    name: "Invigorated",
    code: "naturespirit",
    description: "Gain 1 Life when an ally casts a spell."
  },
  {
    name: "Invulnerable",
    code: "impervious",
    description:
      "Immune to all Status Effects, Devour,  Mana Drain, Transform, and Lethal Damage."
  },
  {
    name: "Jaws",
    code: "nastyteeth",
    description: "All Merfolk gain 3 Attack on 4 or 5 Gem matches."
  },
  { name: "Jinx", code: "jinx", description: "Halve enemy Gem Masteries." },
  {
    name: "Just a Bite",
    code: "hunger",
    description: "Steal 4 Life from the first enemy when matching Brown Gems."
  },
  {
    name: "King's Legion",
    code: "aspectofdeath",
    description:
      "All Undead Allies gain 1 Armor and Magic when matching 4 or more Gems."
  },
  {
    name: "King's Will",
    code: "kingswill",
    description: "Gain 8 Life when I deal Skull damage."
  },
  {
    name: "Knife Throwing",
    code: "avenger",
    description: "Gain 2 Magic if using a Dagger."
  },
  {
    name: "Knight Bond",
    code: "knightbond",
    description: "Allied Knights gain 2 Life."
  },
  {
    name: "Knight Shield",
    code: "knightbond",
    description: "Allied Knights gain 2 Armor."
  },
  {
    name: "Knight Slayer",
    code: "knightslayer",
    description: "Deal double Skull damage vs. Knights."
  },
  {
    name: "Knockout",
    code: "knockout",
    description: "Inflict Stun when doing Skull damage."
  },
  {
    name: "Leader",
    code: "leader",
    description: "Gain 3 to all Skills if in first position."
  },
  {
    name: "Leading Light",
    code: "armored",
    description: "Gain 10 Armor if in first position."
  },
  {
    name: "Lethal Toxin",
    code: "lethaltoxin",
    description: "Deal triple Skull damage to Poisoned and Webbed enemies."
  },
  {
    name: "Life Drain",
    code: "lifedrain",
    description: "Gain 4 Life when an enemy dies."
  },
  {
    name: "Life Siphon",
    code: "lifedrain",
    description: "Steal 2 Life from the first enemy on 4 or 5 Gem matches."
  },
  {
    name: "Light Fingers",
    code: "greedy",
    description: "Gain 5 Gold every turn."
  },
  {
    name: "Lightbringer",
    code: "merfolkbond",
    description: "Gain bonus Yellow Mana from Yellow Gem matches."
  },
  {
    name: "Lightning Bolt",
    code: "airbrand",
    description: "Deal 10 damage to a random enemy on 4 or 5 matches."
  },
  {
    name: "Lightning Strike",
    code: "airbrand",
    description: "Explode 1 Yellow Gem on 4 or 5 Gem matches."
  },
  {
    name: "Lion's Wrath",
    code: "lionstrength",
    description: "Stun a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Lord of Beasts",
    code: "lionstrength",
    description: "All Beasts start battle with 50% Mana."
  },
  {
    name: "Lord of Death",
    code: "aspectofdeath",
    description: "All Undead gain 5 Life and Magic when an enemy dies."
  },
  {
    name: "Lord of Storms",
    code: "airlink",
    description: "Elementals gain 1 Magic when an ally casts a spell."
  },
  {
    name: "Loyal Mount",
    code: "dragonslayer",
    description: "100% chance to summon a Drake on death."
  },
  {
    name: "Mace of Power",
    code: "dwarfbond",
    description: "Gain 2 Magic if using a Mace."
  },
  {
    name: "Mage Lord",
    code: "mysticbond",
    description: "Gain 2 Magic if in last position."
  },
  {
    name: "Magic Aura",
    code: "eyeofkhetar",
    description: "All Purple Allies gain 5 to all Stats."
  },
  {
    name: "Magic Brand",
    code: "magicbrand",
    description: "Gain 1 Attack for each Purple ally."
  },
  {
    name: "Magic Heart",
    code: "magicheart",
    description: "Gain 1 Life for each Purple ally."
  },
  {
    name: "Magic Link",
    code: "magiclink",
    description: "Gain bonus Purple Mana from Purple Gem matches."
  },
  {
    name: "Magic Spirit",
    code: "magicspirit",
    description: "Gain 1 Magic for each Purple ally."
  },
  {
    name: "Magic Vines",
    code: "dragonvines",
    description: "Entangle a random enemy when matching Purple."
  },
  {
    name: "Magical Shield",
    code: "insulated",
    description: "All Purple allies gain 2 Armor."
  },
  {
    name: "Mana Shield",
    code: "manashield",
    description: "Immunity to Mana Burn, Mana Drain and Mana Steal."
  },
  {
    name: "Mana Source",
    code: "empowered",
    description: "Start battles with 50% Mana."
  },
  {
    name: "Manifestation",
    code: "humanbond",
    description: "Gain 5 to all Skill Points when matching Skulls."
  },
  {
    name: "Many Heads",
    code: "manyheads",
    description: "All enemies take 3 damage when they deal Skull damage."
  },
  {
    name: "Marauder Bond",
    code: "marauderbond",
    description: "Allied Marauders gain 2 Life."
  },
  {
    name: "Marauder Slayer",
    code: "marauderslayer",
    description: "Deal double Skull damage vs. Marauders."
  },
  {
    name: "Master Builder",
    code: "constructbond",
    description: "All constructs gain 10 Life."
  },
  {
    name: "Mech Bond",
    code: "mechbond",
    description: "Allied Mechs gain 2 Life."
  },
  {
    name: "Mech Shield",
    code: "mechbond",
    description: "Allied Mechs gain 2 Armor."
  },
  {
    name: "Mech Slayer",
    code: "mechslayer",
    description: "Deal double Skull damage vs. Mechs."
  },
  {
    name: "Mega-Aspect of Death",
    code: "aspectofdeath",
    description: "Steal 3 Life from the first enemy at the start of each turn."
  },
  {
    name: "Mega-Divine Right",
    code: "divineshield",
    description: "Gain 4 Armor when matching Yellow Gems."
  },
  {
    name: "Mega-Immense",
    code: "immense",
    description: "Gain 12 Life on 4 or 5 Gem matches."
  },
  {
    name: "Mega-Thorns",
    code: "thorns",
    description: "Reflect 100% of Skull damage."
  },
  {
    name: "Mega-Unbreakable",
    code: "immense",
    description: "Reduce damage from Skulls by 100%."
  },
  {
    name: "Mega-Winter Veil",
    code: "winterveil",
    description: "Freeze all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Mentor",
    code: "magiclink",
    description: "All allies gain 1 Magic."
  },
  {
    name: "Merchant",
    code: "merchant",
    description: "Gain 25% bonus Gold from battle."
  },
  {
    name: "Merfolk Bond",
    code: "merfolkbond",
    description: "Allied Merfolk gain 2 Life."
  },
  {
    name: "Merfolk Shield",
    code: "merfolkbond",
    description: "Allied Merfolk gain 2 Armor."
  },
  {
    name: "Merfolk Slayer",
    code: "merfolkslayer",
    description: "Deal double Skull damage vs. Merfolk."
  },
  {
    name: "Miasma",
    code: "miasma",
    description: "Poison a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Molten",
    code: "molten",
    description: "Burn a random enemy when matching Red Gems."
  },
  {
    name: "Moneybags",
    code: "merchant",
    description: "Gain 100% bonus Gold from battle."
  },
  {
    name: "Monkey Magic",
    code: "spiritfire",
    description: "Steal 1 Magic from the first enemy at the start of my turn."
  },
  {
    name: "Monster Bond",
    code: "monsterbond",
    description: "Allied Monsters gain 2 Life."
  },
  {
    name: "Monster Shield",
    code: "monsterbond",
    description: "Allied Monsters gain 2 Armor."
  },
  {
    name: "Monster Slayer",
    code: "monsterslayer",
    description: "Deal double Skull damage vs. Monsters."
  },
  {
    name: "Monstrous Kin",
    code: "manyheads",
    description:
      "Give all Monster Allies 2 to all Skill Points on 4 or 5 Gem matches."
  },
  {
    name: "Mutant Regeneration",
    code: "regeneration",
    description: "Recover 6 Life at the start of each turn."
  },
  {
    name: "Mystic Bond",
    code: "mysticbond",
    description: "Allied Mystics gain 2 Life."
  },
  {
    name: "Mystic Channel",
    code: "magicspirit",
    description: "All Mystics gain 2 Magic and Life when an enemy dies."
  },
  {
    name: "Mystic Shield",
    code: "mysticbond",
    description: "Allied Mystics gain 2 Armor."
  },
  {
    name: "Mystic Slayer",
    code: "mysticslayer",
    description: "Deal double Skull damage vs. Mystics."
  },
  {
    name: "Naga Bond",
    code: "nagabond",
    description: "Allied Naga gain 2 Life."
  },
  {
    name: "Naga Shield",
    code: "nagabond",
    description: "Allied Naga gain 2 Armor."
  },
  {
    name: "Naga Slayer",
    code: "nagaslayer",
    description: "Deal double Skull damage vs. Naga."
  },
  {
    name: "Nasty Teeth",
    code: "nastyteeth",
    description: "Deal 5x Skull damage vs. Knights."
  },
  {
    name: "Nature Aura",
    code: "thorns",
    description: "All Green Allies gain 5 to all Stats."
  },
  {
    name: "Nature Brand",
    code: "naturebrand",
    description: "Gain 1 Attack for each Green ally."
  },
  {
    name: "Nature Heart",
    code: "natureheart",
    description: "Gain 1 Life for each Green ally."
  },
  {
    name: "Nature Link",
    code: "naturelink",
    description: "Gain bonus Green Mana from Green Gem matches."
  },
  {
    name: "Nature Pact",
    code: "elfbond",
    description: "25% chance to summon a Dryad on death."
  },
  {
    name: "Nature Spirit",
    code: "naturespirit",
    description: "Gain 1 Magic for each Green ally."
  },
  {
    name: "Nature's Death",
    code: "naturebrand",
    description: "Summon a Leafstorm when an enemy dies."
  },
  {
    name: "Nature’s Aura",
    code: "naturelink",
    description: "Create a leafstorm at the start of a battle."
  },
  {
    name: "Nature’s Will",
    code: "naturelink",
    description: "Gain bonus Green Mana from Green Gem matches."
  },
  {
    name: "Necro Master",
    code: "aspectofdeath",
    description: "Gain 150% bonus Souls from battle."
  },
  {
    name: "Necromancy",
    code: "necromancy",
    description: "Gain 50% bonus Souls from battle."
  },
  { name: "Nimble", code: "flying", description: "Immunity to Entangle." },
  {
    name: "Northern Clans",
    code: "frozensoul",
    description: "All Urska start the battle with 50% Mana."
  },
  {
    name: "Ocean’s Trident",
    code: "avenger",
    description: "Gain 3 Magic if using a Polearm."
  },
  {
    name: "Omen of Dark",
    code: "jinx",
    description: "Explode a Purple Gem at the start of battle."
  },
  {
    name: "Omen of Death",
    code: "undeadslayer",
    description: "Explode a Skull at the start of battle."
  },
  {
    name: "Omen of Fire",
    code: "firelink",
    description: "Explode a Red Gem at the start of battle."
  },
  {
    name: "Omen of Ice",
    code: "chilltouch",
    description: "Explode a Blue Gem at the start of battle."
  },
  {
    name: "Omen of Light",
    code: "elementalbond",
    description: "Explode a Yellow Gem at the start of battle."
  },
  {
    name: "Omen of Nature",
    code: "naturespirit",
    description: "Explode a Green Gem at the start of battle."
  },
  {
    name: "Omen of Stone",
    code: "stonebrand",
    description: "Explode a Brown Gem at the start of battle."
  },
  {
    name: "Orc Armor",
    code: "armored",
    description: "Gain 5 Armor when I take damage."
  },
  {
    name: "Orc Bond",
    code: "orcbond",
    description: "Allied Orcs gain 2 Life."
  },
  {
    name: "Orc Cunning",
    code: "magiclink",
    description: "Gain 2 Magic when I take damage."
  },
  {
    name: "Orc Fury",
    code: "marauderslayer",
    description: "Gain 3 Attack when I take damage."
  },
  {
    name: "Orc Might",
    code: "goblinbond",
    description: "Gain 8 to a random skill when I take damage."
  },
  {
    name: "Orc Shield",
    code: "orcbond",
    description: "Allied Orcs gain 2 Armor."
  },
  {
    name: "Orc Slayer",
    code: "orcslayer",
    description: "Deal double Skull damage vs. Orc."
  },
  {
    name: "Orclord",
    code: "orclord",
    description: "All Orcs start battle with 50% Mana."
  },
  {
    name: "Overclock",
    code: "clockwork",
    description: "Allied Mechs gain 5 Attack and Armor."
  },
  {
    name: "Pack Master",
    code: "wildfolkslayer",
    description: "25% chance to summon a Dire Wolf on death."
  },
  {
    name: "Penumbra",
    code: "darkfall",
    description: "Create a Darkstorm at the start of every turn."
  },
  {
    name: "Perfect Aim",
    code: "trueshot",
    description: "Gain 2 Magic if using a Bow."
  },
  {
    name: "Pickpocket",
    code: "merchant",
    description: "Gain 10 Gold when I take damage."
  },
  {
    name: "Pillage and Plunder",
    code: "graniteskin",
    description: "Gain 20 bonus Gold on 4 or 5 Gem matches."
  },
  {
    name: "Plague Touch",
    code: "plaguetouch",
    description: "Inflict Disease when doing Skull damage."
  },
  {
    name: "Plaguebearer",
    code: "virulence",
    description: "Disease a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Poison Gaze",
    code: "aspectofplague",
    description: "Poison all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Poison Spores",
    code: "jinx",
    description: "Inflict Poison when I take Skull damage."
  },
  {
    name: "Poison Tide",
    code: "waterlink",
    description: "Steal 4 Life from the first enemy when matching Green Gems."
  },
  {
    name: "Portent",
    code: "divineaura",
    description: "All Centaurs gain 2 Magic when an enemy casts a spell."
  },
  {
    name: "Possession",
    code: "spiritfire",
    description: "25% chance to resurrect after death."
  },
  {
    name: "Potion of Armor",
    code: "immune",
    description: "Each Ally reduces damage from Skulls by 25%."
  },
  {
    name: "Potion of Blessing",
    code: "immune",
    description: "Bless each Ally at the start of battle."
  },
  {
    name: "Potion of Enchantment",
    code: "immune",
    description: "Enchant each Ally at the start of battle."
  },
  {
    name: "Potion of Explosion",
    code: "immune",
    description: "Each Ally explodes 1 Gem at the start of battle."
  },
  {
    name: "Potion of Rejuvenation",
    code: "immune",
    description: "Each Ally heals 3 Life at the start of each turn."
  },
  {
    name: "Potion of Shielding",
    code: "immune",
    description: "Barrier each Ally at the start of battle."
  },
  {
    name: "Precision",
    code: "humanslayer",
    description: "Gain 2 Magic if using a Missile."
  },
  {
    name: "Pride Prowess",
    code: "lionstrength",
    description:
      "All ally Raksha gain 1 Attack and Magic at the start of every turn."
  },
  {
    name: "Protector",
    code: "stoneskin",
    description: "Gain 3 Magic if using a Shield."
  },
  {
    name: "Provocation",
    code: "nastyteeth",
    description: "Enrage a random ally on 4 or 5 matches."
  },
  {
    name: "Purification",
    code: "blessed",
    description: "Cleanse myself on 4 or 5 Gem matches."
  },
  {
    name: "Pyromania",
    code: "pyromania",
    description: "Deal double Skull damage vs. Burning enemies."
  },
  {
    name: "Queen's Grace",
    code: "queensgrace",
    description: "All Daemons gain 2 Attack and Life at the start of each turn."
  },
  {
    name: "Quick Study",
    code: "grudge",
    description: "Gain 10% bonus XP from battle."
  },
  {
    name: "Radiant Aura",
    code: "divineshield",
    description: "All Divine start battle with 40% Mana."
  },
  {
    name: "Raging Bull",
    code: "goblord",
    description: "Gain 2 Attack, Armor and Life when matching Red Gems."
  },
  {
    name: "Rainbow Link",
    code: "spiritfire",
    description: "Gain bonus Mana from all Gem matches."
  },
  {
    name: "Raksha Bond",
    code: "rakshabond",
    description: "Allied Raksha gain 2 Life."
  },
  {
    name: "Raksha Shield",
    code: "rakshabond",
    description: "Allied Raksha gain 2 Armor."
  },
  {
    name: "Raksha Slayer",
    code: "rakshaslayer",
    description: "Deal double Skull damage vs. Raksha."
  },
  {
    name: "Rancor",
    code: "nastyteeth",
    description: "Gain 3 Attack when an enemy matches Skulls."
  },
  {
    name: "Razor Armor",
    code: "constructbond",
    description: "Add 20% of Armor to Skull Damage."
  },
  {
    name: "Razor Teeth",
    code: "nagaslayer",
    description: "Inflict Bleed when doing Skull damage."
  },
  {
    name: "Reaper",
    code: "undeadslayer",
    description: "Gain 2 Magic if using a Scythe."
  },
  {
    name: "Rebirth",
    code: "immortal",
    description: "50% chance to become a Baby Dragon with full mana on death."
  },
  {
    name: "Regeneration",
    code: "regeneration",
    description: "Recover 1 Life at the start of each turn."
  },
  {
    name: "Reinforced",
    code: "reinforced",
    description: "Recover 1 Armor at the start of each turn."
  },
  {
    name: "Repair",
    code: "reinforced",
    description: "Gain 1 Armor on 4 or 5 Gem matches."
  },
  { name: "Resilience", code: "magicbrand", description: "Gain 8 Life." },
  {
    name: "Resplendence",
    code: "stoneheart",
    description: "Gain 2 Magic if using Jewellery."
  },
  {
    name: "Revenge",
    code: "frenzy",
    description: "Inflict Hunter's Mark when I take Skull damage."
  },
  {
    name: "Revered",
    code: "blessed",
    description: "All allies gain 2 random Skill points."
  },
  {
    name: "Rising Shadows",
    code: "darkfall",
    description:
      "7% chance to assassinate the last enemy when another enemy dies."
  },
  {
    name: "Rock Solid",
    code: "stonelink",
    description: "Gain a Barrier when matching Brown Gems."
  },
  {
    name: "Rocky Death",
    code: "stonebrand",
    description: "Summon a Duststorm when an enemy dies."
  },
  {
    name: "Rogue Bond",
    code: "roguebond",
    description: "Allied Rogues gain 2 Life."
  },
  {
    name: "Rogue Shield",
    code: "roguebond",
    description: "Allied Rogues gain 2 Armor."
  },
  {
    name: "Rogue Slayer",
    code: "rogueslayer",
    description: "Deal double Skull damage vs. Rogues."
  },
  {
    name: "Root Trap",
    code: "snare",
    description: "Entangle the first enemy at the start of battle."
  },
  {
    name: "Royal Armory",
    code: "avenger",
    description: "All ally Knights gain 2 Armor."
  },
  {
    name: "Sacrifice",
    code: "sacrifice",
    description: "Gain 3 to all Skills when an enemy dies."
  },
  {
    name: "Savior",
    code: "impervious",
    description: "When an ally dies, Barrier another random ally."
  },
  {
    name: "Second Helping",
    code: "queensgrace",
    description: "All allied Goblins gain 5 Life on 4 or 5 Gem matches."
  },
  {
    name: "Seedling",
    code: "seedling",
    description: "Gain 8 Magic on Green gem matches."
  },
  {
    name: "Serendipity",
    code: "feyslayer",
    description: "Give a random ally a random status effect."
  },
  {
    name: "Serenity",
    code: "blessed",
    description: "Inflict Silence when enemies deal Skull damage to me."
  },
  {
    name: "Serpent's Fang",
    code: "aspectofdeath",
    description: "Deal 3 damage to a random enemy when an ally casts a spell."
  },
  {
    name: "Shadow Scales",
    code: "insulated",
    description: "All Naga Allies gain 1 Armor every turn."
  },
  {
    name: "Shadows’ Call",
    code: "stealthy",
    description: "20% chance to summon a Sister of Shadows when an enemy dies."
  },
  {
    name: "Shatter",
    code: "shatter",
    description: "Deal double Skull damage vs. Frozen enemies."
  },
  {
    name: "Shining Staff",
    code: "arcane",
    description: "Gain 2 Magic if using a Staff."
  },
  {
    name: "Shock",
    code: "airbrand",
    description: "Deal 2 damage to a random enemy on 4 or 5 matches."
  },
  {
    name: "Shrapnel",
    code: "molten",
    description: "Deal 1 damage to all enemies on 4 or 5 matches."
  },
  {
    name: "Siege",
    code: "siege",
    description: "Allies gain 2 Attack when invading in PVP."
  },
  {
    name: "Siegebreaker",
    code: "siege",
    description: "Deal 3x - 5x Skull damage vs. Towers, based on my ascension."
  },
  {
    name: "Silence!",
    code: "silence",
    description: "Silence enemies when doing Skull damage."
  },
  {
    name: "Siphon",
    code: "siphon",
    description: "Steal enemy mana when dealing Skull damage."
  },
  {
    name: "Skull Death",
    code: "undeadslayer",
    description: "Summon a Bonestorm when an enemy dies."
  },
  {
    name: "Sky Ancestry",
    code: "blessed",
    description: "Immune to Mana Drain, Silence, Faerie Fire, and Mana Burn."
  },
  { name: "Slippery", code: "slippery", description: "Immunity to Web." },
  {
    name: "Snap Freeze",
    code: "chill",
    description: "Freeze a random enemy at the start of battle."
  },
  {
    name: "Snare",
    code: "snare",
    description: "Inflict Web when doing Skull damage."
  },
  {
    name: "Sneak Attack",
    code: "sacrifice",
    description: "Deal 7 damage to the last enemy on 4 or 5 matches."
  },
  {
    name: "Snowstorm",
    code: "frozensoul",
    description: "Create an Icestorm at the start of every turn."
  },
  {
    name: "Soaring",
    code: "ward",
    description: "Allied Stryx gain 5 Life and Attack."
  },
  {
    name: "Song of Bones",
    code: "undeadbond",
    description: "Summon a Bonestorm at the start of Battle."
  },
  {
    name: "Song of Darkness",
    code: "inscribed",
    description: "Summon a Darkstorm at the start of Battle."
  },
  {
    name: "Song of Doom",
    code: "daemonslayer",
    description: "Summon a Doomstorm at the start of Battle."
  },
  {
    name: "Song of Fire",
    code: "firebrand",
    description: "Summon a Firestorm at the start of Battle."
  },
  {
    name: "Song of Ice",
    code: "magicheart",
    description: "Summon an Icestorm at the start of Battle."
  },
  {
    name: "Song of Light",
    code: "blessed",
    description: "Summon a Lightstorm at the start of Battle."
  },
  {
    name: "Song of Nature",
    code: "naturelink",
    description: "Summon a Leafstorm at the start of Battle."
  },
  {
    name: "Song of Stone",
    code: "stonelink",
    description: "Summon a Duststorm at the start of Battle."
  },
  {
    name: "Soul Caller",
    code: "airheart",
    description: "Gain 1 Soul every turn."
  },
  {
    name: "Soul Legion",
    code: "soullegion",
    description: "50% chance to Summon a Wight when an enemy dies."
  },
  {
    name: "Soul Ritual",
    code: "soullegion",
    description: "Gain 5 Magic when an enemy dies."
  },
  {
    name: "Sour Candy",
    code: "aspectofplague",
    description: "Faerie Fire a random enemy when matching Green Gems."
  },
  {
    name: "Spark",
    code: "mysticbond",
    description: "Gain Enchant when matching Red Gems."
  },
  {
    name: "Spawn of Hell",
    code: "daemonicpact",
    description: "50% chance to summon a Hellspawn when an enemy dies."
  },
  {
    name: "Spawn",
    code: "dragonslayer",
    description: "25% chance to summon a Baby Dragon on death."
  },
  {
    name: "Spell Armor",
    code: "reinforced",
    description: "Reduce damage from Spells by 25%."
  },
  {
    name: "Spell Block",
    code: "inscribed",
    description: "Reduce damage from Spells by 50%."
  },
  {
    name: "Spiked Armor",
    code: "spikearmor",
    description: "Add 25% of Armor to Skull damage."
  },
  {
    name: "Spiky",
    code: "spikearmor",
    description: "Deal 3 damage to all enemies when I match skulls."
  },
  {
    name: "Spiny",
    code: "airbrand",
    description: "Deal 1 damage to all enemies when I match skulls."
  },
  {
    name: "Spore Cloud",
    code: "miasma",
    description: "Disease a random Enemy when matching 4 or more Gems."
  },
  {
    name: "Stalker",
    code: "stalker",
    description: "Deal double Skull damage vs. Webbed enemies."
  },
  {
    name: "Stealthy",
    code: "stealthy",
    description:
      "Cannot be targeted by spells (unless there are no other targets)."
  },
  {
    name: "Stone Aura",
    code: "graniteskin",
    description: "All Brown Allies gain 5 to all Stats."
  },
  {
    name: "Stone Brand",
    code: "stonebrand",
    description: "Gain 1 Attack for each Brown ally."
  },
  {
    name: "Stone Circle",
    code: "stonespirit",
    description: "All Brown Allies gain 3 Armor."
  },
  {
    name: "Stone Heart",
    code: "stoneheart",
    description: "Gain 1 Life for each Brown ally."
  },
  {
    name: "Stone Link",
    code: "stonelink",
    description: "Gain bonus Brown Mana from Brown Gem matches."
  },
  {
    name: "Stone Loyalty",
    code: "divineshield",
    description: "All Dwarves start battle with 50% Mana."
  },
  {
    name: "Stone Mastery",
    code: "stonebrand",
    description: "Gain bonus Brown Mana from Brown Gem matches."
  },
  {
    name: "Stone Spirit",
    code: "stonespirit",
    description: "Gain 1 Magic for each Brown ally."
  },
  {
    name: "Stone Wall",
    code: "stonespirit",
    description: "All Brown allies gain 2 Armor."
  },
  {
    name: "Stoneskin",
    code: "stoneskin",
    description: "Reduce damage from Skulls by 50%."
  },
  {
    name: "Storm Aura",
    code: "airheart",
    description: "Create a duststorm at the start of a battle."
  },
  {
    name: "Storm Flock",
    code: "fierycloak",
    description:
      "35% chance to summon a Harpy Mage when matching 4 or more Gems."
  },
  {
    name: "Storm Shield",
    code: "divineshield",
    description: "Give a random Ally a Barrier on 4 or 5 Gem matches."
  },
  {
    name: "Storm Soul",
    code: "icycloak",
    description: "Conjure a random Storm when matching 4 or more Gems."
  },
  {
    name: "Stormy Hatred",
    code: "airbrand",
    description: "Deal double Skull damage vs. Yellow Enemies."
  },
  {
    name: "Stryx Bond",
    code: "stryxbond",
    description: "Allied Stryx gain 2 Life."
  },
  {
    name: "Stryx Commander",
    code: "flying",
    description: "All Stryx allies gain 1 Attack every turn."
  },
  {
    name: "Stryx Shield",
    code: "stryxbond",
    description: "Allied Stryx gain 2 Armor."
  },
  {
    name: "Stryx Slayer",
    code: "stryxslayer",
    description: "Deal double Skull damage vs. Stryx."
  },
  { name: "Sturdy", code: "sturdy", description: "Immune to Poison." },
  {
    name: "Succumb",
    code: "aspectofdeath",
    description:
      "Enemies lose 4 from a random Skill Point when an Ally casts a spell."
  },
  {
    name: "Sudden Doom",
    code: "elementalslayer",
    description: "Create a Doomstorm at the start of battle."
  },
  {
    name: "Summer Veil",
    code: "fierycloak",
    description: "Faerie Fire a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Sun Fire",
    code: "sunshine",
    description: "Faerie Fire a random enemy when matching Red Gems."
  },
  {
    name: "Sun Flare",
    code: "fierycloak",
    description: "50% chance to Burn a random enemy at start of my turn."
  },
  {
    name: "Sun's Glory",
    code: "sunshine",
    description: "Gain 2 Magic on Red Gem matches."
  },
  {
    name: "Sunshine",
    code: "sunshine",
    description: "Gain 8 Magic on Yellow gem matches."
  },
  {
    name: "Suppression",
    code: "suppression",
    description: "Enemies lose 1 Skill point on 4 or 5 Gem matches."
  },
  {
    name: "Swift Curse",
    code: "cursed",
    description: "Death Mark a random enemy at the start of battle."
  },
  { name: "Swift", code: "fast", description: "Start battles with 75% Mana." },
  {
    name: "Tactician",
    code: "magicspirit",
    description: "Gain 3 Magic at the start of a battle."
  },
  {
    name: "Tangle",
    code: "naturebrand",
    description: "Inflict Entangle when doing Skull damage."
  },
  {
    name: "Tauros Bond",
    code: "taurosbond",
    description: "Allied Tauros gain 2 Life."
  },
  {
    name: "Tauros Shield",
    code: "taurosbond",
    description: "Allied Tauros gain 2 Armor."
  },
  {
    name: "Tauros Slayer",
    code: "taurosslayer",
    description: "Deal double Skull damage vs. Tauros."
  },
  {
    name: "Technomancy",
    code: "technomancy",
    description: "Decrease a random Enemy's Magic by 2 on 4 or 5 Gem matches."
  },
  {
    name: "Temptation",
    code: "doom",
    description: "Charm a random enemy when an ally dies."
  },
  {
    name: "Tentacles",
    code: "thorns",
    description: "Deal 3 damage to all enemies on 4 or 5 matches."
  },
  { name: "Thick Head", code: "thickhead", description: "Immunity to Stun." },
  {
    name: "Thick Hide",
    code: "beastbond",
    description: "Reduce damage from Skulls by 20%."
  },
  {
    name: "Thieves’ Guild",
    code: "mechbond",
    description: "All Rogues gain 1 Magic on 4 or 5 of a kind."
  },
  {
    name: "Thorns",
    code: "thorns",
    description: "Reflect 50% of Skull damage"
  },
  {
    name: "Thunder Fist",
    code: "knockout",
    description: "All Yellow Allies gain 1 Magic."
  },
  {
    name: "Tidal King",
    code: "waterspirit",
    description: "Submerge myself at the start of every turn."
  },
  {
    name: "Titanic Surge",
    code: "big",
    description: "All Giant Allies gain 1 Life and Magic."
  },
  {
    name: "Tough Scales",
    code: "dragonbond",
    description: "Reduce damage from Skulls by 30%."
  },
  {
    name: "Toxic Hatred",
    code: "immune",
    description: "Deal double Skull damage vs. Green Enemies."
  },
  {
    name: "Toxic",
    code: "venomous",
    description: "Deal double Skull damage vs. Poisoned Enemies."
  },
  {
    name: "Transcend",
    code: "inscribed",
    description: "Exchange 2 Life for 2 Magic on 4 or 5 Gem matches."
  },
  {
    name: "Tree of Knowledge",
    code: "natureheart",
    description: "Gain Enchant when matching Green Gems."
  },
  {
    name: "Troll Regeneration",
    code: "regeneration",
    description: "Recover 3 Life at the start of each turn."
  },
  {
    name: "True Shot",
    code: "trueshot",
    description: "75% chance to ignore Armor with Skull damage."
  },
  {
    name: "Tsunami",
    code: "waterspirit",
    description: "Submerge all Allies when matching 4 or more Gems."
  },
  {
    name: "Unbreakable",
    code: "immense",
    description: "Reduce damage from Skulls by 80%."
  },
  {
    name: "Undead Bond",
    code: "undeadbond",
    description: "Allied Undead gain 2 Life."
  },
  {
    name: "Undead Shield",
    code: "undeadbond",
    description: "Allied Undead gain 2 Armor."
  },
  {
    name: "Undead Slayer",
    code: "undeadslayer",
    description: "Deal double Skull damage vs. Undeads. "
  },
  {
    name: "Undying",
    code: "undeadslayer",
    description: "Immune to Poison, Disease, and Death Mark."
  },
  {
    name: "Unholy Blessing",
    code: "undeadbond",
    description: "All Undead gain 2 Armor and Magic when an ally dies."
  },
  {
    name: "Unstable Possession",
    code: "ensoul",
    description: "Explode 2 random Gems on 4 or 5 Gem matches."
  },
  {
    name: "Up in Flames",
    code: "firebrand",
    description: "Burn a random enemy when an ally dies."
  },
  {
    name: "Urska Bond",
    code: "beastbond",
    description: "Allied Urska gain 2 Life."
  },
  {
    name: "Urska Major",
    code: "beastslayer",
    description: "All Urska Allies gain 1 Attack every turn."
  },
  {
    name: "Urska Shield",
    code: "beastslayer",
    description: "Allied Urska gain 2 Armor."
  },
  {
    name: "Urska Slayer",
    code: "beastslayer",
    description: "Deal double Skull damage vs. Urska."
  },
  {
    name: "Valuable",
    code: "stoneheart",
    description: "Gain 25 Gold when I die."
  },
  {
    name: "Vanguard",
    code: "insulated",
    description: "Gain Barrier at the start of battle."
  },
  {
    name: "Vengeance",
    code: "daemonslayer",
    description: "Gain 3 Attack when an enemy dies."
  },
  {
    name: "Venomous",
    code: "venomous",
    description: "Poison enemies when doing Skull damage."
  },
  {
    name: "Victory Lap",
    code: "gardswrath",
    description: "Gain 8 Mana when an Enemy dies."
  },
  {
    name: "Virtue of Courage",
    code: "lionstrength",
    description: "All allies gain 2 Attack and Life on Skull gem matches."
  },
  {
    name: "Virtue of Honor",
    code: "divineshield",
    description: "Gain 10 to all Skills when playing a PVP battle."
  },
  {
    name: "Virtue of Humility",
    code: "compassion",
    description: "All allies gain 2 Armor and Magic when I take damage to Life."
  },
  {
    name: "Virtue of Justice",
    code: "hacknslash",
    description: "All allies gain 3 Attack and Armor  when an enemy dies."
  },
  {
    name: "Virtue of Loyalty",
    code: "fullplate",
    description: "All allies gain 3 Armor and Life when an ally casts a spell."
  },
  {
    name: "Virtue of Sacrifice",
    code: "ensoul",
    description: "All allies gain 2 Attack and Magic when an ally dies."
  },
  {
    name: "Virulence",
    code: "virulence",
    description: "Deal double Skull damage vs. Diseased enemies."
  },
  {
    name: "Voracious",
    code: "hunger",
    description: "5% chance to Devour on Skull damage."
  },
  {
    name: "Wall of Vines",
    code: "naturebrand",
    description: "All Green allies gain 5 Armor."
  },
  { name: "Ward", code: "ward", description: "All allies gain 5 Armor." },
  { name: "Warded", code: "warded", description: "Immunity to Death Mark." },
  {
    name: "Wargare Bond",
    code: "wargarebond",
    description: "Allied Wargare gain 2 Life."
  },
  {
    name: "Wargare Shield",
    code: "wargarebond",
    description: "Allied Wargare gain 2 Armor."
  },
  {
    name: "Wargare Slayer",
    code: "wargareslayer",
    description: "Deal double Skull damage vs. Wargare."
  },
  {
    name: "Water Brand",
    code: "waterbrand",
    description: "Gain 1 Attack for each Blue ally."
  },
  {
    name: "Water Heart",
    code: "waterheart",
    description: "Gain 1 Life for each Blue ally."
  },
  {
    name: "Water Link",
    code: "waterlink",
    description: "Gain bonus Blue Mana from Blue Gem matches."
  },
  {
    name: "Water Mastery",
    code: "waterspirit",
    description: "Gain bonus Blue Mana from Blue Gem matches."
  },
  {
    name: "Water Spirit",
    code: "waterspirit",
    description: "Gain 1 Magic for each Blue ally."
  },
  {
    name: "Watery Binding",
    code: "waterbrand",
    description: "All Blue Allies gain 4 Life."
  },
  {
    name: "Webweaver",
    code: "cocoon",
    description: "Web a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Well-Read",
    code: "empowered",
    description: "Gain 3 Magic if using a Tome."
  },
  {
    name: "Wild Frenzy",
    code: "wildfolkbond",
    description: "All Wildfolk allies gain 2 Attack at the start of every turn."
  },
  {
    name: "Wild Growth",
    code: "beastbond",
    description:
      "All Beast allies gain 2 Attack and Life on 4 or 5 Gem matches."
  },
  {
    name: "Wild Mana",
    code: "dragonvines",
    description: "All Wildfolk start battle with 50% Mana."
  },
  {
    name: "Wild Vines",
    code: "thorns",
    description: "Entangle a random enemy when matching Green."
  },
  {
    name: "Wildfolk Bond",
    code: "wildfolkbond",
    description: "Allied Wildfolk gain 2 Life."
  },
  {
    name: "Wildfolk Shield",
    code: "wildfolkbond",
    description: "Allied Wildfolk gain 2 Armor."
  },
  {
    name: "Wildfolk Slayer",
    code: "wildfolkslayer",
    description: "Deal double Skull damage vs. Wildfolk."
  },
  {
    name: "Wind Aura",
    code: "winterveil",
    description: "All Yellow Allies gain 5 to all Stats."
  },
  { name: "Wind Shield", code: "manashield", description: "Gain 8 Armor." },
  {
    name: "Wind Speed",
    code: "airheart",
    description: "All Yellow Allies start battle with 10% Mana."
  },
  {
    name: "Winter Veil",
    code: "winterveil",
    description: "Freeze a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Wood Ancestry",
    code: "natureheart",
    description: "Immune to Mana Drain, Silence, Faerie Fire, and Entangle."
  },
  {
    name: "Wrath of Anu",
    code: "fierycloak",
    description: "50% chance to Stun a random enemy at the start of my turn."
  },
  {
    name: "Zorn's Fury",
    code: "doom",
    description: "Gain 4 Mana when I take damage."
  }
];
