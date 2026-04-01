// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x ?? 449, y ?? 152);

    this.scaleX = 1.5;
    this.scaleY = 1.5;
    scene.physics.add.existing(this, false);
    this.body.setCircle(32);
    this.body.setOffset(-32, -32);
    this.body.collideWorldBounds = true;

    // healthBar
    const healthBar = scene.add.container(0, 40);
    this.add(healthBar);

    // healthBg
    const healthBg = scene.add.rectangle(0, 0, 62, 12);
    healthBg.isFilled = true;
    healthBg.fillColor = 3342336;
    healthBg.isStroked = true;
    healthBg.strokeColor = 1250067;
    healthBg.lineWidth = 3;
    healthBar.add(healthBg);

    // healthFill
    const healthFill = scene.add.rectangle(-30, 0, 60, 10);
    healthFill.setOrigin(0, 0.5);
    healthFill.isFilled = true;
    healthFill.fillColor = 1488899;
    healthBar.add(healthFill);

    // chassis
    const chassis = scene.add.image(0, 0, "chassis-medium");
    this.add(chassis);

    // turret
    const turret = scene.add.image(0, 0, "turret-medium");
    this.add(turret);

    this.chassis = chassis;
    this.turret = turret;

    /* START-USER-CTR-CODE */
    // Player stats
    this.healthFill = healthFill;
    this.healthBar = healthBar;
    this.stats = {
      speed: 180,
      turnSpeed: 0.01,
      maxHealth: 100.0,
      currentHealth: 100.0,
      atk: 12,
      fireRate: 1000,
      projectiles: 1,
      regen: 1.0,
      armor: 0,
      trample: 6,
    };
    this.muzzleOffset = 58;
    this.isAlive = true;
    this.updateHealthBar();
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @type {Phaser.GameObjects.Image} */
  chassis;
  /** @type {Phaser.GameObjects.Image} */
  turret;

  /* START-USER-CODE */

  // Write your code here.
  updateTurret(targetX, targetY, isMouseMoving) {
    if (!isMouseMoving) return;
    const targetAngle = Phaser.Math.Angle.Between(
      this.x,
      this.y,
      targetX,
      targetY,
    );

    this.turret.rotation = Phaser.Math.Angle.RotateTo(
      this.turret.rotation,
      targetAngle,
      0.1,
    );
  }

  updateHealthBar() {
    const healthBarWidth = 60; // Change depending on what is in the editor (player.scene)
    const percent = Phaser.Math.Clamp(
      this.stats.currentHealth / this.stats.maxHealth,
      0,
      1,
    );
    this.healthFill.width = healthBarWidth * percent;

    if (percent < 0.3) {
      this.healthFill.setFillStyle(0xff3300);
    } else {
      this.healthFill.setFillStyle(0x16b803);
    }
  }

  takeDamage(amount) {
    if (!this.isAlive) return;

    // Armor reduction (max 70% reduction)
    const reduction = Math.min(this.stats.armor * 0.035, 0.7);
    const finalDamage = Math.max(Math.floor(amount * (1 - reduction)), 1);

    this.stats.currentHealth -= finalDamage;
    if (this.stats.currentHealth < 0) this.stats.currentHealth = 0;
    this.updateHealthBar();

    if (this.chassis) this.chassis.setTint(0xff55000);
    if (this.turret) this.turret.setTint(0xff55500);

    this.scene.time.delayedCall(80, () => {
      if (this.isAlive) {
        if (this.chassis) this.chassis.clearTint();
        if (this.turret) this.turret.clearTint();
      }
    });

    if (this.stats.currentHealth <= 0) {
      this.die();
    }
  }

  die() {
    if (!this.isAlive) return;
    this.isAlive = false;
    this.healthBar.setVisible(false);

    // Visual death feedback
    if (this.chassis) this.chassis.setTint(0x880000);
    if (this.turret) this.turret.setVisible(false);

    // Freeze the tank completely
    this.body.setVelocity(0, 0);
    this.body.setAngularVelocity(0);
    this.body.enable = false; // Should stop all physics

    this.turret.rotation = this.chassis.rotation;

    this.scene.input.keyboard.enabled = false; // Global disable of inputs

    // Camera shake + fade
    this.scene.cameras.main.shake(600, 0.008);
    this.scene.cameras.main.fadeOut(800);

    this.scene.time.delayedCall(900, () => {
      this.scene.showGameOver();
    });

    this.scene.time.delayedCall(1000, () =>
      this.scene.cameras.main.fadeIn(200),
    );
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
