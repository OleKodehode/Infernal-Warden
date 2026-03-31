// =========== Upgrade System ===========
export const allUpgrades = [
  // Common upgrades - Higher weights
  {
    rarity: "common",
    name: "Fire Power",
    desc: "Another firecracker added to the ammo (2 attack)",
    weight: 35,
    apply: (player) => (player.stats.atk += 2),
    condition: (player) => player.stats.atk < 100,
  },
  {
    rarity: "common",
    name: "Speed Boost",
    desc: "Tweak the fuel mixture (20 speed)",
    weight: 30,
    apply: (player) => (player.stats.speed += 20),
    condition: (player) => player.stats.speed < 600,
  },
  {
    rarity: "common",
    name: "Better Handle",
    desc: "Maybe some butter will help the turning.. (0.0025 turn rate)",
    weight: 25,
    apply: (player) => (player.stats.turnSpeed += 0.0025),
    condition: (player) => player.stats.turnSpeed < 0.1,
  },
  {
    rarity: "common",
    name: "Reinforced Armor",
    desc: "An extra armor plate (1 armor)",
    weight: 30,
    apply: (player) => player.stats.armor++,
  },
  {
    rarity: "common",
    name: "More Bulk",
    desc: "Put in some pillows for comfort and structure (20 HP)",
    weight: 30,
    apply: (player) => {
      player.stats.maxHealth += 20;
      player.stats.currentHealth += 20;
      player.updateHealthBar();
    },
    condition: (player) => player.stats.maxHealth < 1000,
  },
  {
    rarity: "common",
    name: "Passive Repair",
    desc: "Rolls of duct tape (0.5 hps)",
    weight: 25,
    apply: (player) => (player.stats.regen += 0.5),
    condition: (player) => player.stats.regen < 50,
  },
  {
    rarity: "common",
    name: "Patch up",
    desc: "Need some band-aids? (20% HP recovered)",
    weight: 30,
    apply: (player) => {
      player.stats.currentHealth = player.stats.maxHealth;
      player.updateHealthBar();
    },
  },
  // Uncommon - Lower weights
  {
    rarity: "uncommon",
    name: "Fire Power",
    desc: "Pack in some more explosives! (4 attack)",
    apply: (player) => (player.stats.atk += 4),
    weight: 15,
    condition: (player) => player.stats.atk < 100,
  },
  {
    rarity: "uncommon",
    name: "Speed Boost",
    desc: "Nitro enriched fuel! (40 speed)",
    apply: (player) => (player.stats.speed += 40),
    condition: (player) => player.stats.speed < 600,
    weight: 13,
  },
  {
    rarity: "uncommon",
    name: "Better Handling",
    desc: "Lube up the tracks (0.005 turn rate)",
    apply: (player) => (player.stats.turnSpeed += 0.005),
    condition: (player) => player.stats.turnSpeed < 0.1,
    weight: 12,
  },
  {
    rarity: "uncommon",
    name: "Reinforced Armor",
    desc: "A couple of plates (2 armor)",
    apply: (player) => (player.stats.armor += 2),
    weight: 12,
  },
  {
    rarity: "uncommon",
    name: "More Bulk",
    desc: "Proper bulking of the tank (40 hp)",
    apply: (player) => {
      player.stats.maxHealth += 40;
      player.stats.currentHealth += 40;
      player.updateHealthBar();
    },
    weight: 12,
    condition: (player) => player.stats.maxHealth < 1000,
  },
  {
    rarity: "uncommon",
    name: "Passive Repair",
    desc: "Some more automated drones to repair (1 HPS)",
    apply: (player) => (player.stats.regen += 1),
    weight: 11,
    condition: (player) => player.stats.regen < 50,
  },
  {
    rarity: "common",
    name: "Patch up",
    desc: "Need half a tank? (50% HP recovered)",
    weight: 15,
    apply: (player) => {
      player.stats.currentHealth = player.stats.maxHealth;
      player.updateHealthBar();
    },
  },
  // Rare - Lowest weights
  {
    rarity: "rare",
    name: "Fire Power",
    desc: "Top of the line ammo (8 attack)",
    apply: (player) => (player.stats.atk += 8),
    weight: 8,
    condition: (player) => player.stats.atk < 100,
  },
  {
    rarity: "rare",
    name: "Speed Boost",
    desc: "Let's add another Turbo! (80 speed)",
    apply: (player) => (player.stats.speed += 80),
    condition: (player) => player.stats.speed < 600,
    weight: 7,
  },
  {
    rarity: "rare",
    name: "Better Handling",
    desc: "Tokyo Drift! (0.01 turn rate)",
    apply: (player) => (player.stats.turnSpeed += 0.01),
    condition: (player) => player.stats.turnSpeed < 0.1,
    weight: 6,
  },
  {
    rarity: "rare",
    name: "Reinforced Armor",
    desc: "The best armor plates around (5 armor)",
    apply: (player) => (player.stats.armor += 5),
    weight: 7,
  },
  {
    rarity: "rare",
    name: "More Bulk",
    desc: "Only the best to ensure the tank doesn't buckle (100 HP)",
    apply: (player) => {
      player.stats.maxHealth += 100;
      player.stats.currentHealth += 100;
      player.updateHealthBar();
    },
    weight: 6,
    condition: (player) => player.stats.maxHealth < 1000,
  },
  {
    rarity: "rare",
    name: "Passive Repair",
    desc: "Resorting to demonic powers to help keep the tank going (2 HPS)",
    apply: (player) => (player.stats.regen += 2),
    weight: 5,
    condition: (player) => player.stats.regen < 50,
  },
  {
    rarity: "rare",
    name: "Extra Projectile",
    desc: "We'll be able to cram another projectile in!",
    apply: (player) => player.stats.projectiles++,
    weight: 5,
    condition: (player) => player.stats.projectiles < 4,
  },
  {
    rarity: "rare",
    name: "Patch up",
    desc: "Full repair - A renewed tank! (100% HP recovered)",
    weight: 10,
    apply: (player) => {
      player.stats.currentHealth = player.stats.maxHealth;
      player.updateHealthBar();
    },
  },
];
