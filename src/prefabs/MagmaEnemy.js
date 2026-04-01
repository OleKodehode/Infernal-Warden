// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MagmaEnemy extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x ?? 0, y ?? 0);

    // ellipse_1
    const ellipse_1 = scene.add.ellipse(30, 30, 60, 60);
    ellipse_1.setInteractive(
      new Phaser.Geom.Circle(28, 28, 28),
      Phaser.Geom.Circle.Contains,
    );
    ellipse_1.isFilled = true;
    ellipse_1.fillColor = 15821830;
    ellipse_1.isStroked = true;
    ellipse_1.strokeColor = 16187392;
    ellipse_1.lineWidth = 4;
    this.add(ellipse_1);

    // healthBar
    const healthBar = scene.add.container(30, -15);
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
    // Write your code here.
    this.bodySprite = ellipse_1; // Swap out with a sprite later - Just reusing the circle for now
    this.healthBar = healthBar;
    this.healthFill = healthFill;

    this.stats = {
      maxHealth: 10,
      currentHealth: 10,
      dmg: 10,
      speed: 135,
    };
    this.stunTime = 0;
    this.lastTrampleTime = 0;

    this.isAlive = false;
    this.updateHealthBar();

    this.scene.physics.add.existing(this, false);
    this.body.setCircle(28);
    this.body.setDrag(80);
    this.body.setOffset(0, 0);
    this.body.setCollideWorldBounds(true);
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */
  update(player) {
    if (!this.isAlive || !player) return;

    if (this.scene.time.now < this.stunTime) return; // Skip movement for a short time.

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.hypot(dx, dy);

    if (dist < 40) {
      // stop when very close
      this.body.setVelocity(0, 0);
      return;
    }

    const speed = this.stats.speed;
    this.body.setVelocity((dx / dist) * speed, (dy / dist) * speed);
  }

  updateHealthBar() {
    const percent = Phaser.Math.Clamp(
      this.stats.currentHealth / this.stats.maxHealth,
      0,
      1,
    );
    this.healthFill.width = 60 * percent; // Width of the healthbar is 60
  }

  takeDamage(amount) {
    if (!this.isAlive) return;
    const now = this.scene.time.now;
    if (now - this.lastHitTime < 20) return; // 150ms i-frames for enemies

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
    if (!this.isAlive) return; // No need to die more than once
    this.isAlive = false;

    this.healthBar.setVisible(false);

    this.body.setVelocity(0, 0);

    // Simple squish death animation
    this.scene.tweens.add({
      targets: this,
      scaleY: 0.15,
      scaleX: 1.45,
      alpha: 0.25,
      duration: 380,
      ease: "Sine.easeIn",
      onComplete: () => {
        this.setActive(false);
        this.setVisible(false);
        this.body.enable = false;
      },
    });
  }

  // Called for spawning
  spawn(x, y, wave = 1) {
    if (!this.scene || !this.body) return; // Safety check for restarting
    this.setPosition(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.setScale(1);
    this.alpha = 1;
    this.body.enable = true;
    this.healthBar.setVisible(true);
    this.lastHitTime = 0;

    // wave scaling
    const mult = 1 + (wave - 1) * 0.28;
    this.stats.maxHealth = Math.floor(15 * mult);
    this.stats.currentHealth = this.stats.maxHealth;
    this.stats.dmg = Math.floor(10 * (1 + (wave - 1) * 0.18));

    this.isAlive = true;
    this.updateHealthBar();
    if (this.body) this.body.setVelocity(0, 0); // to prevent any weird velocity issues.
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
