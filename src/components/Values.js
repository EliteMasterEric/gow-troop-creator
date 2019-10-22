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
    desc: "Gain 3 Magic when an enemy casts a spell."
  },
  {
    name: "Accursed",
    code: "cursed",
    desc: "All enemies lose 2 random Skill points."
  },
  {
    name: "Adagio",
    code: "silence",
    desc: "Cleanse all allies when matching Yellow Gems."
  },
  {
    name: "Aegis",
    code: "stoneskin",
    desc: "Reduce damage from Skulls by 60%."
  },
  {
    name: "Aflame",
    code: "aflame",
    desc: "Burn enemies when doing Skull damage."
  },
  {
    name: "Agile",
    code: "agile",
    desc: "20% chance to dodge Skull damage."
  },
  {
    name: "Air Brand",
    code: "airbrand",
    desc: "Gain 1 Attack for each Yellow ally."
  },
  {
    name: "Air Heart",
    code: "airheart",
    desc: "Gain 1 Life for each Yellow ally."
  },
  {
    name: "Air Link",
    code: "airlink",
    desc: "Gain bonus Yellow Mana from Yellow Gem matches."
  },
  {
    name: "Air Spirit",
    code: "airspirit",
    desc: "Gain 1 Magic for each Yellow ally."
  },
  { name: "Alert", code: "alert", description: "Immunity to Silence." },
  {
    name: "Ancient Blessing",
    code: "divineshield",
    desc: "Bless a random Ally on 4 or 5 Gem matches."
  },
  {
    name: "Ancient Mysteries",
    code: "divineaura",
    desc:
      "25% chance to grant a random Positive Status Effect to a random Ally when my turn begins."
  },
  {
    name: "Angry Bear",
    code: "nastyteeth",
    desc: "Gain Enraged when matching Brown Gems."
  },
  {
    name: "Anti-Magic Sphere",
    code: "jinx",
    desc: "Reduce damage from Spells by 20%."
  },
  {
    name: "Anti-Magic",
    code: "magiclink",
    desc: "Deal double Skull damage vs. Enchanted enemies."
  },
  {
    name: "Antiquity",
    code: "feyslayer",
    desc: "Gain 4 Magic when using Artifacts."
  },
  {
    name: "Apparition",
    code: "aspectofwar",
    desc: "Gain 5 Attack when matching Skulls."
  },
  {
    name: "Aquatic Glory",
    code: "winterveil",
    desc: "All Merfolk allies gain 2 Magic when an enemy dies."
  },
  {
    name: "Aquatic",
    code: "waterspirit",
    desc: "Submerge myself when I receive damage."
  },
  {
    name: "Arcane Surge",
    code: "magiclink",
    desc: "Gain bonus Purple Mana from Purple Gem matches."
  },
  {
    name: "Arcane",
    code: "arcane",
    desc: "Gain 1 Magic when an ally casts a spell."
  },
  {
    name: "Armor of Light",
    code: "armored",
    desc: "All troops gain 4 Armor."
  },
  {
    name: "Armor Piercing",
    code: "armorpiercing",
    desc: "50% chance to ignore Armor with Skull damage."
  },
  {
    name: "Armor Plating",
    code: "clockwork",
    desc: "All Mech Allies gain 2 Armor per turn."
  },
  {
    name: "Armored",
    code: "armored",
    desc: "Reduce damage from Skulls by 25%."
  },
  {
    name: "Aspect of Death",
    code: "aspectofdeath",
    desc: "Steal 2 Life from the first enemy at the start of each turn."
  },
  {
    name: "Aspect of Famine",
    code: "aspectoffamine",
    desc: "First enemy loses 3 Skill points at the start of each turn."
  },
  {
    name: "Aspect of Plague",
    code: "aspectofplague",
    desc: "Enemies lose 3 Skill points on 4 or 5 Gem matches."
  },
  {
    name: "Aspect of War",
    code: "aspectofwar",
    desc: "Gain 3 Attack at the start of each turn."
  },
  {
    name: "Assassinate",
    code: "assassinate",
    desc: "10% Chance to assassinate the last enemy when I deal Skull damage."
  },
  {
    name: "Aura of Power",
    code: "divineaura",
    desc: "All Mystics gain 1 Magic on 4 or 5 Gem matches."
  },
  {
    name: "Avenger",
    code: "avenger",
    desc: "Gain 3 Attack when an ally dies."
  },
  {
    name: "Axes of Doom",
    code: "dwarfslayer",
    desc: "Gain 3 Magic if using an Axe."
  },
  {
    name: "Backup",
    code: "humanbond",
    desc: "35% chance to summon a Bandit when an ally dies."
  },
  {
    name: "Ballistics",
    code: "immense",
    desc: "Gain 2 to a random Skill on 4 or 5 Gem matches."
  },
  {
    name: "Banishment",
    code: "manashield",
    desc: "Dispel all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Bardic Inspiration",
    code: "spikearmor",
    desc: "All Yellow Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Barkskin",
    code: "natureheart",
    desc: "Reduce damage from Skulls by 33%."
  },
  {
    name: "Beast Bond",
    code: "beastbond",
    desc: "Allied Beasts gain 2 Life."
  },
  {
    name: "Beast Shield",
    code: "beastbond",
    desc: "Allied Beasts gain 2 Armor."
  },
  {
    name: "Beast Slayer",
    code: "beastslayer",
    desc: "Deal double Skull damage vs. Beasts."
  },
  {
    name: "Beast Spirit",
    code: "centaurslayer",
    desc: "Gain 1 Magic for each Beast ally."
  },
  {
    name: "Big Teeth",
    code: "nagaslayer",
    desc: "Gain 1 Attack when allies gain an Extra Turn."
  },
  {
    name: "Big",
    code: "big",
    desc: "Gain 1 Life on 4 or 5 Gem matches."
  },
  {
    name: "Black Hunger",
    code: "hunger",
    desc: "Steal 2 Life from the first enemy when I match Purple Gems."
  },
  {
    name: "Blessing of Anu",
    code: "divineshield",
    desc: "All Blue Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Blessing of Gaard",
    code: "doom",
    desc: "All Red Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Blood and Glory",
    code: "reinforced",
    desc: "Gain 1 Glory in PvP Battles."
  },
  {
    name: "Bloodlust",
    code: "frenzy",
    desc: "Become Enraged when enemy dies."
  },
  {
    name: "Bloodsucking",
    code: "bloodsucking",
    desc: "Deal double Skull damage to wounded enemies."
  },
  {
    name: "Bloodthirsty",
    code: "bloodsucking",
    desc: "Become enraged on 4 or 5 Gem matches."
  },
  {
    name: "Bloody Boughs",
    code: "dragonvines",
    desc: "Entangle and inflict Bleed to a random Enemy when matching 4 or more Gems."
  },
  {
    name: "Boo!",
    code: "soullegion",
    desc: "Gain 8 Magic on Purple gem matches."
  },
  {
    name: "Bountyhunter",
    code: "merchant",
    desc: "Gain 2x - 6x to Bounty Score, based on my ascension."
  },
  {
    name: "Bright Death",
    code: "airbrand",
    desc: "Summon a Lightstorm when an enemy dies."
  },
  {
    name: "Brilliant Aura",
    code: "blessed",
    desc: "All allies gain 2 Life on 4 or 5 Gem matches."
  },
  {
    name: "Bull General",
    code: "taurosbond",
    desc: "All Tauros allies gain 1 Attack every turn."
  },
  {
    name: "Bullish Vigor",
    code: "orclord",
    desc: "All Allied Tauros start battles with 50% Mana."
  },
  {
    name: "Bullseye",
    code: "bullseye",
    desc: "15% chance for Skull damage to be lethal."
  },
  {
    name: "Buried Hatred",
    code: "stonebrand",
    desc: "Deal double Skull damage vs. Brown Enemies."
  },
  {
    name: "Burning Hatred",
    code: "firebrand",
    desc: "Deal double Skull damage vs. Red Enemies."
  },
  {
    name: "Call Bones",
    code: "undeadbond",
    desc: "Summon a Bonestorm when an ally summons a troop."
  },
  {
    name: "Call Doom",
    code: "daemonslayer",
    desc: "Summon a Doomstorm when an ally summons a troop."
  },
  {
    name: "Call Fire",
    code: "firespirit",
    desc: "Summon a Firestorm when an ally summons a troop."
  },
  {
    name: "Call Ice",
    code: "waterbrand",
    desc: "Summon an Icestorm when an ally summons a troop."
  },
  {
    name: "Call Nature",
    code: "natureheart",
    desc: "Summon a Leafstorm when an ally summons a troop."
  },
  {
    name: "Call Stone",
    code: "stonespirit",
    desc: "Summon a Duststorm when an ally summons a troop."
  },
  {
    name: "Cataclysm",
    code: "molten",
    desc: "Explode 2 random Gems when I deal skull damage."
  },
  {
    name: "Celestial Currents",
    code: "blessed",
    desc: "All Centaur allies gain 1 Magic."
  },
  {
    name: "Celestial Sage",
    code: "divineshield",
    desc: "Give all Allies 1 Magic on 4 or 5 matches."
  },
  {
    name: "Celestial Shield",
    code: "divineshield",
    desc: "Gain a Barrier on 4 or 5 Gem matches."
  },
  {
    name: "Centaur Bond",
    code: "centaurbond",
    desc: "Allied Centaurs gain 2 Life."
  },
  {
    name: "Centaur Shield",
    code: "centaurbond",
    desc: "Allied Centaurs gain 2 Armor."
  },
  {
    name: "Centaur Slayer",
    code: "centaurslayer",
    desc: "Deal double Skull damage vs. Centaurs."
  },
  {
    name: "Chaos Storm",
    code: "airspirit",
    desc: "Summon a random storm on 4 or 5 Gem matches."
  },
  {
    name: "Chaos Wave",
    code: "inscribed",
    desc: "All enemies lose 1 point on a random skill when I match Skulls."
  },
  {
    name: "Child of Sky",
    code: "divinebond",
    desc: "25% chance to summon a Heronath when an ally casts a spell."
  },
  {
    name: "Chill of Death",
    code: "chilltouch",
    desc: "When an enemy dies, Freeze another random enemy."
  },
  {
    name: "Chill Touch",
    code: "chilltouch",
    desc: "Inflict Frozen when doing Skull damage."
  },
  {
    name: "Chill",
    code: "chill",
    desc: "Gain 8 Magic on Blue gem matches."
  },
  {
    name: "Chilling Aura",
    code: "icycloak",
    desc: "Steal 2 Attack from the first enemy on 4 or 5 matches."
  },
  {
    name: "Cleanse",
    code: "divineshield",
    desc: "Cleanse all allies on 4 or 5 Gem matches."
  },
  {
    name: "Clobber",
    code: "clobber",
    desc: "Deal double Skull damage vs. Stunned enemies."
  },
  {
    name: "Clockwork",
    code: "clockwork",
    desc: "All Mechs start battle with 50% Mana."
  },
  {
    name: "Commander",
    code: "kingswill",
    desc: "Gain 2 to all Skills if in first position."
  },
  {
    name: "Compassion",
    code: "compassion",
    desc: "Gain 8 Magic on Red gem matches."
  },
  {
    name: "Conflagration",
    code: "molten",
    desc: "Burn all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Construct Bond",
    code: "constructbond",
    desc: "Allied Constructs gain 2 Life."
  },
  {
    name: "Construct Shield",
    code: "constructbond",
    desc: "Allied Constructs gain 2 Armor."
  },
  {
    name: "Construct Slayer",
    code: "constructslayer",
    desc: "Deal double Skull damage vs. Constructs."
  },
  {
    name: "Contagion",
    code: "siphon",
    desc: "Inflict Disease on a random Enemy on Green Gem matches."
  },
  {
    name: "Corruption",
    code: "miasma",
    desc: "Steal 3 Life from the first enemy when matching Red Gems."
  },
  {
    name: "Counterattack",
    code: "defender",
    desc: "Gain 2 attack when I take damage."
  },
  {
    name: "Crashing Wave",
    code: "waterspirit",
    desc: "Explode a Blue Gem when matching 4 or more Gems."
  },
  {
    name: "Creeping Doom",
    code: "ensoul",
    desc: "75% chance to summon a Webspinner when an enemy dies."
  },
  {
    name: "Crystallize",
    code: "graniteskin",
    desc: "Gain Enchant when matching Purple Gems."
  },
  {
    name: "Cunning",
    code: "cunning",
    desc: "Immunity to Hunter's Mark."
  },
  {
    name: "Curse of Madness",
    code: "ward",
    desc: "Curse a random Enemy when matching Brown."
  },
  {
    name: "Cursed Touch",
    code: "cursed",
    desc: "Inflict Curse when dealing Skull damage."
  },
  {
    name: "Daemon Bond",
    code: "daemonbond",
    desc: "Allied Daemons gain 2 Life."
  },
  {
    name: "Daemon Shield",
    code: "daemonbond",
    desc: "Allied Daemons gain 2 Armor."
  },
  {
    name: "Daemon Slayer",
    code: "daemonslayer",
    desc: "Deal double Skull damage vs. Daemons. "
  },
  {
    name: "Daemonic Pact",
    code: "daemonicpact",
    desc: "25% chance to summon an Ancient Horror on death."
  },
  {
    name: "Daemonic Rage",
    code: "daemonslayer",
    desc: "All Daemons gain 1 Attack."
  },
  {
    name: "Dark Ancestry",
    code: "cursed",
    desc: "Immune to Mana Drain, Silence, Faerie Fire, and Web."
  },
  {
    name: "Dark Channel",
    code: "darkchannel",
    desc: "50% chance to gain 1 Magic every turn."
  },
  {
    name: "Dark Covenant",
    code: "daemonicpact",
    desc: "25% chance to summon Envy on death."
  },
  {
    name: "Dark Death",
    code: "magicbrand",
    desc: "Summon a Darkstorm when an enemy dies."
  },
  {
    name: "Dark Fury",
    code: "aspectofdeath",
    desc: "Gain 8 Attack and Magic when I take damage."
  },
  {
    name: "Dark Hatred",
    code: "magicbrand",
    desc: "Deal double Skull damage vs. Purple Enemies."
  },
  {
    name: "Dark Hunger",
    code: "centaurslayer",
    desc: "Steal 1 Life from the first enemy when matching Purple Gems."
  },
  {
    name: "Dark Venom",
    code: "venomous",
    desc: "Poison a random Enemy when matching purple Gems."
  },
  {
    name: "Darkfall",
    code: "darkfall",
    desc: "Gain 1 Attack when matching Purple Gems."
  },
  {
    name: "Darkness",
    code: "darkfall",
    desc: "Decrease all enemies' Attack by 4 on 4 or 5 Gem matches."
  },
  {
    name: "Dawn’s Aura",
    code: "sunshine",
    desc: "Create a lightstorm at the start of a battle."
  },
  {
    name: "Deadly Flock",
    code: "airbrand",
    desc: "25% chance to summon a Bladewing when an Enemy dies."
  },
  {
    name: "Deadly Waters",
    code: "miasma",
    desc: "Create a Bonestorm on 4 or 5 Gem matches."
  },
  {
    name: "Death Below",
    code: "hunger",
    desc: "8% Chance to kill the last enemy on 4 or 5 Gem matches."
  },
  {
    name: "Death Curse",
    code: "aspectofdeath",
    desc: "Death Mark all enemies when I die."
  },
  {
    name: "Death Ray",
    code: "trueshot",
    desc: "Death Mark the first enemy when I take damage to Life."
  },
  {
    name: "Death Touch",
    code: "deathtouch",
    desc: "Inflict Death Mark when doing Skull damage."
  },
  {
    name: "Deep Magic",
    code: "magicbrand",
    desc: "Gain 5 Magic when attacking Delves."
  },
  {
    name: "Deep Shield",
    code: "reinforced",
    desc: "Gain 9 Armor when attacking Delves."
  },
  {
    name: "Deep Strength",
    code: "avenger",
    desc: "Gain 7 Attack when attacking Delves."
  },
  {
    name: "Deep Vitality",
    code: "regeneration",
    desc: "Gain 9 Life when attacking Delves."
  },
  {
    name: "Deep Water",
    code: "bloodsucking",
    desc: "Submerge myself on 4 or 5 Gem matches."
  },
  {
    name: "Deep Wounds",
    code: "assassinate",
    desc: "Inflict Bleed on a random enemy on Red Gem matches."
  },
  {
    name: "Defender",
    code: "defender",
    desc: "Allies gain 3 Armor when defending in PVP."
  },
  {
    name: "Delirium",
    code: "indigestible",
    desc: "Gain 2 Magic and Attack when I take damage to Life."
  },
  {
    name: "Deluge",
    code: "waterlink",
    desc: "Submerge a random ally on 4 or 5 Gem matches."
  },
  {
    name: "Depth Charge",
    code: "waterspirit",
    desc: "Deal double Skull damage vs. Submerged enemies."
  },
  {
    name: "Desert King",
    code: "kingswill",
    desc: "All Brown Allies gain 1 to all Stats at the start of each turn."
  },
  {
    name: "Destiny of Darkness",
    code: "darkfall",
    desc: "2% chance to Deathmark an enemy when matching Purple Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Flame",
    code: "fierycloak",
    desc: "2% chance to Deathmark an enemy when matching Red Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Ice",
    code: "frozensoul",
    desc: "2% chance to Deathmark an enemy when matching Blue Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Light",
    code: "sunshine",
    desc: "2% chance to Deathmark an enemy when matching Yellow Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Nature",
    code: "seedling",
    desc: "2% chance to Deathmark an enemy when matching Green Gems, boosted by my ascensions."
  },
  {
    name: "Destiny of Stone",
    code: "graniteskin",
    desc: "2% chance to Deathmark an enemy when matching Brown Gems, boosted by my ascensions."
  },
  {
    name: "Dexterous",
    code: "spikearmor",
    desc: "40% chance to dodge Skull damage."
  },
  {
    name: "Dissonance",
    code: "silence",
    desc: "Silence a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Divine Aura",
    code: "divineaura",
    desc: "All allies heal 2 points per turn."
  },
  {
    name: "Divine Bond",
    code: "divinebond",
    desc: "Allied Divines gain 2 Life."
  },
  {
    name: "Divine Right",
    code: "divineshield",
    desc: "Gain 4 Armor when an ally casts a spell."
  },
  {
    name: "Divine Shield",
    code: "divinebond",
    desc: "Allied Divines gain 2 Armor."
  },
  {
    name: "Divine Slayer",
    code: "divineslayer",
    desc: "Deal double Skull damage vs. Divine."
  },
  {
    name: "Divinity",
    code: "divineaura",
    desc: "All Divine Allies gain 2 Life every turn."
  },
  {
    name: "Dodge",
    code: "agile",
    desc: "30% chance to dodge Skull damage."
  },
  {
    name: "Doom Aura",
    code: "aspectofdeath",
    desc: "Create a Doomstorm on 4 or 5 Gem matches."
  },
  {
    name: "Doom",
    code: "doom",
    desc: "Deal double Skull damage vs. Death Marked enemies."
  },
  {
    name: "Dragon Bond",
    code: "dragonbond",
    desc: "Allied Dragons gain 2 Life."
  },
  {
    name: "Dragon Boon",
    code: "dragonbond",
    desc: "25% chance to summon a Dragonette on death."
  },
  {
    name: "Dragon Shield",
    code: "dragonbond",
    desc: "Allied Dragons gain 2 Armor."
  },
  {
    name: "Dragon Slayer",
    code: "dragonslayer",
    desc: "Deal double Skull damage vs. Dragons."
  },
  {
    name: "Dragon Vines",
    code: "dragonvines",
    desc: "Entangle the first enemy on 4 or 5 Gem matches."
  },
  {
    name: "Dragon's Blessing",
    code: "divineaura",
    desc: "Cause a random positive status effect on a random Ally on 4 or 5 Gem matches."
  },
  {
    name: "Dragon's Grace",
    code: "manyheads",
    desc: "All ally Dragons gain 1 Life and Magic on 4 or 5 Gem matches."
  },
  {
    name: "Drowned Crew",
    code: "undeadslayer",
    desc: "All Elementals start battle with 50% Mana."
  },
  {
    name: "Dusk’s Aura",
    code: "darkchannel",
    desc: "Create a darkstorm at the start of a battle."
  },
  {
    name: "Dwarf Bond",
    code: "dwarfbond",
    desc: "Allied Dwarves gain 2 Life."
  },
  {
    name: "Dwarf Shield",
    code: "dwarfbond",
    desc: "Allied Dwarves gain 2 Armor."
  },
  {
    name: "Dwarf Slayer",
    code: "dwarfslayer",
    desc: "Deal double Skull damage vs. Dwarves."
  },
  {
    name: "Dwarven Armor",
    code: "giantbond",
    desc: "Gain 4 Armor for each Dwarven ally."
  },
  {
    name: "Dwarven Doom",
    code: "soullegion",
    desc: "Summon a Doomstorm when an enemy dies."
  },
  {
    name: "Dwarven Mettle",
    code: "giantslayer",
    desc: "All Dwarven allies gain 2 Life and Attack on 4 or 5 Gem matches."
  },
  {
    name: "Eagle Eye",
    code: "alert",
    desc: "Place Hunter's Mark on enemies when doing Skull damage."
  },
  {
    name: "Earthquake",
    code: "shatter",
    desc: "Stun all Enemies on 4 or 5 Gem matches."
  },
  {
    name: "Electrified Plating",
    code: "technomancy",
    desc: "Add 50% of Armor to Skull damage."
  },
  {
    name: "Elemental Bond",
    code: "elementalbond",
    desc: "Allied Elementals gain 2 Life."
  },
  {
    name: "Elemental Shield",
    code: "elementalbond",
    desc: "Allied Elementals gain 2 Armor."
  },
  {
    name: "Elemental Slayer",
    code: "elementalslayer",
    desc: "Deal double Skull damage vs. Elementals."
  },
  {
    name: "Elf Bond",
    code: "elfbond",
    desc: "Allied Elves gain 2 Life."
  },
  {
    name: "Elf Shield",
    code: "elfbond",
    desc: "Allied Elves gain 2 Armor."
  },
  {
    name: "Elf Slayer",
    code: "elfslayer",
    desc: "Deal double Skull damage vs. Elves."
  },
  {
    name: "Elven Kin",
    code: "dragonvines",
    desc: "All Elves start battle with 50% Mana."
  },
  {
    name: "Elven Sentries",
    code: "elfbond",
    desc: "All Elves gain 1 Magic and Attack at the start of a battle."
  },
  {
    name: "Emperor's Blessing",
    code: "kingswill",
    desc: "Enchant a random ally on 4 or 5 Gem matches."
  },
  {
    name: "Empowered",
    code: "empowered",
    desc: "Start battles with full Mana."
  },
  {
    name: "Energize",
    code: "technomancy",
    desc: "Gain 3 Magic on Yellow gem matches."
  },
  {
    name: "Ensoul",
    code: "ensoul",
    desc: "Gain an extra Soul on 4 or 5 Gem matches."
  },
  {
    name: "Entrapment",
    code: "fireproof",
    desc: "Deal double Skull damage vs. Entangled enemies."
  },
  {
    name: "Eternal Summer",
    code: "feybond",
    desc: "All Fey Allies gain 2 Life every turn."
  },
  { name: "Exemplar", code: "avenger", description: "Gain 5 Attack in PvP." },
  {
    name: "Experiment",
    code: "siphon",
    desc: "Inflict a random status effect  on 4 or 5 Gem matches."
  },
  {
    name: "Extreme Greed",
    code: "greedy",
    desc: "Gain 4 bonus Gold when matching 4 or more Gems."
  },
  {
    name: "Fall",
    code: "fall",
    desc: "Gain 8 Magic on Brown gem matches."
  },
  {
    name: "Familiar",
    code: "goblord",
    desc: "50% chance to summon a Giant Spider when I take damage."
  },
  {
    name: "Fast Healing",
    code: "regeneration",
    desc: "Recover 2 Life every turn."
  },
  { name: "Fast", code: "fast", description: "Start battles with 50% Mana." },
  {
    name: "Feline Fury",
    code: "beastbond",
    desc: "All Raksha gain 1 Attack and Life."
  },
  { name: "Ferocity", code: "deathtouch", description: "Gain 4 Attack." },
  { name: "Fey Bond", code: "feybond", description: "Allied Fey gain 2 Life." },
  {
    name: "Fey Link",
    code: "spiritfire",
    desc: "50% chance to Faerie Fire a random Enemy at the start of my Turn."
  },
  {
    name: "Fey Shield",
    code: "feybond",
    desc: "Allied Fey gain 2 Armor."
  },
  {
    name: "Fey Slayer",
    code: "feyslayer",
    desc: "Deal double Skull damage vs. Fey."
  },
  {
    name: "Fey Touch",
    code: "feybond",
    desc: "Faerie Fire enemies when doing Skull damage."
  },
  {
    name: "Fey Vengeance",
    code: "aflame",
    desc: "Faerie Fire a random enemy when an Ally dies."
  },
  {
    name: "Feyblade",
    code: "feyslayer",
    desc: "Deal double Skull damage vs. enemies with Faerie Fire."
  },
  {
    name: "Fiery Cloak",
    code: "fierycloak",
    desc: "Burn a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Fiery Death",
    code: "firebrand",
    desc: "Summon a Firestorm when an enemy dies."
  },
  {
    name: "Fire Aura",
    code: "fierycloak",
    desc: "All Red Allies gain 5 to all Stats."
  },
  {
    name: "Fire Brand",
    code: "firebrand",
    desc: "Gain 1 Attack for each Red ally."
  },
  {
    name: "Fire Heart",
    code: "fireheart",
    desc: "Gain 1 Life for each Red ally."
  },
  {
    name: "Fire Link",
    code: "firelink",
    desc: "Gain bonus Red Mana from Red Gem matches."
  },
  {
    name: "Fire Spirit",
    code: "firespirit",
    desc: "Gain 1 Magic for each Red ally."
  },
  {
    name: "Fireblade",
    code: "pyromania",
    desc: "Deal triple Skull damage to burning enemies."
  },
  {
    name: "Firebringer",
    code: "firelink",
    desc: "Gain bonus Red Mana from Red Gem matches."
  },
  {
    name: "Fireproof",
    code: "fireproof",
    desc: "Immunity to Burning and Faerie Fire."
  },
  {
    name: "Firestarter",
    code: "aflame",
    desc: "Create a firestorm at the start of a battle."
  },
  {
    name: "First Wargare",
    code: "nastyteeth",
    desc: "Give 2 Attack and Magic to Allied Wargare when matching 4 or more Gems."
  },
  {
    name: "Focus",
    code: "knightslayer",
    desc: "Deal double Skull damage vs. enemies with Hunter's Mark."
  },
  {
    name: "For The Herd",
    code: "taurosbond",
    desc: "Give all Tauros 1 Attack, Armor and Life on 4 or 5 Gem matches."
  },
  {
    name: "For the People",
    code: "queensgrace",
    desc: "All Humans gain 2 Armor at the start of each turn."
  },
  {
    name: "Fortitude",
    code: "reinforced",
    desc: "Immune to Stun, Poison, Disease, Death Mark and Devour."
  },
  {
    name: "Frenzy",
    code: "frenzy",
    desc: "Gain 1 Attack when taking damage."
  },
  {
    name: "From Ashes",
    code: "fireheart",
    desc: "Summon a Firestorm when an ally dies."
  },
  {
    name: "From Bones",
    code: "undeadbond",
    desc: "Summon a Bonestorm when an ally dies."
  },
  {
    name: "From Dark",
    code: "magicheart",
    desc: "Summon a Darkstorm when an ally dies."
  },
  {
    name: "From Doom",
    code: "deathtouch",
    desc: "Summon a Doomstorm when an ally dies."
  },
  {
    name: "From Ice",
    code: "waterheart",
    desc: "Summon an Icestorm when an ally dies."
  },
  {
    name: "From Light",
    code: "airheart",
    desc: "Summon a Lightstorm when an ally dies."
  },
  {
    name: "From Nature",
    code: "natureheart",
    desc: "Summon a Leafstorm when an ally dies."
  },
  {
    name: "From Stone",
    code: "stoneheart",
    desc: "Summon a Duststorm when an ally dies."
  },
  {
    name: "Frostbite",
    code: "frozensoul",
    desc: "25% chance to Freeze a random enemy when an ally casts a spell."
  },
  {
    name: "Frozen Hatred",
    code: "chilltouch",
    desc: "Deal double Skull damage vs. Blue Enemies."
  },
  {
    name: "Frozen Soul",
    code: "frozensoul",
    desc: "Inflict Frozen when enemies deal Skull damage to me."
  },
  {
    name: "Full Plate",
    code: "fullplate",
    desc: "Gain 2 Armor every turn."
  },
  {
    name: "Gale Force",
    code: "airspirit",
    desc: "All Yellow allies gain 2 Attack."
  },
  {
    name: "Gate Guardian",
    code: "gateguardian",
    desc: "50% chance to Summon a Warg when an enemy dies."
  },
  {
    name: "General",
    code: "leader",
    desc: "Gain 3 to all Skills if in last position."
  },
  {
    name: "Get Behind Me!",
    code: "divineshield",
    desc: "25% chance to Barrier a random Ally at the start of my turn."
  },
  {
    name: "Giant Bond",
    code: "giantbond",
    desc: "Allied Giants gain 2 Life."
  },
  {
    name: "Giant Lord",
    code: "goblord",
    desc: "All Giants start battle with 50% Mana."
  },
  {
    name: "Giant Queen",
    code: "queensgrace",
    desc: "All Giant Allies gain 2 Life and Magic on 4 or 5 Gem matches."
  },
  {
    name: "Giant Shield",
    code: "giantbond",
    desc: "Allied Giants gain 2 Armor."
  },
  {
    name: "Giant Slayer",
    code: "giantslayer",
    desc: "Deal double Skull damage vs. Giants."
  },
  {
    name: "Gift of Fire",
    code: "fireheart",
    desc: "All Red Allies gain 1 Magic."
  },
  {
    name: "Gloom",
    code: "undeadbond",
    desc: "All Purple allies gain 2 Life."
  },
  {
    name: "Goblin Bond",
    code: "goblinbond",
    desc: "Allied Goblins gain 2 Life."
  },
  {
    name: "Goblin Friend",
    code: "goblinbond",
    desc: "All Goblins gain 2 Attack."
  },
  {
    name: "Goblin Shield",
    code: "goblinbond",
    desc: "Allied Goblins gain 2 Armor."
  },
  {
    name: "Goblin Slayer",
    code: "goblinslayer",
    desc: "Deal double Skull damage vs. Goblins."
  },
  {
    name: "Goblord",
    code: "goblord",
    desc: "Gain 20 Life if in last position."
  },
  {
    name: "Godslayer",
    code: "daemonslayer",
    desc: "Deal 3x - 5x Skull damage vs. Bosses, based on my ascension."
  },
  {
    name: "Golem Protector",
    code: "taurosbond",
    desc: "20% chance to summon an Ancient Golem when I take damage to Life."
  },
  {
    name: "Granite Skin",
    code: "graniteskin",
    desc: "Reduce damage from Skulls by 75%."
  },
  {
    name: "Greedy",
    code: "greedy",
    desc: "Gain 2 bonus Gold on 4 or 5 Gem matches."
  },
  {
    name: "Grim Curse",
    code: "virulence",
    desc: "Disease a random enemy when matching Purple Gems."
  },
  {
    name: "Grudge",
    code: "grudge",
    desc: "Gain 1 Attack when an enemy casts a spell."
  },
  {
    name: "Hack n Slash",
    code: "hacknslash",
    desc: "Gain 3 Attack when dealing Skull damage."
  },
  {
    name: "Hammer Mastery",
    code: "dwarfbond",
    desc: "Gain 2 Magic if using a Hammer."
  },
  {
    name: "Harpy Flock",
    code: "airheart",
    desc: "5% chance to summon a Harpy when my turn begins."
  },
  {
    name: "Harvest Moon",
    code: "darkfall",
    desc: "All Wargare Allies gain 2 Life every turn."
  },
  {
    name: "Haunted Weave",
    code: "stalker",
    desc: "Web a random enemy when I summon a troop."
  },
  {
    name: "Head Hunter",
    code: "soullegion",
    desc: "50% chance to summon a Vargouille when an Enemy dies."
  },
  {
    name: "Healing Herb",
    code: "naturespirit",
    desc: "Gain 4 Life when matching Green Gems."
  },
  {
    name: "Heatwave",
    code: "fierycloak",
    desc: "Create a Firestorm at the start of every turn."
  },
  {
    name: "Hellsteed",
    code: "fierycloak",
    desc: "25% chance to summon a Nightmare when an Ally casts a Spell."
  },
  {
    name: "Hidden Trap",
    code: "darkchannel",
    desc: "Explode a random Gem when matching Yellow Gems."
  },
  {
    name: "High Ancestry",
    code: "mysticbond",
    desc: "Immune to Mana Drain, Silence, Faerie Fire, and Death Mark."
  },
  {
    name: "High Seas",
    code: "waterlink",
    desc: "Gain 2 bonus Blue Mana when matching Blue Gems."
  },
  {
    name: "Holy Armor",
    code: "armored",
    desc: "Reduce damage from Skulls by 40%."
  },
  {
    name: "Huge",
    code: "huge",
    desc: "Gain 2 Life on 4 or 5 Gem matches."
  },
  {
    name: "Human Bond",
    code: "humanbond",
    desc: "Allied Humans gain 2 Life."
  },
  {
    name: "Human Shield",
    code: "humanbond",
    desc: "Allied Humans gain 2 Armor."
  },
  {
    name: "Human Slayer",
    code: "humanslayer",
    desc: "Deal double Skull damage vs. Humans."
  },
  {
    name: "Hunger",
    code: "hunger",
    desc: "Gain 2 to all Skills on Skull gem matches."
  },
  {
    name: "Hunt",
    code: "stryxslayer",
    desc: "Hunter’s Mark a random enemy on 4 or 5 of a kind."
  },
  {
    name: "Hunter's Moon",
    code: "darkfall",
    desc: "Hunter's Mark a random Enemy when matching Red Gems."
  },
  {
    name: "Ice Armor",
    code: "chilltouch",
    desc: "Reduce damage from Skulls by 65%."
  },
  {
    name: "Ice Aura",
    code: "frozensoul",
    desc: "All Blue Allies gain 5 to all Stats."
  },
  {
    name: "Icy Cloak",
    code: "icycloak",
    desc: "Deal triple Skull damage vs. Frozen enemies."
  },
  {
    name: "Icy Death",
    code: "waterbrand",
    desc: "Summon an Icestorm when an enemy dies."
  },
  {
    name: "Icy Rebirth",
    code: "chilltouch",
    desc: "Freeze all Enemies when I die."
  },
  {
    name: "Icy Veil",
    code: "waterbrand",
    desc: "Create an icestorm at the start of a battle."
  },
  {
    name: "Immense",
    code: "immense",
    desc: "Gain 10 Life on 4 or 5 Gem matches."
  },
  {
    name: "Immortal",
    code: "immortal",
    desc: "25% chance to resurrect after death."
  },
  { name: "Immune", code: "immune", description: "Immunity to Disease." },
  {
    name: "Impact",
    code: "shatter",
    desc: "Inflict Stun when enemies deal Skull damage to me."
  },
  {
    name: "Impervious",
    code: "impervious",
    desc: "Immune to all Status Effects, Devour, and Mana Burn."
  },
  {
    name: "Indigestible",
    code: "indigestible",
    desc: "Immunity to Devour."
  },
  {
    name: "Infernal Armor",
    code: "aflame",
    desc: "Reflect 25% of Skull damage."
  },
  {
    name: "Insane Growth",
    code: "immense",
    desc: "Gain 5 to a random Skill on 4 or 5 Gem matches."
  },
  {
    name: "Inscribed",
    code: "inscribed",
    desc: "Gain 1 Armor when an enemy casts a spell."
  },
  {
    name: "Inspiration",
    code: "queensgrace",
    desc: "All Allies start battle with 15% Mana."
  },
  {
    name: "Inspire Hope",
    code: "sunshine",
    desc: "All Humans start battle with 50% Mana."
  },
  { name: "Insulated", code: "insulated", description: "Immunity to Frozen." },
  {
    name: "Invention",
    code: "mechslayer",
    desc: "Gain 2 Armor on 4 or 5 Gem matches."
  },
  {
    name: "Invigorated",
    code: "naturespirit",
    desc: "Gain 1 Life when an ally casts a spell."
  },
  {
    name: "Invulnerable",
    code: "impervious",
    desc: "Immune to all Status Effects, Devour,  Mana Drain, Transform, and Lethal Damage."
  },
  {
    name: "Jaws",
    code: "nastyteeth",
    desc: "All Merfolk gain 3 Attack on 4 or 5 Gem matches."
  },
  { name: "Jinx", code: "jinx", description: "Halve enemy Gem Masteries." },
  {
    name: "Just a Bite",
    code: "hunger",
    desc: "Steal 4 Life from the first enemy when matching Brown Gems."
  },
  {
    name: "King's Legion",
    code: "aspectofdeath",
    desc: "All Undead Allies gain 1 Armor and Magic when matching 4 or more Gems."
  },
  {
    name: "King's Will",
    code: "kingswill",
    desc: "Gain 8 Life when I deal Skull damage."
  },
  {
    name: "Knife Throwing",
    code: "avenger",
    desc: "Gain 2 Magic if using a Dagger."
  },
  {
    name: "Knight Bond",
    code: "knightbond",
    desc: "Allied Knights gain 2 Life."
  },
  {
    name: "Knight Shield",
    code: "knightbond",
    desc: "Allied Knights gain 2 Armor."
  },
  {
    name: "Knight Slayer",
    code: "knightslayer",
    desc: "Deal double Skull damage vs. Knights."
  },
  {
    name: "Knockout",
    code: "knockout",
    desc: "Inflict Stun when doing Skull damage."
  },
  {
    name: "Leader",
    code: "leader",
    desc: "Gain 3 to all Skills if in first position."
  },
  {
    name: "Leading Light",
    code: "armored",
    desc: "Gain 10 Armor if in first position."
  },
  {
    name: "Lethal Toxin",
    code: "lethaltoxin",
    desc: "Deal triple Skull damage to Poisoned and Webbed enemies."
  },
  {
    name: "Life Drain",
    code: "lifedrain",
    desc: "Gain 4 Life when an enemy dies."
  },
  {
    name: "Life Siphon",
    code: "lifedrain",
    desc: "Steal 2 Life from the first enemy on 4 or 5 Gem matches."
  },
  {
    name: "Light Fingers",
    code: "greedy",
    desc: "Gain 5 Gold every turn."
  },
  {
    name: "Lightbringer",
    code: "merfolkbond",
    desc: "Gain bonus Yellow Mana from Yellow Gem matches."
  },
  {
    name: "Lightning Bolt",
    code: "airbrand",
    desc: "Deal 10 damage to a random enemy on 4 or 5 matches."
  },
  {
    name: "Lightning Strike",
    code: "airbrand",
    desc: "Explode 1 Yellow Gem on 4 or 5 Gem matches."
  },
  {
    name: "Lion's Wrath",
    code: "lionstrength",
    desc: "Stun a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Lord of Beasts",
    code: "lionstrength",
    desc: "All Beasts start battle with 50% Mana."
  },
  {
    name: "Lord of Death",
    code: "aspectofdeath",
    desc: "All Undead gain 5 Life and Magic when an enemy dies."
  },
  {
    name: "Lord of Storms",
    code: "airlink",
    desc: "Elementals gain 1 Magic when an ally casts a spell."
  },
  {
    name: "Loyal Mount",
    code: "dragonslayer",
    desc: "100% chance to summon a Drake on death."
  },
  {
    name: "Mace of Power",
    code: "dwarfbond",
    desc: "Gain 2 Magic if using a Mace."
  },
  {
    name: "Mage Lord",
    code: "mysticbond",
    desc: "Gain 2 Magic if in last position."
  },
  {
    name: "Magic Aura",
    code: "eyeofkhetar",
    desc: "All Purple Allies gain 5 to all Stats."
  },
  {
    name: "Magic Brand",
    code: "magicbrand",
    desc: "Gain 1 Attack for each Purple ally."
  },
  {
    name: "Magic Heart",
    code: "magicheart",
    desc: "Gain 1 Life for each Purple ally."
  },
  {
    name: "Magic Link",
    code: "magiclink",
    desc: "Gain bonus Purple Mana from Purple Gem matches."
  },
  {
    name: "Magic Spirit",
    code: "magicspirit",
    desc: "Gain 1 Magic for each Purple ally."
  },
  {
    name: "Magic Vines",
    code: "dragonvines",
    desc: "Entangle a random enemy when matching Purple."
  },
  {
    name: "Magical Shield",
    code: "insulated",
    desc: "All Purple allies gain 2 Armor."
  },
  {
    name: "Mana Shield",
    code: "manashield",
    desc: "Immunity to Mana Burn, Mana Drain and Mana Steal."
  },
  {
    name: "Mana Source",
    code: "empowered",
    desc: "Start battles with 50% Mana."
  },
  {
    name: "Manifestation",
    code: "humanbond",
    desc: "Gain 5 to all Skill Points when matching Skulls."
  },
  {
    name: "Many Heads",
    code: "manyheads",
    desc: "All enemies take 3 damage when they deal Skull damage."
  },
  {
    name: "Marauder Bond",
    code: "marauderbond",
    desc: "Allied Marauders gain 2 Life."
  },
  {
    name: "Marauder Slayer",
    code: "marauderslayer",
    desc: "Deal double Skull damage vs. Marauders."
  },
  {
    name: "Master Builder",
    code: "constructbond",
    desc: "All constructs gain 10 Life."
  },
  {
    name: "Mech Bond",
    code: "mechbond",
    desc: "Allied Mechs gain 2 Life."
  },
  {
    name: "Mech Shield",
    code: "mechbond",
    desc: "Allied Mechs gain 2 Armor."
  },
  {
    name: "Mech Slayer",
    code: "mechslayer",
    desc: "Deal double Skull damage vs. Mechs."
  },
  {
    name: "Mega-Aspect of Death",
    code: "aspectofdeath",
    desc: "Steal 3 Life from the first enemy at the start of each turn."
  },
  {
    name: "Mega-Divine Right",
    code: "divineshield",
    desc: "Gain 4 Armor when matching Yellow Gems."
  },
  {
    name: "Mega-Immense",
    code: "immense",
    desc: "Gain 12 Life on 4 or 5 Gem matches."
  },
  {
    name: "Mega-Thorns",
    code: "thorns",
    desc: "Reflect 100% of Skull damage."
  },
  {
    name: "Mega-Unbreakable",
    code: "immense",
    desc: "Reduce damage from Skulls by 100%."
  },
  {
    name: "Mega-Winter Veil",
    code: "winterveil",
    desc: "Freeze all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Mentor",
    code: "magiclink",
    desc: "All allies gain 1 Magic."
  },
  {
    name: "Merchant",
    code: "merchant",
    desc: "Gain 25% bonus Gold from battle."
  },
  {
    name: "Merfolk Bond",
    code: "merfolkbond",
    desc: "Allied Merfolk gain 2 Life."
  },
  {
    name: "Merfolk Shield",
    code: "merfolkbond",
    desc: "Allied Merfolk gain 2 Armor."
  },
  {
    name: "Merfolk Slayer",
    code: "merfolkslayer",
    desc: "Deal double Skull damage vs. Merfolk."
  },
  {
    name: "Miasma",
    code: "miasma",
    desc: "Poison a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Molten",
    code: "molten",
    desc: "Burn a random enemy when matching Red Gems."
  },
  {
    name: "Moneybags",
    code: "merchant",
    desc: "Gain 100% bonus Gold from battle."
  },
  {
    name: "Monkey Magic",
    code: "spiritfire",
    desc: "Steal 1 Magic from the first enemy at the start of my turn."
  },
  {
    name: "Monster Bond",
    code: "monsterbond",
    desc: "Allied Monsters gain 2 Life."
  },
  {
    name: "Monster Shield",
    code: "monsterbond",
    desc: "Allied Monsters gain 2 Armor."
  },
  {
    name: "Monster Slayer",
    code: "monsterslayer",
    desc: "Deal double Skull damage vs. Monsters."
  },
  {
    name: "Monstrous Kin",
    code: "manyheads",
    desc: "Give all Monster Allies 2 to all Skill Points on 4 or 5 Gem matches."
  },
  {
    name: "Mutant Regeneration",
    code: "regeneration",
    desc: "Recover 6 Life at the start of each turn."
  },
  {
    name: "Mystic Bond",
    code: "mysticbond",
    desc: "Allied Mystics gain 2 Life."
  },
  {
    name: "Mystic Channel",
    code: "magicspirit",
    desc: "All Mystics gain 2 Magic and Life when an enemy dies."
  },
  {
    name: "Mystic Shield",
    code: "mysticbond",
    desc: "Allied Mystics gain 2 Armor."
  },
  {
    name: "Mystic Slayer",
    code: "mysticslayer",
    desc: "Deal double Skull damage vs. Mystics."
  },
  {
    name: "Naga Bond",
    code: "nagabond",
    desc: "Allied Naga gain 2 Life."
  },
  {
    name: "Naga Shield",
    code: "nagabond",
    desc: "Allied Naga gain 2 Armor."
  },
  {
    name: "Naga Slayer",
    code: "nagaslayer",
    desc: "Deal double Skull damage vs. Naga."
  },
  {
    name: "Nasty Teeth",
    code: "nastyteeth",
    desc: "Deal 5x Skull damage vs. Knights."
  },
  {
    name: "Nature Aura",
    code: "thorns",
    desc: "All Green Allies gain 5 to all Stats."
  },
  {
    name: "Nature Brand",
    code: "naturebrand",
    desc: "Gain 1 Attack for each Green ally."
  },
  {
    name: "Nature Heart",
    code: "natureheart",
    desc: "Gain 1 Life for each Green ally."
  },
  {
    name: "Nature Link",
    code: "naturelink",
    desc: "Gain bonus Green Mana from Green Gem matches."
  },
  {
    name: "Nature Pact",
    code: "elfbond",
    desc: "25% chance to summon a Dryad on death."
  },
  {
    name: "Nature Spirit",
    code: "naturespirit",
    desc: "Gain 1 Magic for each Green ally."
  },
  {
    name: "Nature's Death",
    code: "naturebrand",
    desc: "Summon a Leafstorm when an enemy dies."
  },
  {
    name: "Nature’s Aura",
    code: "naturelink",
    desc: "Create a leafstorm at the start of a battle."
  },
  {
    name: "Nature’s Will",
    code: "naturelink",
    desc: "Gain bonus Green Mana from Green Gem matches."
  },
  {
    name: "Necro Master",
    code: "aspectofdeath",
    desc: "Gain 150% bonus Souls from battle."
  },
  {
    name: "Necromancy",
    code: "necromancy",
    desc: "Gain 50% bonus Souls from battle."
  },
  { name: "Nimble", code: "flying", description: "Immunity to Entangle." },
  {
    name: "Northern Clans",
    code: "frozensoul",
    desc: "All Urska start the battle with 50% Mana."
  },
  {
    name: "Ocean’s Trident",
    code: "avenger",
    desc: "Gain 3 Magic if using a Polearm."
  },
  {
    name: "Omen of Dark",
    code: "jinx",
    desc: "Explode a Purple Gem at the start of battle."
  },
  {
    name: "Omen of Death",
    code: "undeadslayer",
    desc: "Explode a Skull at the start of battle."
  },
  {
    name: "Omen of Fire",
    code: "firelink",
    desc: "Explode a Red Gem at the start of battle."
  },
  {
    name: "Omen of Ice",
    code: "chilltouch",
    desc: "Explode a Blue Gem at the start of battle."
  },
  {
    name: "Omen of Light",
    code: "elementalbond",
    desc: "Explode a Yellow Gem at the start of battle."
  },
  {
    name: "Omen of Nature",
    code: "naturespirit",
    desc: "Explode a Green Gem at the start of battle."
  },
  {
    name: "Omen of Stone",
    code: "stonebrand",
    desc: "Explode a Brown Gem at the start of battle."
  },
  {
    name: "Orc Armor",
    code: "armored",
    desc: "Gain 5 Armor when I take damage."
  },
  {
    name: "Orc Bond",
    code: "orcbond",
    desc: "Allied Orcs gain 2 Life."
  },
  {
    name: "Orc Cunning",
    code: "magiclink",
    desc: "Gain 2 Magic when I take damage."
  },
  {
    name: "Orc Fury",
    code: "marauderslayer",
    desc: "Gain 3 Attack when I take damage."
  },
  {
    name: "Orc Might",
    code: "goblinbond",
    desc: "Gain 8 to a random skill when I take damage."
  },
  {
    name: "Orc Shield",
    code: "orcbond",
    desc: "Allied Orcs gain 2 Armor."
  },
  {
    name: "Orc Slayer",
    code: "orcslayer",
    desc: "Deal double Skull damage vs. Orc."
  },
  {
    name: "Orclord",
    code: "orclord",
    desc: "All Orcs start battle with 50% Mana."
  },
  {
    name: "Overclock",
    code: "clockwork",
    desc: "Allied Mechs gain 5 Attack and Armor."
  },
  {
    name: "Pack Master",
    code: "wildfolkslayer",
    desc: "25% chance to summon a Dire Wolf on death."
  },
  {
    name: "Penumbra",
    code: "darkfall",
    desc: "Create a Darkstorm at the start of every turn."
  },
  {
    name: "Perfect Aim",
    code: "trueshot",
    desc: "Gain 2 Magic if using a Bow."
  },
  {
    name: "Pickpocket",
    code: "merchant",
    desc: "Gain 10 Gold when I take damage."
  },
  {
    name: "Pillage and Plunder",
    code: "graniteskin",
    desc: "Gain 20 bonus Gold on 4 or 5 Gem matches."
  },
  {
    name: "Plague Touch",
    code: "plaguetouch",
    desc: "Inflict Disease when doing Skull damage."
  },
  {
    name: "Plaguebearer",
    code: "virulence",
    desc: "Disease a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Poison Gaze",
    code: "aspectofplague",
    desc: "Poison all enemies on 4 or 5 Gem matches."
  },
  {
    name: "Poison Spores",
    code: "jinx",
    desc: "Inflict Poison when I take Skull damage."
  },
  {
    name: "Poison Tide",
    code: "waterlink",
    desc: "Steal 4 Life from the first enemy when matching Green Gems."
  },
  {
    name: "Portent",
    code: "divineaura",
    desc: "All Centaurs gain 2 Magic when an enemy casts a spell."
  },
  {
    name: "Possession",
    code: "spiritfire",
    desc: "25% chance to resurrect after death."
  },
  {
    name: "Potion of Armor",
    code: "immune",
    desc: "Each Ally reduces damage from Skulls by 25%."
  },
  {
    name: "Potion of Blessing",
    code: "immune",
    desc: "Bless each Ally at the start of battle."
  },
  {
    name: "Potion of Enchantment",
    code: "immune",
    desc: "Enchant each Ally at the start of battle."
  },
  {
    name: "Potion of Explosion",
    code: "immune",
    desc: "Each Ally explodes 1 Gem at the start of battle."
  },
  {
    name: "Potion of Rejuvenation",
    code: "immune",
    desc: "Each Ally heals 3 Life at the start of each turn."
  },
  {
    name: "Potion of Shielding",
    code: "immune",
    desc: "Barrier each Ally at the start of battle."
  },
  {
    name: "Precision",
    code: "humanslayer",
    desc: "Gain 2 Magic if using a Missile."
  },
  {
    name: "Pride Prowess",
    code: "lionstrength",
    desc: "All ally Raksha gain 1 Attack and Magic at the start of every turn."
  },
  {
    name: "Protector",
    code: "stoneskin",
    desc: "Gain 3 Magic if using a Shield."
  },
  {
    name: "Provocation",
    code: "nastyteeth",
    desc: "Enrage a random ally on 4 or 5 matches."
  },
  {
    name: "Purification",
    code: "blessed",
    desc: "Cleanse myself on 4 or 5 Gem matches."
  },
  {
    name: "Pyromania",
    code: "pyromania",
    desc: "Deal double Skull damage vs. Burning enemies."
  },
  {
    name: "Queen's Grace",
    code: "queensgrace",
    desc: "All Daemons gain 2 Attack and Life at the start of each turn."
  },
  {
    name: "Quick Study",
    code: "grudge",
    desc: "Gain 10% bonus XP from battle."
  },
  {
    name: "Radiant Aura",
    code: "divineshield",
    desc: "All Divine start battle with 40% Mana."
  },
  {
    name: "Raging Bull",
    code: "goblord",
    desc: "Gain 2 Attack, Armor and Life when matching Red Gems."
  },
  {
    name: "Rainbow Link",
    code: "spiritfire",
    desc: "Gain bonus Mana from all Gem matches."
  },
  {
    name: "Raksha Bond",
    code: "rakshabond",
    desc: "Allied Raksha gain 2 Life."
  },
  {
    name: "Raksha Shield",
    code: "rakshabond",
    desc: "Allied Raksha gain 2 Armor."
  },
  {
    name: "Raksha Slayer",
    code: "rakshaslayer",
    desc: "Deal double Skull damage vs. Raksha."
  },
  {
    name: "Rancor",
    code: "nastyteeth",
    desc: "Gain 3 Attack when an enemy matches Skulls."
  },
  {
    name: "Razor Armor",
    code: "constructbond",
    desc: "Add 20% of Armor to Skull Damage."
  },
  {
    name: "Razor Teeth",
    code: "nagaslayer",
    desc: "Inflict Bleed when doing Skull damage."
  },
  {
    name: "Reaper",
    code: "undeadslayer",
    desc: "Gain 2 Magic if using a Scythe."
  },
  {
    name: "Rebirth",
    code: "immortal",
    desc: "50% chance to become a Baby Dragon with full mana on death."
  },
  {
    name: "Regeneration",
    code: "regeneration",
    desc: "Recover 1 Life at the start of each turn."
  },
  {
    name: "Reinforced",
    code: "reinforced",
    desc: "Recover 1 Armor at the start of each turn."
  },
  {
    name: "Repair",
    code: "reinforced",
    desc: "Gain 1 Armor on 4 or 5 Gem matches."
  },
  { name: "Resilience", code: "magicbrand", description: "Gain 8 Life." },
  {
    name: "Resplendence",
    code: "stoneheart",
    desc: "Gain 2 Magic if using Jewellery."
  },
  {
    name: "Revenge",
    code: "frenzy",
    desc: "Inflict Hunter's Mark when I take Skull damage."
  },
  {
    name: "Revered",
    code: "blessed",
    desc: "All allies gain 2 random Skill points."
  },
  {
    name: "Rising Shadows",
    code: "darkfall",
    desc: "7% chance to assassinate the last enemy when another enemy dies."
  },
  {
    name: "Rock Solid",
    code: "stonelink",
    desc: "Gain a Barrier when matching Brown Gems."
  },
  {
    name: "Rocky Death",
    code: "stonebrand",
    desc: "Summon a Duststorm when an enemy dies."
  },
  {
    name: "Rogue Bond",
    code: "roguebond",
    desc: "Allied Rogues gain 2 Life."
  },
  {
    name: "Rogue Shield",
    code: "roguebond",
    desc: "Allied Rogues gain 2 Armor."
  },
  {
    name: "Rogue Slayer",
    code: "rogueslayer",
    desc: "Deal double Skull damage vs. Rogues."
  },
  {
    name: "Root Trap",
    code: "snare",
    desc: "Entangle the first enemy at the start of battle."
  },
  {
    name: "Royal Armory",
    code: "avenger",
    desc: "All ally Knights gain 2 Armor."
  },
  {
    name: "Sacrifice",
    code: "sacrifice",
    desc: "Gain 3 to all Skills when an enemy dies."
  },
  {
    name: "Savior",
    code: "impervious",
    desc: "When an ally dies, Barrier another random ally."
  },
  {
    name: "Second Helping",
    code: "queensgrace",
    desc: "All allied Goblins gain 5 Life on 4 or 5 Gem matches."
  },
  {
    name: "Seedling",
    code: "seedling",
    desc: "Gain 8 Magic on Green gem matches."
  },
  {
    name: "Serendipity",
    code: "feyslayer",
    desc: "Give a random ally a random status effect."
  },
  {
    name: "Serenity",
    code: "blessed",
    desc: "Inflict Silence when enemies deal Skull damage to me."
  },
  {
    name: "Serpent's Fang",
    code: "aspectofdeath",
    desc: "Deal 3 damage to a random enemy when an ally casts a spell."
  },
  {
    name: "Shadow Scales",
    code: "insulated",
    desc: "All Naga Allies gain 1 Armor every turn."
  },
  {
    name: "Shadows’ Call",
    code: "stealthy",
    desc: "20% chance to summon a Sister of Shadows when an enemy dies."
  },
  {
    name: "Shatter",
    code: "shatter",
    desc: "Deal double Skull damage vs. Frozen enemies."
  },
  {
    name: "Shining Staff",
    code: "arcane",
    desc: "Gain 2 Magic if using a Staff."
  },
  {
    name: "Shock",
    code: "airbrand",
    desc: "Deal 2 damage to a random enemy on 4 or 5 matches."
  },
  {
    name: "Shrapnel",
    code: "molten",
    desc: "Deal 1 damage to all enemies on 4 or 5 matches."
  },
  {
    name: "Siege",
    code: "siege",
    desc: "Allies gain 2 Attack when invading in PVP."
  },
  {
    name: "Siegebreaker",
    code: "siege",
    desc: "Deal 3x - 5x Skull damage vs. Towers, based on my ascension."
  },
  {
    name: "Silence!",
    code: "silence",
    desc: "Silence enemies when doing Skull damage."
  },
  {
    name: "Siphon",
    code: "siphon",
    desc: "Steal enemy mana when dealing Skull damage."
  },
  {
    name: "Skull Death",
    code: "undeadslayer",
    desc: "Summon a Bonestorm when an enemy dies."
  },
  {
    name: "Sky Ancestry",
    code: "blessed",
    desc: "Immune to Mana Drain, Silence, Faerie Fire, and Mana Burn."
  },
  { name: "Slippery", code: "slippery", description: "Immunity to Web." },
  {
    name: "Snap Freeze",
    code: "chill",
    desc: "Freeze a random enemy at the start of battle."
  },
  {
    name: "Snare",
    code: "snare",
    desc: "Inflict Web when doing Skull damage."
  },
  {
    name: "Sneak Attack",
    code: "sacrifice",
    desc: "Deal 7 damage to the last enemy on 4 or 5 matches."
  },
  {
    name: "Snowstorm",
    code: "frozensoul",
    desc: "Create an Icestorm at the start of every turn."
  },
  {
    name: "Soaring",
    code: "ward",
    desc: "Allied Stryx gain 5 Life and Attack."
  },
  {
    name: "Song of Bones",
    code: "undeadbond",
    desc: "Summon a Bonestorm at the start of Battle."
  },
  {
    name: "Song of Darkness",
    code: "inscribed",
    desc: "Summon a Darkstorm at the start of Battle."
  },
  {
    name: "Song of Doom",
    code: "daemonslayer",
    desc: "Summon a Doomstorm at the start of Battle."
  },
  {
    name: "Song of Fire",
    code: "firebrand",
    desc: "Summon a Firestorm at the start of Battle."
  },
  {
    name: "Song of Ice",
    code: "magicheart",
    desc: "Summon an Icestorm at the start of Battle."
  },
  {
    name: "Song of Light",
    code: "blessed",
    desc: "Summon a Lightstorm at the start of Battle."
  },
  {
    name: "Song of Nature",
    code: "naturelink",
    desc: "Summon a Leafstorm at the start of Battle."
  },
  {
    name: "Song of Stone",
    code: "stonelink",
    desc: "Summon a Duststorm at the start of Battle."
  },
  {
    name: "Soul Caller",
    code: "airheart",
    desc: "Gain 1 Soul every turn."
  },
  {
    name: "Soul Legion",
    code: "soullegion",
    desc: "50% chance to Summon a Wight when an enemy dies."
  },
  {
    name: "Soul Ritual",
    code: "soullegion",
    desc: "Gain 5 Magic when an enemy dies."
  },
  {
    name: "Sour Candy",
    code: "aspectofplague",
    desc: "Faerie Fire a random enemy when matching Green Gems."
  },
  {
    name: "Spark",
    code: "mysticbond",
    desc: "Gain Enchant when matching Red Gems."
  },
  {
    name: "Spawn of Hell",
    code: "daemonicpact",
    desc: "50% chance to summon a Hellspawn when an enemy dies."
  },
  {
    name: "Spawn",
    code: "dragonslayer",
    desc: "25% chance to summon a Baby Dragon on death."
  },
  {
    name: "Spell Armor",
    code: "reinforced",
    desc: "Reduce damage from Spells by 25%."
  },
  {
    name: "Spell Block",
    code: "inscribed",
    desc: "Reduce damage from Spells by 50%."
  },
  {
    name: "Spiked Armor",
    code: "spikearmor",
    desc: "Add 25% of Armor to Skull damage."
  },
  {
    name: "Spiky",
    code: "spikearmor",
    desc: "Deal 3 damage to all enemies when I match skulls."
  },
  {
    name: "Spiny",
    code: "airbrand",
    desc: "Deal 1 damage to all enemies when I match skulls."
  },
  {
    name: "Spore Cloud",
    code: "miasma",
    desc: "Disease a random Enemy when matching 4 or more Gems."
  },
  {
    name: "Stalker",
    code: "stalker",
    desc: "Deal double Skull damage vs. Webbed enemies."
  },
  {
    name: "Stealthy",
    code: "stealthy",
    desc: "Cannot be targeted by spells (unless there are no other targets)."
  },
  {
    name: "Stone Aura",
    code: "graniteskin",
    desc: "All Brown Allies gain 5 to all Stats."
  },
  {
    name: "Stone Brand",
    code: "stonebrand",
    desc: "Gain 1 Attack for each Brown ally."
  },
  {
    name: "Stone Circle",
    code: "stonespirit",
    desc: "All Brown Allies gain 3 Armor."
  },
  {
    name: "Stone Heart",
    code: "stoneheart",
    desc: "Gain 1 Life for each Brown ally."
  },
  {
    name: "Stone Link",
    code: "stonelink",
    desc: "Gain bonus Brown Mana from Brown Gem matches."
  },
  {
    name: "Stone Loyalty",
    code: "divineshield",
    desc: "All Dwarves start battle with 50% Mana."
  },
  {
    name: "Stone Mastery",
    code: "stonebrand",
    desc: "Gain bonus Brown Mana from Brown Gem matches."
  },
  {
    name: "Stone Spirit",
    code: "stonespirit",
    desc: "Gain 1 Magic for each Brown ally."
  },
  {
    name: "Stone Wall",
    code: "stonespirit",
    desc: "All Brown allies gain 2 Armor."
  },
  {
    name: "Stoneskin",
    code: "stoneskin",
    desc: "Reduce damage from Skulls by 50%."
  },
  {
    name: "Storm Aura",
    code: "airheart",
    desc: "Create a duststorm at the start of a battle."
  },
  {
    name: "Storm Flock",
    code: "fierycloak",
    desc: "35% chance to summon a Harpy Mage when matching 4 or more Gems."
  },
  {
    name: "Storm Shield",
    code: "divineshield",
    desc: "Give a random Ally a Barrier on 4 or 5 Gem matches."
  },
  {
    name: "Storm Soul",
    code: "icycloak",
    desc: "Conjure a random Storm when matching 4 or more Gems."
  },
  {
    name: "Stormy Hatred",
    code: "airbrand",
    desc: "Deal double Skull damage vs. Yellow Enemies."
  },
  {
    name: "Stryx Bond",
    code: "stryxbond",
    desc: "Allied Stryx gain 2 Life."
  },
  {
    name: "Stryx Commander",
    code: "flying",
    desc: "All Stryx allies gain 1 Attack every turn."
  },
  {
    name: "Stryx Shield",
    code: "stryxbond",
    desc: "Allied Stryx gain 2 Armor."
  },
  {
    name: "Stryx Slayer",
    code: "stryxslayer",
    desc: "Deal double Skull damage vs. Stryx."
  },
  { name: "Sturdy", code: "sturdy", description: "Immune to Poison." },
  {
    name: "Succumb",
    code: "aspectofdeath",
    desc: "Enemies lose 4 from a random Skill Point when an Ally casts a spell."
  },
  {
    name: "Sudden Doom",
    code: "elementalslayer",
    desc: "Create a Doomstorm at the start of battle."
  },
  {
    name: "Summer Veil",
    code: "fierycloak",
    desc: "Faerie Fire a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Sun Fire",
    code: "sunshine",
    desc: "Faerie Fire a random enemy when matching Red Gems."
  },
  {
    name: "Sun Flare",
    code: "fierycloak",
    desc: "50% chance to Burn a random enemy at start of my turn."
  },
  {
    name: "Sun's Glory",
    code: "sunshine",
    desc: "Gain 2 Magic on Red Gem matches."
  },
  {
    name: "Sunshine",
    code: "sunshine",
    desc: "Gain 8 Magic on Yellow gem matches."
  },
  {
    name: "Suppression",
    code: "suppression",
    desc: "Enemies lose 1 Skill point on 4 or 5 Gem matches."
  },
  {
    name: "Swift Curse",
    code: "cursed",
    desc: "Death Mark a random enemy at the start of battle."
  },
  { name: "Swift", code: "fast", description: "Start battles with 75% Mana." },
  {
    name: "Tactician",
    code: "magicspirit",
    desc: "Gain 3 Magic at the start of a battle."
  },
  {
    name: "Tangle",
    code: "naturebrand",
    desc: "Inflict Entangle when doing Skull damage."
  },
  {
    name: "Tauros Bond",
    code: "taurosbond",
    desc: "Allied Tauros gain 2 Life."
  },
  {
    name: "Tauros Shield",
    code: "taurosbond",
    desc: "Allied Tauros gain 2 Armor."
  },
  {
    name: "Tauros Slayer",
    code: "taurosslayer",
    desc: "Deal double Skull damage vs. Tauros."
  },
  {
    name: "Technomancy",
    code: "technomancy",
    desc: "Decrease a random Enemy's Magic by 2 on 4 or 5 Gem matches."
  },
  {
    name: "Temptation",
    code: "doom",
    desc: "Charm a random enemy when an ally dies."
  },
  {
    name: "Tentacles",
    code: "thorns",
    desc: "Deal 3 damage to all enemies on 4 or 5 matches."
  },
  { name: "Thick Head", code: "thickhead", description: "Immunity to Stun." },
  {
    name: "Thick Hide",
    code: "beastbond",
    desc: "Reduce damage from Skulls by 20%."
  },
  {
    name: "Thieves’ Guild",
    code: "mechbond",
    desc: "All Rogues gain 1 Magic on 4 or 5 of a kind."
  },
  {
    name: "Thorns",
    code: "thorns",
    desc: "Reflect 50% of Skull damage"
  },
  {
    name: "Thunder Fist",
    code: "knockout",
    desc: "All Yellow Allies gain 1 Magic."
  },
  {
    name: "Tidal King",
    code: "waterspirit",
    desc: "Submerge myself at the start of every turn."
  },
  {
    name: "Titanic Surge",
    code: "big",
    desc: "All Giant Allies gain 1 Life and Magic."
  },
  {
    name: "Tough Scales",
    code: "dragonbond",
    desc: "Reduce damage from Skulls by 30%."
  },
  {
    name: "Toxic Hatred",
    code: "immune",
    desc: "Deal double Skull damage vs. Green Enemies."
  },
  {
    name: "Toxic",
    code: "venomous",
    desc: "Deal double Skull damage vs. Poisoned Enemies."
  },
  {
    name: "Transcend",
    code: "inscribed",
    desc: "Exchange 2 Life for 2 Magic on 4 or 5 Gem matches."
  },
  {
    name: "Tree of Knowledge",
    code: "natureheart",
    desc: "Gain Enchant when matching Green Gems."
  },
  {
    name: "Troll Regeneration",
    code: "regeneration",
    desc: "Recover 3 Life at the start of each turn."
  },
  {
    name: "True Shot",
    code: "trueshot",
    desc: "75% chance to ignore Armor with Skull damage."
  },
  {
    name: "Tsunami",
    code: "waterspirit",
    desc: "Submerge all Allies when matching 4 or more Gems."
  },
  {
    name: "Unbreakable",
    code: "immense",
    desc: "Reduce damage from Skulls by 80%."
  },
  {
    name: "Undead Bond",
    code: "undeadbond",
    desc: "Allied Undead gain 2 Life."
  },
  {
    name: "Undead Shield",
    code: "undeadbond",
    desc: "Allied Undead gain 2 Armor."
  },
  {
    name: "Undead Slayer",
    code: "undeadslayer",
    desc: "Deal double Skull damage vs. Undeads. "
  },
  {
    name: "Undying",
    code: "undeadslayer",
    desc: "Immune to Poison, Disease, and Death Mark."
  },
  {
    name: "Unholy Blessing",
    code: "undeadbond",
    desc: "All Undead gain 2 Armor and Magic when an ally dies."
  },
  {
    name: "Unstable Possession",
    code: "ensoul",
    desc: "Explode 2 random Gems on 4 or 5 Gem matches."
  },
  {
    name: "Up in Flames",
    code: "firebrand",
    desc: "Burn a random enemy when an ally dies."
  },
  {
    name: "Urska Bond",
    code: "beastbond",
    desc: "Allied Urska gain 2 Life."
  },
  {
    name: "Urska Major",
    code: "beastslayer",
    desc: "All Urska Allies gain 1 Attack every turn."
  },
  {
    name: "Urska Shield",
    code: "beastslayer",
    desc: "Allied Urska gain 2 Armor."
  },
  {
    name: "Urska Slayer",
    code: "beastslayer",
    desc: "Deal double Skull damage vs. Urska."
  },
  {
    name: "Valuable",
    code: "stoneheart",
    desc: "Gain 25 Gold when I die."
  },
  {
    name: "Vanguard",
    code: "insulated",
    desc: "Gain Barrier at the start of battle."
  },
  {
    name: "Vengeance",
    code: "daemonslayer",
    desc: "Gain 3 Attack when an enemy dies."
  },
  {
    name: "Venomous",
    code: "venomous",
    desc: "Poison enemies when doing Skull damage."
  },
  {
    name: "Victory Lap",
    code: "gardswrath",
    desc: "Gain 8 Mana when an Enemy dies."
  },
  {
    name: "Virtue of Courage",
    code: "lionstrength",
    desc: "All allies gain 2 Attack and Life on Skull gem matches."
  },
  {
    name: "Virtue of Honor",
    code: "divineshield",
    desc: "Gain 10 to all Skills when playing a PVP battle."
  },
  {
    name: "Virtue of Humility",
    code: "compassion",
    desc: "All allies gain 2 Armor and Magic when I take damage to Life."
  },
  {
    name: "Virtue of Justice",
    code: "hacknslash",
    desc: "All allies gain 3 Attack and Armor  when an enemy dies."
  },
  {
    name: "Virtue of Loyalty",
    code: "fullplate",
    desc: "All allies gain 3 Armor and Life when an ally casts a spell."
  },
  {
    name: "Virtue of Sacrifice",
    code: "ensoul",
    desc: "All allies gain 2 Attack and Magic when an ally dies."
  },
  {
    name: "Virulence",
    code: "virulence",
    desc: "Deal double Skull damage vs. Diseased enemies."
  },
  {
    name: "Voracious",
    code: "hunger",
    desc: "5% chance to Devour on Skull damage."
  },
  {
    name: "Wall of Vines",
    code: "naturebrand",
    desc: "All Green allies gain 5 Armor."
  },
  { name: "Ward", code: "ward", description: "All allies gain 5 Armor." },
  { name: "Warded", code: "warded", description: "Immunity to Death Mark." },
  {
    name: "Wargare Bond",
    code: "wargarebond",
    desc: "Allied Wargare gain 2 Life."
  },
  {
    name: "Wargare Shield",
    code: "wargarebond",
    desc: "Allied Wargare gain 2 Armor."
  },
  {
    name: "Wargare Slayer",
    code: "wargareslayer",
    desc: "Deal double Skull damage vs. Wargare."
  },
  {
    name: "Water Brand",
    code: "waterbrand",
    desc: "Gain 1 Attack for each Blue ally."
  },
  {
    name: "Water Heart",
    code: "waterheart",
    desc: "Gain 1 Life for each Blue ally."
  },
  {
    name: "Water Link",
    code: "waterlink",
    desc: "Gain bonus Blue Mana from Blue Gem matches."
  },
  {
    name: "Water Mastery",
    code: "waterspirit",
    desc: "Gain bonus Blue Mana from Blue Gem matches."
  },
  {
    name: "Water Spirit",
    code: "waterspirit",
    desc: "Gain 1 Magic for each Blue ally."
  },
  {
    name: "Watery Binding",
    code: "waterbrand",
    desc: "All Blue Allies gain 4 Life."
  },
  {
    name: "Webweaver",
    code: "cocoon",
    desc: "Web a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Well-Read",
    code: "empowered",
    desc: "Gain 3 Magic if using a Tome."
  },
  {
    name: "Wild Frenzy",
    code: "wildfolkbond",
    desc: "All Wildfolk allies gain 2 Attack at the start of every turn."
  },
  {
    name: "Wild Growth",
    code: "beastbond",
    desc: "All Beast allies gain 2 Attack and Life on 4 or 5 Gem matches."
  },
  {
    name: "Wild Mana",
    code: "dragonvines",
    desc: "All Wildfolk start battle with 50% Mana."
  },
  {
    name: "Wild Vines",
    code: "thorns",
    desc: "Entangle a random enemy when matching Green."
  },
  {
    name: "Wildfolk Bond",
    code: "wildfolkbond",
    desc: "Allied Wildfolk gain 2 Life."
  },
  {
    name: "Wildfolk Shield",
    code: "wildfolkbond",
    desc: "Allied Wildfolk gain 2 Armor."
  },
  {
    name: "Wildfolk Slayer",
    code: "wildfolkslayer",
    desc: "Deal double Skull damage vs. Wildfolk."
  },
  {
    name: "Wind Aura",
    code: "winterveil",
    desc: "All Yellow Allies gain 5 to all Stats."
  },
  { name: "Wind Shield", code: "manashield", description: "Gain 8 Armor." },
  {
    name: "Wind Speed",
    code: "airheart",
    desc: "All Yellow Allies start battle with 10% Mana."
  },
  {
    name: "Winter Veil",
    code: "winterveil",
    desc: "Freeze a random enemy on 4 or 5 Gem matches."
  },
  {
    name: "Wood Ancestry",
    code: "natureheart",
    desc: "Immune to Mana Drain, Silence, Faerie Fire, and Entangle."
  },
  {
    name: "Wrath of Anu",
    code: "fierycloak",
    desc: "50% chance to Stun a random enemy at the start of my turn."
  },
  {
    name: "Zorn's Fury",
    code: "doom",
    desc: "Gain 4 Mana when I take damage."
  }
];
