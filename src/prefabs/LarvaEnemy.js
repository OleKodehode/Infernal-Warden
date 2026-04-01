// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LarvaEnemy extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x ?? 0, y ?? 0);

    // bodySprite
    const bodySprite = scene.add.ellipse(0, 0, 80, 40);
    bodySprite.isFilled = true;
    bodySprite.fillColor = 4656911;
    bodySprite.isStroked = true;
    bodySprite.strokeColor = 2829099;
    bodySprite.lineWidth = 3;
    this.add(bodySprite);

    // healthBar
    const healthBar = scene.add.container(0, -35);
    this.add(healthBar);

    // healthBg
    const healthBg = scene.add.rectangle(0, 0, 62, 12);
    healthBg.isFilled = true;
    healthBg.fillColor = 3538944;
    healthBg.isStroked = true;
    healthBg.strokeColor = 1250067;
    healthBg.lineWidth = 3;
    healthBar.add(healthBg);

    // healthFill
    const healthFill = scene.add.rectangle(-30, 0, 60, 10);
    healthFill.setOrigin(0, 0.5);
    healthFill.isFilled = true;
    healthFill.fillColor = 12059395;
    healthBar.add(healthFill);

    /* START-USER-CTR-CODE */
    this.bodySprite = bodySprite;
    this.healthBar = healthBar;
    this.healthFill = healthFill;

    this.stats = {
      maxHealth: 18,
      currentHealth: 18,
      dmg: 12,
      speed: 105,
      fireRate: 1500,
    };

    this.stunTime = 0;
    this.lastHitTime = 0;
    this.isAlive = false;
    this.isCharging = false;
    this.chargeStartTime = 0;
    this.originalColor = bodySprite.fillColor; // Temporary until sprite is in place
    this.lastTrampleTime = 0;

    this.updateHealthBar();

    // Physics
    this.scene.physics.add.existing(this, false);
    this.body.setCircle(38);
    this.body.setOffset(-38, -38);
    this.body.setDrag(80);
    this.body.setCollideWorldBounds(true);
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */
  update(player) {
    if (!this.isAlive || !player) return;
    if (this.scene.time.now < this.stunTime) return;

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx);

    // Body should rotate towards the player, health bar should stay screen-upright
    if (this.bodySprite) this.bodySprite.rotation = angle;

    const MIN_RANGE = 320;
    const now = this.scene.time.now;

    if (dist > MIN_RANGE) {
      // Chase the player
      const speed = this.stats.speed;
      this.body.setVelocity((dx / dist) * speed, (dy / dist) * speed);

      // reset charging state when moving
      if (this.isCharging && now - this.chargeStartTime > 800) {
        this.isCharging = false;
        if (this.bodySprite) this.bodySprite.fillColor = this.originalColor;
      }
    } else {
      // Stop and shoot (finishes the shot regardless)
      this.body.setVelocity(0, 0);

      // Wind up to attack
      if (!this.isCharging) {
        this.isCharging = true;
        this.chargeStartTime = now;

        // Visual telegraph
        if (this.bodySprite) {
          // this.bodySprite.setTint(0xff5500);
          this.bodySprite.fillColor = 0xff5500;
        }
      }

      const windUpTime = 650;

      if (now - this.chargeStartTime >= windUpTime) {
        const spawnX = this.x + Math.cos(angle) * 50;
        const spawnY = this.y + Math.sin(angle) * 50;
        this.scene.fireEnemyBullet(spawnX, spawnY, angle, this.stats.dmg);

        if (dist < MIN_RANGE) {
          this.chargeStartTime = now;
          this.isCharging = true;
        } else {
          // if (this.bodySprite) this.bodySprite.clearTint();
          if (this.bodySprite) this.bodySprite.fillColor = this.originalColor;
        }
      }
    }
  }

  updateHealthBar() {
    const percent = Phaser.Math.Clamp(
      this.stats.currentHealth / this.stats.maxHealth,
      0,
      1,
    );
    if (this.healthFill) this.healthFill.width = 60 * percent;
  }

  takeDamage(amount) {
    if (!this.isAlive) return;
    const now = this.scene.time.now;
    if (now - this.lastHitTime < 20) return;

    this.lastHitTime = now;
    this.stats.currentHealth -= amount;

    if (this.stats.currentHealth <= 0) {
      this.die();
    } else {
      this.updateHealthBar();
    }
  }

  takeTrampleDamage(amount) {
    const now = this.scene.time.now;
    if (now - this.lastTrampleTime < 500) return;

    this.lastTrampleTime = now;
    this.takeDamage(amount);
  }

  die() {
    if (!this.isAlive) return;
    this.isAlive = false;
    if (this.healthBar) this.healthBar.setVisible(false);
    // if (this.bodySprite) this.bodySprite.clearTint(); // clear tint on death
    if (this.bodySprite) this.bodySprite.fillColor = this.originalColor;

    this.scene.tweens.add({
      targets: this,
      scaleY: 0.15,
      scaleX: 1.45,
      alpha: 0.25,
      duration: 400,
      ease: "Sine.easeIn",
      onComplete: () => {
        this.setActive(false);
        this.setVisible(false);
        if (this.body) this.body.enable = false;
      },
    });
  }

  spawn(x, y, wave = 1) {
    if (!this.scene || !this.body) return; // Safety check for restarting
    this.setPosition(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.setScale(1);
    this.alpha = 1;
    if (this.body) this.body.enable = true;
    if (this.healthBar) this.healthBar.setVisible(true);

    this.lastHitTime = 0;

    const mult = 1 + (wave - 1) * 0.28;
    this.stats.maxHealth = Math.floor(18 * mult);
    this.stats.currentHealth = this.stats.maxHealth;
    this.stats.dmg = Math.floor(12 * (1 + (wave - 1) * 0.18));

    this.isAlive = true;
    this.updateHealthBar();
    if (this.body) this.body.setVelocity(0, 0);
  }

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
