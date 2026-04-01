// You can write more code here

/* START OF COMPILED CODE */

import LarvaEnemy from "../prefabs/LarvaEnemy.js";
import MagmaEnemy from "../prefabs/MagmaEnemy.js";
import Player from "../prefabs/Player.js";
import StatsPanel from "../prefabs/StatsPanel.js";
/* START-USER-IMPORTS */
import { allUpgrades } from "../utils/upgrades.js";
/* END-USER-IMPORTS */

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // Lava
    const lava = this.add.container(-150, -150);

    // Outer Border
    const outer_Border = this.add.rectangle(0, 0, 1800, 1400);
    outer_Border.setOrigin(0, 0);
    outer_Border.isFilled = true;
    outer_Border.fillColor = 14814734;
    lava.add(outer_Border);

    // Arena
    const arena = this.add.container(0, 0);

    // Floor
    const floor = this.add.rectangle(0, 0, 1500, 1100);
    floor.setOrigin(0, 0);
    floor.isFilled = true;
    floor.fillColor = 3615017;
    arena.add(floor);

    // Entities
    this.add.container(0, 0);

    // player
    const player = new Player(this, 0, 0);
    this.add.existing(player);

    // HUD
    const hUD = this.add.container(0, 0);

    // statsPanel
    const statsPanel = new StatsPanel(this, 128, 160);
    hUD.add(statsPanel);

    // waveInformation
    const waveInformation = this.add.container(640, 30);
    hUD.add(waveInformation);

    // timeLeftText
    const timeLeftText = this.add.text(0, 50, "", {});
    timeLeftText.setOrigin(0.5, 0);
    timeLeftText.text = "90";
    timeLeftText.setStyle({
      fontFamily: "Arial",
      fontSize: "28px",
      stroke: "#000000ff",
      strokeThickness: 6,
      "shadow.offsetX": 2,
      "shadow.offsetY": 2,
      "shadow.blur": 5,
      "shadow.stroke": true,
    });
    timeLeftText.setPadding({ left: 5, top: 5, right: 5, bottom: 5 });
    waveInformation.add(timeLeftText);

    // waveText
    const waveText = this.add.text(0, 0, "", {});
    waveText.setOrigin(0.5, 0);
    waveText.text = "WAVE 1";
    waveText.setStyle({
      fontFamily: "Arial",
      fontSize: "42px",
      stroke: "#000000ff",
      strokeThickness: 6,
      "shadow.offsetX": 2,
      "shadow.offsetY": 2,
      "shadow.blur": 5,
      "shadow.stroke": true,
    });
    waveInformation.add(waveText);

    // upgradeScreen
    const upgradeScreen = this.add.container(0, 0);
    upgradeScreen.visible = false;
    hUD.add(upgradeScreen);

    // overlay
    const overlay = this.add.rectangle(0, 0, 1280, 800);
    overlay.setOrigin(0, 0);
    overlay.isFilled = true;
    overlay.fillColor = 0;
    overlay.fillAlpha = 0.8;
    upgradeScreen.add(overlay);

    // upgradeContainers
    const upgradeContainers = this.add.container(105, 395);
    upgradeScreen.add(upgradeContainers);

    // upgrade1
    const upgrade1 = this.add.container(96, 112);
    upgradeContainers.add(upgrade1);

    // upgradeBtn1
    const upgradeBtn1 = this.add.rectangle(51, 0, 250, 450);
    upgradeBtn1.isFilled = true;
    upgradeBtn1.fillAlpha = 0.5;
    upgradeBtn1.setRounded(10);
    upgrade1.add(upgradeBtn1);

    // upgradeName1
    const upgradeName1 = this.add.text(48, -160, "", {});
    upgradeName1.setOrigin(0.5, 0.5);
    upgradeName1.text = "Fire Power";
    upgradeName1.setStyle({
      align: "center",
      color: "#000000ff",
      fixedWidth: 250,
      fontFamily: "Arial",
      fontSize: "38px",
      maxLines: 2,
      stroke: "#b60303ff",
      strokeThickness: 1,
    });
    upgradeName1.setWordWrapWidth(230);
    upgrade1.add(upgradeName1);

    // upgradeDesc1
    const upgradeDesc1 = this.add.text(51, 12, "", {});
    upgradeDesc1.setOrigin(0.5, 0.5);
    upgradeDesc1.text = "Increase your attack power by +2";
    upgradeDesc1.setStyle({
      align: "center",
      color: "#000000ff",
      fixedWidth: 250,
      fontFamily: "Arial",
      fontSize: "32px",
      stroke: "#b60303ff",
      "shadow.offsetX": 1,
      "shadow.offsetY": 1,
      "shadow.color": "#b60303ff",
      "shadow.fill": true,
    });
    upgradeDesc1.setPadding({ left: 5, top: 5, right: 5, bottom: 5 });
    upgradeDesc1.setLineSpacing(10);
    upgradeDesc1.setWordWrapWidth(240);
    upgrade1.add(upgradeDesc1);

    // upgrade2
    const upgrade2 = this.add.container(480, 112);
    upgradeContainers.add(upgrade2);

    // upgradeBtn2
    const upgradeBtn2 = this.add.rectangle(51, 0, 250, 450);
    upgradeBtn2.isFilled = true;
    upgradeBtn2.fillAlpha = 0.5;
    upgradeBtn2.setRounded(10);
    upgrade2.add(upgradeBtn2);

    // upgradeName2
    const upgradeName2 = this.add.text(48, -160, "", {});
    upgradeName2.setOrigin(0.5, 0.5);
    upgradeName2.text = "Mobility";
    upgradeName2.setStyle({
      align: "center",
      color: "#000",
      fixedWidth: 250,
      fontFamily: "Arial",
      fontSize: "38px",
      maxLines: 2,
      stroke: "#b60303ff",
      strokeThickness: 1,
      "shadow.offsetX": 2,
      "shadow.offsetY": 2,
      "shadow.color": "#b60303ff",
    });
    upgradeName2.setWordWrapWidth(230);
    upgrade2.add(upgradeName2);

    // upgradeDesc2
    const upgradeDesc2 = this.add.text(51, 15, "", {});
    upgradeDesc2.setOrigin(0.5, 0.5);
    upgradeDesc2.text = "Increase your speed by +10";
    upgradeDesc2.setStyle({
      align: "center",
      color: "#000000ff",
      fixedWidth: 250,
      fontFamily: "Arial",
      fontSize: "32px",
      stroke: "#b60303ff",
      "shadow.offsetX": 1,
      "shadow.offsetY": 1,
      "shadow.color": "#b60303ff",
      "shadow.fill": true,
    });
    upgradeDesc2.setLineSpacing(10);
    upgradeDesc2.setWordWrapWidth(240);
    upgrade2.add(upgradeDesc2);

    // upgrade3
    const upgrade3 = this.add.container(864, 112);
    upgradeContainers.add(upgrade3);

    // upgradeBtn3
    const upgradeBtn3 = this.add.rectangle(51, 0, 250, 450);
    upgradeBtn3.isFilled = true;
    upgradeBtn3.fillAlpha = 0.5;
    upgradeBtn3.setRounded(10);
    upgrade3.add(upgradeBtn3);

    // upgradeName3
    const upgradeName3 = this.add.text(48, -160, "", {});
    upgradeName3.setOrigin(0.5, 0.5);
    upgradeName3.text = "Defense";
    upgradeName3.setStyle({
      align: "center",
      color: "#000",
      fixedWidth: 250,
      fontFamily: "Arial",
      fontSize: "38px",
      maxLines: 2,
      stroke: "#b60303ff",
      strokeThickness: 1,
    });
    upgradeName3.setWordWrapWidth(230);
    upgrade3.add(upgradeName3);

    // upgradeDesc3
    const upgradeDesc3 = this.add.text(51, 15, "", {});
    upgradeDesc3.setOrigin(0.5, 0.5);
    upgradeDesc3.text = "Increase your defense by +1";
    upgradeDesc3.setStyle({
      align: "center",
      color: "#000",
      fixedWidth: 250,
      fontFamily: "Arial",
      fontSize: "32px",
      stroke: "#b60303ff",
      "shadow.offsetX": 1,
      "shadow.offsetY": 1,
      "shadow.color": "#b60303ff",
      "shadow.fill": true,
      resolution: 2,
    });
    upgradeDesc3.setLineSpacing(10);
    upgradeDesc3.setWordWrapWidth(240);
    upgrade3.add(upgradeDesc3);

    // upgradeTitle
    const upgradeTitle = this.add.text(400, 64, "", {});
    upgradeTitle.text = "WAVE X COMPLETE!";
    upgradeTitle.setStyle({
      align: "center",
      color: "#ffffffff",
      fontFamily: "Arial",
      fontSize: "48px",
      stroke: "#f80101ff",
      strokeThickness: 4,
      "shadow.stroke": true,
      resolution: 2,
    });
    upgradeScreen.add(upgradeTitle);

    // upgradeSub
    const upgradeSub = this.add.text(480, 144, "", {});
    upgradeSub.text = "Choose an upgrade";
    upgradeSub.setStyle({
      align: "center",
      color: "#ffffffff",
      fontFamily: "Arial",
      fontSize: "32px",
      stroke: "#f80101ff",
      strokeThickness: 4,
      "shadow.stroke": true,
      resolution: 2,
    });
    upgradeScreen.add(upgradeSub);

    // pauseScreen
    const pauseScreen = this.add.container(0, 0);
    pauseScreen.visible = false;
    hUD.add(pauseScreen);

    // pauseOverlay
    const pauseOverlay = this.add.rectangle(640, 400, 1280, 800);
    pauseOverlay.isFilled = true;
    pauseOverlay.fillColor = 0;
    pauseOverlay.fillAlpha = 0.85;
    pauseScreen.add(pauseOverlay);

    // pauseText
    const pauseText = this.add.text(544, 64, "", {});
    pauseText.text = "PAUSED";
    pauseText.setStyle({ fontFamily: "Arial", fontSize: "48px" });
    pauseScreen.add(pauseText);

    // pauseContinueBtn
    const pauseContinueBtn = this.add.container(640, 304);
    pauseScreen.add(pauseContinueBtn);

    // continueBtnBg
    const continueBtnBg = this.add.rectangle(0, 0, 240, 60);
    continueBtnBg.isFilled = true;
    continueBtnBg.fillColor = 1973790;
    continueBtnBg.setRounded(10);
    pauseContinueBtn.add(continueBtnBg);

    // text_1
    const text_1 = this.add.text(0, 0, "", {});
    text_1.setOrigin(0.5, 0.5);
    text_1.text = "Continue";
    text_1.setStyle({ fontFamily: "Arial", fontSize: "36px" });
    pauseContinueBtn.add(text_1);

    // pauseRetryBtn
    const pauseRetryBtn = this.add.container(640, 412);
    pauseScreen.add(pauseRetryBtn);

    // continueBtnBg_1
    const continueBtnBg_1 = this.add.rectangle(0, 0, 240, 60);
    continueBtnBg_1.isFilled = true;
    continueBtnBg_1.fillColor = 1973790;
    continueBtnBg_1.setRounded(10);
    pauseRetryBtn.add(continueBtnBg_1);

    // text
    const text = this.add.text(0, 0, "", {});
    text.setOrigin(0.5, 0.5);
    text.text = "Retry";
    text.setStyle({ fontFamily: "Arial", fontSize: "36px" });
    pauseRetryBtn.add(text);

    // pauseMenuBtn
    const pauseMenuBtn = this.add.container(640, 520);
    pauseScreen.add(pauseMenuBtn);

    // continueBtnBg_2
    const continueBtnBg_2 = this.add.rectangle(0, 0, 240, 60);
    continueBtnBg_2.isFilled = true;
    continueBtnBg_2.fillColor = 1973790;
    continueBtnBg_2.setRounded(10);
    pauseMenuBtn.add(continueBtnBg_2);

    // text_2
    const text_2 = this.add.text(0, 0, "", {});
    text_2.setOrigin(0.5, 0.5);
    text_2.text = "Main Menu";
    text_2.setStyle({ fontFamily: "Arial", fontSize: "36px" });
    pauseMenuBtn.add(text_2);

    this.player = player;
    this.statsPanel = statsPanel;
    this.timeLeftText = timeLeftText;
    this.waveText = waveText;
    this.waveInformation = waveInformation;
    this.upgradeBtn1 = upgradeBtn1;
    this.upgradeName1 = upgradeName1;
    this.upgradeDesc1 = upgradeDesc1;
    this.upgrade1 = upgrade1;
    this.upgradeBtn2 = upgradeBtn2;
    this.upgradeName2 = upgradeName2;
    this.upgradeDesc2 = upgradeDesc2;
    this.upgrade2 = upgrade2;
    this.upgradeBtn3 = upgradeBtn3;
    this.upgradeName3 = upgradeName3;
    this.upgradeDesc3 = upgradeDesc3;
    this.upgrade3 = upgrade3;
    this.upgradeContainers = upgradeContainers;
    this.upgradeTitle = upgradeTitle;
    this.upgradeScreen = upgradeScreen;
    this.text_1 = text_1;
    this.pauseContinueBtn = pauseContinueBtn;
    this.text = text;
    this.pauseRetryBtn = pauseRetryBtn;
    this.text_2 = text_2;
    this.pauseMenuBtn = pauseMenuBtn;
    this.pauseScreen = pauseScreen;
    this.hUD = hUD;

    this.events.emit("scene-awake");
  }

  /** @type {Player} */
  player;
  /** @type {StatsPanel} */
  statsPanel;
  /** @type {Phaser.GameObjects.Text} */
  timeLeftText;
  /** @type {Phaser.GameObjects.Text} */
  waveText;
  /** @type {Phaser.GameObjects.Container} */
  waveInformation;
  /** @type {Phaser.GameObjects.Rectangle} */
  upgradeBtn1;
  /** @type {Phaser.GameObjects.Text} */
  upgradeName1;
  /** @type {Phaser.GameObjects.Text} */
  upgradeDesc1;
  /** @type {Phaser.GameObjects.Container} */
  upgrade1;
  /** @type {Phaser.GameObjects.Rectangle} */
  upgradeBtn2;
  /** @type {Phaser.GameObjects.Text} */
  upgradeName2;
  /** @type {Phaser.GameObjects.Text} */
  upgradeDesc2;
  /** @type {Phaser.GameObjects.Container} */
  upgrade2;
  /** @type {Phaser.GameObjects.Rectangle} */
  upgradeBtn3;
  /** @type {Phaser.GameObjects.Text} */
  upgradeName3;
  /** @type {Phaser.GameObjects.Text} */
  upgradeDesc3;
  /** @type {Phaser.GameObjects.Container} */
  upgrade3;
  /** @type {Phaser.GameObjects.Container} */
  upgradeContainers;
  /** @type {Phaser.GameObjects.Text} */
  upgradeTitle;
  /** @type {Phaser.GameObjects.Container} */
  upgradeScreen;
  /** @type {Phaser.GameObjects.Text} */
  text_1;
  /** @type {Phaser.GameObjects.Container} */
  pauseContinueBtn;
  /** @type {Phaser.GameObjects.Text} */
  text;
  /** @type {Phaser.GameObjects.Container} */
  pauseRetryBtn;
  /** @type {Phaser.GameObjects.Text} */
  text_2;
  /** @type {Phaser.GameObjects.Container} */
  pauseMenuBtn;
  /** @type {Phaser.GameObjects.Container} */
  pauseScreen;
  /** @type {Phaser.GameObjects.Container} */
  hUD;

  /* START-USER-CODE */
  /** @returns {void} */
  preload() {
    this.load.pack("Init-Asset-Pack", "assets/Init-Asset-Pack.json");
  }

  bullets = [];
  bulletPoolSize = 100;
  lastShot = 0;
  magmaPool = [];
  larvaPool = [];
  enemyBullets = [];
  enemies = null; // Gets set in create
  spawnIndicators = []; // pool of indicators
  lastHitTime = 0;
  autofire = false;
  lastToggle = 0;
  gamepadAiming = false;
  isPaused = false;
  lastPauseTime = 0;

  // Write your code here

  create() {
    this.editorCreate();

    // Hooking pause buttons up to methods
    this.setupPauseButton(this.pauseContinueBtn, () => this.resumeGame());
    this.setupPauseButton(this.pauseRetryBtn, () => this.scene.restart());
    this.setupPauseButton(this.pauseMenuBtn, () =>
      this.scene.start("MainMenu"),
    );

    // Pause screen fix
    if (this.pauseScreen) {
      this.pauseScreen.setScrollFactor(0);
      this.pauseScreen.setDepth(500);
    }

    // have to make sure the buttosns are within screen space too
    [this.pauseContinueBtn, this.pauseRetryBtn, this.pauseMenuBtn].forEach(
      (btn) => {
        if (btn) btn.setScrollFactor(0);
      },
    );

    // Arena & Camera setup
    // Arena is at 0,0 with width of 1500 and height of 1100s
    this.physics.world.setBounds(0, 0, 1500, 1100);
    this.cameras.main.setBounds(-150, -150, 1800, 1400);
    this.player.setPosition(750, 550);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

    // Input
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys({
      w: "W",
      up: "UP",
      s: "S",
      down: "DOWN",
      a: "A",
      left: "LEFT",
      d: "D",
      right: "RIGHT",
      autoFireToggle: "SPACE",
      pause: "ESC",
    });
    this.input.gamepad.once("connected", (pad) => (this.pad = pad));

    // Physics
    this.player.body.setDamping(true);
    this.player.body.setDrag(0.2);
    this.player.setDepth(5);

    // Bullet pool
    this.createBulletPool();

    // Enemies
    this.enemies = this.physics.add.group();
    this.createMagmaPool();
    this.createLarvaPool();

    this.createEnemyBulletPool(); // Enemy bullets for larva

    // Spawn indicators - Multiple can be visible at once
    this.spawnIndicators = [];
    for (let i = 0; i < 40; i++) {
      const indicator = this.add.image(0, 0, "pentagram");
      indicator.setScale(1.2);
      indicator.setAlpha(0.8);
      indicator.setDepth(1);
      indicator.setVisible(false);
      this.spawnIndicators.push(indicator);
    }

    // Enemy Collisions
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.onPlayerHitEnemy,
      null,
      this,
    );
    // Collision for player bullets and enemies
    this.physics.add.overlap(
      this.bullets,
      this.enemies,
      this.onBulletHitEnemy,
      null,
      this,
    );
    // Collision for enemy bullets and the player
    this.physics.add.overlap(
      this.player,
      this.enemyBullets,
      this.onEnemyBulletHitPlayer,
      null,
      this,
    );
    // enemy bullets should ignore other enemies (also prevents self-collision)
    this.physics.world.removeCollider(
      this.physics.add.overlap(this.enemyBullets, this.enemies),
    );

    // particles
    this.dust = this.add.particles(0, 0, "dust-texture", {
      scale: { start: 1.25, end: 0 },
      alpha: { start: 0.3, end: 0 },
      lifespan: 3200,
      speed: 60,
      frequency: -1,
      blendMode: "NORMAL",
    });

    this.dust.setDepth(2);

    this.mouseMoved = false;
    this.time.addEvent({
      delay: 100,
      callback: () => (this.mouseMoved = false),
      loop: true,
    });

    this.input.on("pointermove", () => (this.mouseMoved = true));

    // Attach HUD to the camera
    this.hUD.setScrollFactor(0); // Make it stay fixed on the screen
    this.hUD.setDepth(100); // Make sure it stays ontop of everything

    // Wave info
    this.wave = 1;
    this.isWaveActive = true;

    this.startWave();
    this.playerCanMove = true;
  }

  update() {
    if (!this.player || !this.player.isAlive || !this.isWaveActive) return;
    const now = this.time.now;

    // Pause handling
    if (
      this.input.keyboard.checkDown(this.keys.pause, 300) &&
      now - this.lastPauseTime > 300
    ) {
      this.lastPauseTime = now;
      if (this.isPaused) {
        this.resumeGame();
      } else {
        this.pauseGame();
      }
      return;
    }

    if (this.isPaused) return; // Block execution if the game is paused

    if (this.upgradeScreen && this.upgradeScreen.visible) {
      this.player.body.setVelocity(0, 0);
      return;
    }

    const moveInput = this.getInputDirection();
    const isMovingInput = moveInput.length() > 0.1;

    if (isMovingInput) {
      let targetAngle = moveInput.angle();

      targetAngle = Phaser.Math.Angle.Wrap(targetAngle);

      this.player.chassis.rotation = Phaser.Math.Angle.RotateTo(
        this.player.chassis.rotation,
        targetAngle,
        this.player.stats.turnSpeed,
      );

      // Movement based on chassis direction
      const currentRotation = this.player.chassis.rotation;
      this.player.body.setVelocity(
        Math.cos(currentRotation) * this.player.stats.speed,
        Math.sin(currentRotation) * this.player.stats.speed,
      );

      this.player.setScale(1.5 + Math.sin(this.time.now * 0.02) * 0.02);
      this.dust.emitParticleAt(this.player.x, this.player.y);
    }

    const pointer = this.input.activePointer;

    // Game pad aiming
    if (this.pad) {
      const rx = this.pad.rightStick.x;
      const ry = this.pad.rightStick.y;

      if (Math.abs(rx) > 0.15 || Math.abs(ry) > 0.15) {
        this.gamepadAiming = true;
        const aimAngle = Math.atan2(ry, rx);
        this.player.turret.rotation = Phaser.Math.Angle.RotateTo(
          this.player.turret.rotation,
          aimAngle,
          0.12,
        );
      } else {
        this.gamepadAiming = false;
      }
    }

    if (!this.gamepadAiming) {
      this.player.updateTurret(pointer.worldX, pointer.worldY, this.mouseMoved);
    }

    // Test for damage taken.
    if (
      (this.input.keyboard.checkDown(this.keys.autoFireToggle, 300) ||
        (this.pad && this.pad?.B)) &&
      now - this.lastToggle > 300
    ) {
      this.autoFire = !this.autoFire;
      this.lastToggle = now;

      console.log("Auto-fire:", this.autoFire ? "ON" : "OFF");
    }

    const shouldShoot = this.input.activePointer.isDown || this.pad?.A;

    if (shouldShoot || this.autoFire) {
      this.tryShoot();
    }

    this.updateBullets(); // clean off-screen bullets
    this.updateEnemyBullets();
    this.updateStatsPanel();
    this.enemies.getChildren().forEach((enemy) => {
      if (enemy.isAlive && enemy.update) {
        enemy.update(this.player);
      }
    });
  }

  /**
   * Input manager
   * @returns {Phaser.Math.Vector2}
   */
  getInputDirection() {
    let x = 0;
    let y = 0;

    // keyboard inputs
    if (this.keys.a.isDown || this.keys.left.isDown) {
      x = -1;
    } else if (this.keys.d.isDown || this.keys.right.isDown) {
      x = 1;
    }

    if (this.keys.w.isDown || this.keys.up.isDown) {
      y = -1;
    } else if (this.keys.s.isDown || this.keys.down.isDown) {
      y = 1;
    }

    // Game pad (left stick)
    if (this.pad) {
      x += this.pad.leftStick.x;
      y += this.pad.leftStick.y;
    }

    const direction = new Phaser.Math.Vector2(x, y);

    return direction.length() > 0 ? direction.normalize() : direction;
  }

  startWave() {
    this.isWaveActive = true;
    // this.waveTime = Math.min(0 + (this.wave * 5), 60)
    this.waveTime = Math.min(25 + this.wave * 5, 60);

    this.waveText.setText(`WAVE ${this.wave}`);
    this.timeLeftText.setText(`${this.waveTime}`);

    // How many enemies should be alive at most during the wave
    this.currentSpawnLimit = Math.floor(8 + this.wave * 2.8);
    if (this.wave > 10)
      this.currentSpawnLimit = Math.floor(this.currentSpawnLimit * 1.35);

    this.waveTimer = this.time.addEvent({
      delay: 1000, // 1 sec
      callback: this.tickWaveTimer,
      callbackScope: this,
      loop: true,
    });

    this.spawnTimer = this.time.addEvent({
      delay: 1500, // Try to spawn enemies every 1.5 seconds
      callback: this.trySpawnEnemy,
      callbackScope: this,
      loop: true,
    });

    this.trySpawnEnemy(); // Spawn a wave immediately
  }

  tickWaveTimer() {
    if (!this.isWaveActive) return;

    this.waveTime--;
    this.timeLeftText.setText(`${this.waveTime}`);

    const p = this.player.stats;
    if (p.currentHealth < p.maxHealth) {
      p.currentHealth = Math.min(p.currentHealth + p.regen, p.maxHealth);
      this.player.updateHealthBar();
    }

    if (this.waveTime <= 0) this.endWave();
  }

  pausePlayerInput() {
    this.playerCanMove = false;
    this.player.body.setVelocity(0, 0);
  }

  resumePlayerInput() {
    this.playerCanMove = true;
  }

  endWave() {
    this.isWaveActive = false;
    if (this.waveTimer) this.waveTimer.remove(false);
    if (this.spawnTimer) this.spawnTimer.remove(false);

    this.spawnIndicators.forEach((e) => e.setVisible(false));

    // Stop any running spawn animations
    this.tweens.killTweensOf(this.spawnIndicators);

    // Disable all enemies when wave ends
    this.enemies.getChildren().forEach((enemy) => {
      if (enemy.isAlive) {
        enemy.isAlive = false;
        enemy.healthBar.setVisible(false);
        enemy.setActive(false);
        enemy.setVisible(false);
        if (enemy.body) enemy.body.enable = false;
      }
    });

    this.enemyBullets.forEach((b) => {
      b.setActive(false);
      b.setVisible(false);
      if (b.body) {
        b.body.enable = false;
        b.body.setVelocity(0, 0);
      }
    });

    this.pausePlayerInput();
    this.showUpgradeScreen();
  }

  showUpgradeScreen() {
    const screen = this.upgradeScreen;
    if (!screen) return;

    screen.setVisible(true);
    screen.setDepth(200);
    // Update title
    this.upgradeTitle.setText(`WAVE ${this.wave} COMPLETE!`);

    // Extra safety
    this.pausePlayerInput();

    let available = allUpgrades.filter(
      (upg) => !upg.condition || upg.condition(this.player),
    );

    // Pick 3 random upgrades using weights
    const chosen = [];
    for (let i = 0; i < 3; i++) {
      if (available.length === 0) break;
      const picked = this.getWeightedRandom(available);
      chosen.push(picked);
      const chosenIndex = available.indexOf(picked);
      if (chosenIndex > -1) available.splice(chosenIndex, 1);
    }

    // Fallback if we somehow have less than 3
    while (chosen.length < 3) {
      chosen.push(allUpgrades[6]); // 20% HP recovery - I know, magic number.
    }

    // Helper function
    this.applyUpgradeToBox(this.upgrade1, chosen[0]);
    this.applyUpgradeToBox(this.upgrade2, chosen[1]);
    this.applyUpgradeToBox(this.upgrade3, chosen[2]);
  }

  applyUpgradeToBox(box, upgrade) {
    if (!box) return;

    // Update name and descriptions
    const nameTxt =
      box === this.upgrade1
        ? this.upgradeName1
        : box === this.upgrade2
          ? this.upgradeName2
          : this.upgradeName3;
    const descTxt =
      box === this.upgrade1
        ? this.upgradeDesc1
        : box == this.upgrade2
          ? this.upgradeDesc2
          : this.upgradeDesc3;
    const btn =
      box === this.upgrade1
        ? this.upgradeBtn1
        : box === this.upgrade2
          ? this.upgradeBtn2
          : this.upgradeBtn3;

    if (nameTxt) nameTxt.setText(upgrade.name);
    if (descTxt) descTxt.setText(upgrade.desc);

    switch (upgrade.rarity) {
      case "rare":
        nameTxt.setColor("#0084ff"); // Blue
        break;
      case "uncommon":
        nameTxt.setColor("#00ff00"); // Green
        break;
      default:
        nameTxt.setColor("#fff"); // White
        break;
    }

    if (btn) {
      // Making sure the button is in screen space
      btn.setScrollFactor(0);

      // Hopefully clean and properly set interactive spac e
      btn.setInteractive({
        useHandCursor: true,
        hitArea: new Phaser.Geom.Rectangle(0, 0, btn.width, btn.height),
        hitAreaCallback: Phaser.Geom.Rectangle.Contains,
      });

      // Removal of old listeners to prevent stacking.
      btn.off("pointerover");
      btn.off("pointerout");
      btn.off("pointerdown");

      // Hover effects
      btn.on("pointerover", () => btn.setScale(1.05));
      btn.on("pointerout", () => btn.setScale(1));
      // button action
      btn.on("pointerdown", () => {
        upgrade.apply(this.player);
        this.upgradeScreen.setVisible(false);
        this.resumePlayerInput();
        this.wave += 1;
        this.startWave();
      });
    }
  }

  createBulletPool() {
    this.bullets = [];
    for (let i = 0; i < this.bulletPoolSize; i++) {
      const bullet = this.add.circle(0, 0, 6, 0xffdd44); // Orangey circle for now
      bullet.setVisible(false);
      bullet.setActive(false);

      this.physics.add.existing(bullet, false); // arcade physics body for colliding
      bullet.body.setCircle(7);

      bullet.damage = 10; // Placeholder - but also the default value
      bullet.speed = 500;

      this.bullets.push(bullet);
    }
  }

  tryShoot() {
    if (!this.isWaveActive) return;
    const now = this.time.now;
    const fireRate = this.player.stats.fireRate || 1000; // 1000 is default

    if (now - this.lastShot < fireRate) return;

    const numbProjectiles = Phaser.Math.Clamp(
      this.player.stats.projectiles || 1,
      1,
      5,
    );

    for (let i = 0; i < numbProjectiles; i++) {
      this.time.delayedCall(i * 80, () => this.fireBullet());
    }

    this.lastShot = now;
  }

  fireBullet() {
    const bullet = this.getInactiveBullet();
    if (!bullet) return;

    // Spawn at turret tip using muzzle offset
    const angle = this.player.turret.rotation;
    const spawnX = this.player.x + Math.cos(angle) * this.player.muzzleOffset;
    const spawnY = this.player.y + Math.sin(angle) * this.player.muzzleOffset;

    bullet.setPosition(spawnX, spawnY);
    bullet.setVisible(true);
    bullet.setActive(true);
    if (bullet.body) bullet.body.enable = true;
    bullet.damage = this.player.stats.atk || 10;
    bullet.setDepth(3);

    const speed = bullet.speed;
    bullet.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
  }

  getInactiveBullet() {
    for (let bullet of this.bullets) {
      if (!bullet.active) return bullet;
    }
    return;
  }

  updateBullets() {
    for (let bullet of this.bullets) {
      if (!bullet.active) continue;

      // despawn if too far off screen
      if (
        bullet.x < -200 ||
        bullet.x > 1900 ||
        bullet.y < -200 ||
        bullet.y > 1500
      ) {
        bullet.setVisible(false);
        bullet.setActive(false);
        bullet.body.setVelocity(0, 0);
      }
    }
  }

  getWeightedRandom(array, weightKey = "weight") {
    if (!array || array.length === 0) return null;

    let totalWeight = 0;
    for (let item of array) {
      totalWeight += item[weightKey] || 1;
    }

    let random = Math.random() * totalWeight;

    for (let item of array) {
      random -= item[weightKey] || 1;
      if (random <= 0) return item;
    }

    return array[array.length - 1]; // fallback
  }

  updateStatsPanel() {
    if (this.statsPanel) {
      this.statsPanel.updateStats(this.player);
    }
  }

  trySpawnEnemy() {
    console.log("Attempting to spawn enemies");
    if (!this.isWaveActive) return;

    const aliveCount = this.enemies
      .getChildren()
      .filter((e) => e.isAlive).length;

    if (aliveCount >= this.currentSpawnLimit) {
      console.log("Cap is reached", aliveCount);
      return;
    }

    // Find a safe spawn position
    let x, y;
    let attempts = 0; // counter to exit if too many attempts were made
    const minDistanceFromPlayer = 200;

    do {
      const angle = Math.random() * Math.PI * 2;
      const dist = 650 + Math.random() * 200;
      x = this.player.x + Math.cos(angle) * dist;
      y = this.player.y + Math.sin(angle) * dist;

      // Keep inside arena
      x = Phaser.Math.Clamp(x, 80, 1200);
      y = Phaser.Math.Clamp(y, 80, 800);

      attempts++;
    } while (
      Phaser.Math.Distance.Between(x, y, this.player.x, this.player.y) <
        minDistanceFromPlayer &&
      attempts < 12
    );

    // Show warning
    this.showSpawnWarning(x, y);
  }

  showSpawnWarning(x, y) {
    // Find unused indicator from the pool
    let indicator = this.spawnIndicators.find((e) => !e.visible);

    if (!indicator) {
      // Safety fallback - Create a new one on the fly if there are none. Should be unlikely
      indicator = this.add.image(0, 0, "pentagram");
      indicator.setScale(1.2);
      indicator.setAlpha(0.8);
      indicator.setDepth(1);
      this.spawnIndicators.push(indicator);
    }

    indicator.setPosition(x, y);
    indicator.setVisible(true);
    indicator.setAlpha(0.9);
    indicator.setScale(0.6);

    // Scale up animation + spawn enemy afterwards
    this.tweens.add({
      targets: indicator,
      scale: 1.25,
      alpha: 0.65,
      duration: 1500,
      ease: "Sine.easeOut",
      onComplete: () => {
        indicator.setVisible(false);

        // Safety check - Is the player too close?
        const finalDistance = Phaser.Math.Distance.Between(
          x,
          y,
          this.player.x,
          this.player.y,
        );

        if (finalDistance < 180) {
          console.log("Player too close");
          this.trySpawnEnemy();
          return;
        }

        // Spawn/ reuse the enemy
        const wave = this.wave;
        const type = this.selectEnemyType(wave);
        let enemy;

        // Switch to switch statement if more enemies are added
        if (type === "magma") {
          enemy = this.magmaPool.find((e) => !e.active);
          if (!enemy) {
            // add another to the pool if we ran out somehow
            enemy = new MagmaEnemy(this, x, y);
            this.add.existing(enemy);
            this.enemies.add(enemy);
            this.magmaPool.push(enemy);
          }
        } else {
          enemy = this.larvaPool.find((e) => !e.active);
          if (!enemy) {
            enemy = new LarvaEnemy(this, x, y);
            this.add.existing(enemy);
            this.enemies.add(enemy);
            this.larvaPool.push(enemy);
          }
        }
        enemy.spawn(x, y, wave);
      },
    });
  }

  onPlayerHitEnemy(player, enemy) {
    const now = this.time.now;
    if (now - this.lastHitTime < 800) return; // 800ms i-frames

    this.lastHitTime = now;

    if (enemy.stats && enemy.stats.dmg) {
      player.takeDamage(enemy.stats.dmg);
    }

    // Tank trample damage
    if (enemy.takeDamage) {
      const trample = player.stats.trample || 6; // 6 is default
      enemy.takeDamage(trample);

      // Apply a stn timer
      enemy.stunTime = now + 400;

      // gentle knockback
      const dx = enemy.x - player.x;
      const dy = enemy.y - player.y;
      const dist = Math.hypot(dx, dy) || 1;

      const knockbackForce = 50;
      enemy.body.setVelocity(
        (dx / dist) * knockbackForce,
        (dy / dist) * knockbackForce,
      );
    }
  }

  onBulletHitEnemy(bullet, enemy) {
    if (!bullet.active) return;
    bullet.setActive(false);
    bullet.setVisible(false);
    bullet.body.setVelocity(0, 0);
    bullet.body.enable = false;

    if (enemy.takeDamage) {
      enemy.takeDamage(this.player.stats.atk || 10);
    }
  }

  createMagmaPool() {
    for (let i = 0; i < 60; i++) {
      // 60 magma pool - Increase if necessary
      const enemy = new MagmaEnemy(this, -2000, -2000); // Spawn off-screen
      enemy.setActive(false);
      enemy.setVisible(false);
      this.add.existing(enemy);
      this.enemies.add(enemy);
      this.magmaPool.push(enemy);
    }
  }

  createLarvaPool() {
    for (let i = 0; i < 40; i++) {
      // 40 larva pool - Should be less shooters overall
      const enemy = new LarvaEnemy(this, -2000, -2000);
      enemy.setActive(false);
      enemy.setVisible(false);
      this.add.existing(enemy);
      this.enemies.add(enemy);
      this.larvaPool.push(enemy);
    }
  }

  createEnemyBulletPool() {
    for (let i = 0; i < 50; i++) {
      // Adjust pool as necessary
      const bullet = this.add.circle(0, 0, 5, 0xff2200);
      bullet.setVisible(false);
      bullet.setActive(false);
      this.physics.add.existing(bullet, false);
      bullet.body.setCircle(6);
      bullet.damage = 10; // placeholder
      bullet.speed = 260;
      this.enemyBullets.push(bullet);
    }
  }

  selectEnemyType(wave) {
    if (wave < 4) return "magma";

    const larvaChance = Math.min(0.25 + (wave - 2) * 0.07, 0.65); // More common the further the player goes
    return Math.random() < larvaChance ? "larva" : "magma";
  }

  fireEnemyBullet(x, y, angle, damage) {
    const bullet = this.getInactiveEnemyBullet();
    if (!bullet) return;

    bullet.setPosition(x, y);
    bullet.setVisible(true);
    bullet.setActive(true);
    bullet.damage = damage || 10;
    bullet.setDepth(3);
    if (bullet.body) bullet.body.enable = true;

    const speed = bullet.speed;
    bullet.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
  }

  getInactiveEnemyBullet() {
    for (let bullet of this.enemyBullets) {
      if (!bullet.active) return bullet;
    }
    return null;
  }

  updateEnemyBullets() {
    for (let bullet of this.enemyBullets) {
      if (!bullet.active) continue;
      if (
        bullet.x < -200 ||
        bullet.x > 1900 ||
        bullet.y < -200 ||
        bullet.y > 1500
      ) {
        bullet.setVisible(false);
        bullet.setActive(false);
        bullet.body.setVelocity(0, 0);
      }
    }
  }

  onEnemyBulletHitPlayer(player, bullet) {
    if (!bullet.active) return;

    const now = this.time.now;
    if (now - this.lastHitTime < 800) {
      // despawn the bullet but don't get hit
      bullet.setActive(false);
      bullet.setVisible(false);
      if (bullet.body) {
        bullet.body.setVelocity(0, 0);
        bullet.body.enable = false;
      }
    }

    this.lastHitTime = now;

    bullet.setActive(false);
    bullet.setVisible(false);
    if (bullet.body) {
      bullet.body.setVelocity(0, 0);
      bullet.body.enable = false;
    }

    player.takeDamage(bullet.damage || 10);
  }

  pauseGame() {
    if (this.isPaused) return;
    this.isPaused = true;
    if (this.pauseScreen) this.pauseScreen.visible = true;
    this.physics.pause();
    if (this.spawnTimer) this.spawnTimer.paused = true;
    if (this.waveTimer) this.waveTimer.paused = true;

    // Pause all active tweens (animations)
    this.tweens.pauseAll();
  }

  resumeGame() {
    if (!this.isPaused) return;
    this.isPaused = false;

    if (this.pauseScreen) this.pauseScreen.visible = false;

    this.physics.resume();

    if (this.spawnTimer) this.spawnTimer.paused = false;
    if (this.waveTimer) this.waveTimer.paused = false;

    this.tweens.resumeAll();
  }

  setupPauseButton(btnContainer, onClickCallback) {
    if (!btnContainer) return;

    if (!btnContainer.list || btnContainer.list.length === 0) return;
    const txt = btnContainer.list.find((child) => child.type === "Text");
    const bg = btnContainer.list.find((child) => child.type === "Rectangle");

    if (!bg) return;

    const width = bg.width || 240;
    const height = bg.height || 60;

    btnContainer.setInteractive({
      useHandCursor: true,
      hitArea: new Phaser.Geom.Rectangle(-width / 2, -height / 2, 240, 60),
      hitAreaCallback: Phaser.Geom.Rectangle.Contains,
    });

    // Hover effect
    btnContainer.on("pointerover", () => {
      btnContainer.setScale(1.08);
      if (txt) txt.setStyle({ color: "#ffdd00" });
    });
    btnContainer.on("pointerout", () => {
      btnContainer.setScale(1);
      if (txt) txt.setStyle({ color: "#fff" });
    });

    // click
    btnContainer.on("pointerdown", () => {
      if (onClickCallback) onClickCallback();
    });
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
