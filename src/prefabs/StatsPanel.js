// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatsPanel extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x ?? 0, y ?? 0);

    // rectangle_1
    const rectangle_1 = scene.add.rectangle(0, 0, 220, 280);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 1973790;
    rectangle_1.fillAlpha = 0.75;
    rectangle_1.isStroked = true;
    rectangle_1.strokeColor = 11601414;
    rectangle_1.lineWidth = 4;
    rectangle_1.setRounded(12);
    this.add(rectangle_1);

    // panelTitle
    const panelTitle = scene.add.text(-41, -134, "", {});
    panelTitle.text = "STATS";
    panelTitle.setStyle({ fontFamily: "Arial", fontSize: "26px" });
    this.add(panelTitle);

    // statsContainer
    const statsContainer = scene.add.container(-106, -62);
    this.add(statsContainer);

    // hpText
    const hpText = scene.add.text(4.888888888888889, -32, "", {});
    hpText.setOrigin(0, 0.5);
    hpText.text = "HP:";
    hpText.setStyle({});
    statsContainer.add(hpText);

    // atkText
    const atkText = scene.add.text(4.888888888888889, 49, "", {});
    atkText.setOrigin(0, 0.5);
    atkText.text = "Attack:";
    atkText.setStyle({});
    statsContainer.add(atkText);

    // speedTxt
    const speedTxt = scene.add.text(4.888888888888889, 130, "", {});
    speedTxt.setOrigin(0, 0.5);
    speedTxt.text = "Speed:";
    speedTxt.setStyle({});
    statsContainer.add(speedTxt);

    // turnText
    const turnText = scene.add.text(4.888888888888889, 157, "", {});
    turnText.setOrigin(0, 0.5);
    turnText.text = "Turn Rate:";
    turnText.setStyle({});
    statsContainer.add(turnText);

    // armorTxt
    const armorTxt = scene.add.text(4.888888888888889, 22, "", {});
    armorTxt.setOrigin(0, 0.5);
    armorTxt.text = "Armor:";
    armorTxt.setStyle({});
    statsContainer.add(armorTxt);

    // regenTxt
    const regenTxt = scene.add.text(4.888888888888889, -5, "", {});
    regenTxt.setOrigin(0, 0.5);
    regenTxt.text = "Regen (HPS):";
    regenTxt.setStyle({});
    statsContainer.add(regenTxt);

    // projectileTxt
    const projectileTxt = scene.add.text(4.888888888888889, 103, "", {});
    projectileTxt.setOrigin(0, 0.5);
    projectileTxt.text = "Projectiles:";
    projectileTxt.setStyle({});
    statsContainer.add(projectileTxt);

    // fireRateTxt
    const fireRateTxt = scene.add.text(4.888888888888889, 76, "", {});
    fireRateTxt.setOrigin(0, 0.5);
    fireRateTxt.text = "Fire Rate:";
    fireRateTxt.setStyle({});
    statsContainer.add(fireRateTxt);

    // hpValue
    const hpValue = scene.add.text(129.88888888888889, -32, "", {});
    hpValue.setOrigin(0, 0.5);
    hpValue.text = "VALUE";
    hpValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(hpValue);

    // regenValue
    const regenValue = scene.add.text(129.88888888888889, -5, "", {});
    regenValue.setOrigin(0, 0.5);
    regenValue.text = "VALUE";
    regenValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(regenValue);

    // armorValue
    const armorValue = scene.add.text(129.88888888888889, 22, "", {});
    armorValue.setOrigin(0, 0.5);
    armorValue.text = "VALUE";
    armorValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(armorValue);

    // attackValue
    const attackValue = scene.add.text(129.88888888888889, 49, "", {});
    attackValue.setOrigin(0, 0.5);
    attackValue.text = "VALUE";
    attackValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(attackValue);

    // fireRateValue
    const fireRateValue = scene.add.text(129.88888888888889, 76, "", {});
    fireRateValue.setOrigin(0, 0.5);
    fireRateValue.text = "VALUE";
    fireRateValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(fireRateValue);

    // projectilesValue
    const projectilesValue = scene.add.text(129.88888888888889, 103, "", {});
    projectilesValue.setOrigin(0, 0.5);
    projectilesValue.text = "VALUE";
    projectilesValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(projectilesValue);

    // speedValue
    const speedValue = scene.add.text(129.88888888888889, 130, "", {});
    speedValue.setOrigin(0, 0.5);
    speedValue.text = "VALUE";
    speedValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(speedValue);

    // turnRateValue
    const turnRateValue = scene.add.text(129.88888888888889, 157, "", {});
    turnRateValue.setOrigin(0, 0.5);
    turnRateValue.text = "VALUE";
    turnRateValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(turnRateValue);

    // trampleTxt
    const trampleTxt = scene.add.text(4.888888888888889, 184, "", {});
    trampleTxt.setOrigin(0, 0.5);
    trampleTxt.text = "Trample:";
    trampleTxt.setStyle({});
    statsContainer.add(trampleTxt);

    // trampleValue
    const trampleValue = scene.add.text(129.88888888888889, 184, "", {});
    trampleValue.setOrigin(0, 0.5);
    trampleValue.text = "VALUE";
    trampleValue.setStyle({ color: "#07df00ff" });
    statsContainer.add(trampleValue);

    this.hpValue = hpValue;
    this.regenValue = regenValue;
    this.armorValue = armorValue;
    this.attackValue = attackValue;
    this.fireRateValue = fireRateValue;
    this.projectilesValue = projectilesValue;
    this.speedValue = speedValue;
    this.turnRateValue = turnRateValue;
    this.trampleValue = trampleValue;
    this.statsContainer = statsContainer;

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @type {Phaser.GameObjects.Text} */
  hpValue;
  /** @type {Phaser.GameObjects.Text} */
  regenValue;
  /** @type {Phaser.GameObjects.Text} */
  armorValue;
  /** @type {Phaser.GameObjects.Text} */
  attackValue;
  /** @type {Phaser.GameObjects.Text} */
  fireRateValue;
  /** @type {Phaser.GameObjects.Text} */
  projectilesValue;
  /** @type {Phaser.GameObjects.Text} */
  speedValue;
  /** @type {Phaser.GameObjects.Text} */
  turnRateValue;
  /** @type {Phaser.GameObjects.Text} */
  trampleValue;
  /** @type {Phaser.GameObjects.Container} */
  statsContainer;

  /* START-USER-CODE */
  updateStats(player) {
    if (!player || !player.stats) {
      console.log("Something went wrong with inputted player:", player);
    }

    const stats = player.stats;

    this.hpValue.setText(
      `${Math.floor(stats.currentHealth)}/${Math.floor(stats.maxHealth)}`,
    );
    this.regenValue.setText(stats.regen.toFixed(1));
    this.armorValue.setText(stats.armor);
    this.attackValue.setText(stats.atk);
    this.fireRateValue.setText((stats.fireRate || 1000) + "ms");
    this.projectilesValue.setText(stats.projectiles);
    this.speedValue.setText(stats.speed);
    this.turnRateValue.setText(stats.turnSpeed.toFixed(3));
    this.trampleValue.setText(stats.trample);

    // Dynamic Colors
    const setValueColor = (textObj, current, max) => {
      if (max && current >= max && textObj !== this.fireRateValue) {
        textObj.setColor("#0084ff"); // Blue - Capped
        return;
      }
      if (textObj === this.fireRateValue && max && current <= max) {
        textObj.setColor("#0084ff");
        return;
      }
    };

    setValueColor(this.hpValue, stats.currentHealth, 800);
    setValueColor(this.attackValue, stats.atk, 100);
    setValueColor(this.fireRateValue, stats.fireRate, 500);
    setValueColor(this.speedValue, stats.speed, 500);
    setValueColor(this.turnRateValue, stats.turnSpeed, 0.03);
    setValueColor(this.regenValue, stats.regen, 20);
    setValueColor(this.projectilesValue, stats.projectiles, 4);
    setValueColor(this.trampleValue, stats.trample, 100);
    // Armor doesn't have a cap

    if (stats.currentHealth / stats.maxHealth < 0.3) {
      this.hpValue.setColor("#ff3300");
    } else {
      this.hpValue.setColor("#07df00ff");
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
