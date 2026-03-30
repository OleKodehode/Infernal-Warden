// You can write more code here

/* START OF COMPILED CODE */

import Player from "../prefabs/Player.js";
/* START-USER-IMPORTS */
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

		// waveInformation
		const waveInformation = this.add.container(640, 30);
		hUD.add(waveInformation);

		// timeLeftText
		const timeLeftText = this.add.text(0, 50, "", {});
		timeLeftText.setOrigin(0.5, 0);
		timeLeftText.text = "90";
		timeLeftText.setStyle({ "fontFamily": "Arial", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 6, "shadow.offsetX": 2, "shadow.offsetY": 2, "shadow.blur": 5, "shadow.stroke": true });
		timeLeftText.setPadding({"left":5,"top":5,"right":5,"bottom":5});
		waveInformation.add(timeLeftText);

		// waveText
		const waveText = this.add.text(0, 0, "", {});
		waveText.setOrigin(0.5, 0);
		waveText.text = "WAVE 1";
		waveText.setStyle({ "fontFamily": "Arial", "fontSize": "42px", "stroke": "#000000ff", "strokeThickness": 6, "shadow.offsetX": 2, "shadow.offsetY": 2, "shadow.blur": 5, "shadow.stroke": true });
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
		upgrade1.setInteractive(new Phaser.Geom.Rectangle(-77, -225, 253, 450), Phaser.Geom.Rectangle.Contains);
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
		upgradeName1.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth": 250, "fontFamily": "Arial", "fontSize": "38px", "maxLines": 2, "stroke": "#b60303ff", "strokeThickness": 1 });
		upgradeName1.setWordWrapWidth(230);
		upgrade1.add(upgradeName1);

		// upgradeDesc1
		const upgradeDesc1 = this.add.text(51, 12, "", {});
		upgradeDesc1.setOrigin(0.5, 0.5);
		upgradeDesc1.text = "Increase your attack power by +2";
		upgradeDesc1.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth": 250, "fontFamily": "Arial", "fontSize": "32px", "stroke": "#b60303ff", "shadow.offsetX": 1, "shadow.offsetY": 1, "shadow.color": "#b60303ff", "shadow.fill": true });
		upgradeDesc1.setPadding({"left":5,"top":5,"right":5,"bottom":5});
		upgradeDesc1.setLineSpacing(10);
		upgradeDesc1.setWordWrapWidth(240);
		upgrade1.add(upgradeDesc1);

		// upgrade2
		const upgrade2 = this.add.container(480, 112);
		upgrade2.setInteractive(new Phaser.Geom.Rectangle(-77, -225, 253, 450), Phaser.Geom.Rectangle.Contains);
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
		upgradeName2.setStyle({ "align": "center", "color": "#000", "fixedWidth": 250, "fontFamily": "Arial", "fontSize": "38px", "maxLines": 2, "stroke": "#b60303ff", "strokeThickness": 1, "shadow.offsetX": 2, "shadow.offsetY": 2, "shadow.color": "#b60303ff" });
		upgradeName2.setWordWrapWidth(230);
		upgrade2.add(upgradeName2);

		// upgradeDesc2
		const upgradeDesc2 = this.add.text(51, 15, "", {});
		upgradeDesc2.setOrigin(0.5, 0.5);
		upgradeDesc2.text = "Increase your speed by +10";
		upgradeDesc2.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth": 250, "fontFamily": "Arial", "fontSize": "32px", "stroke": "#b60303ff", "shadow.offsetX": 1, "shadow.offsetY": 1, "shadow.color": "#b60303ff", "shadow.fill": true });
		upgradeDesc2.setLineSpacing(10);
		upgradeDesc2.setWordWrapWidth(240);
		upgrade2.add(upgradeDesc2);

		// upgrade3
		const upgrade3 = this.add.container(864, 112);
		upgrade3.setInteractive(new Phaser.Geom.Rectangle(-77, -225, 253, 450), Phaser.Geom.Rectangle.Contains);
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
		upgradeName3.setStyle({ "align": "center", "color": "#000", "fixedWidth": 250, "fontFamily": "Arial", "fontSize": "38px", "maxLines": 2, "stroke": "#b60303ff", "strokeThickness": 1 });
		upgradeName3.setWordWrapWidth(230);
		upgrade3.add(upgradeName3);

		// upgradeDesc3
		const upgradeDesc3 = this.add.text(51, 15, "", {});
		upgradeDesc3.setOrigin(0.5, 0.5);
		upgradeDesc3.text = "Increase your defense by +1";
		upgradeDesc3.setStyle({ "align": "center", "color": "#000", "fixedWidth": 250, "fontFamily": "Arial", "fontSize": "32px", "stroke": "#b60303ff", "shadow.offsetX": 1, "shadow.offsetY": 1, "shadow.color": "#b60303ff", "shadow.fill": true, "resolution": 2 });
		upgradeDesc3.setLineSpacing(10);
		upgradeDesc3.setWordWrapWidth(240);
		upgrade3.add(upgradeDesc3);

		// upgradeTitle
		const upgradeTitle = this.add.text(400, 64, "", {});
		upgradeTitle.text = "WAVE X COMPLETE!";
		upgradeTitle.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "48px", "stroke": "#f80101ff", "strokeThickness": 4, "shadow.stroke": true, "resolution": 2 });
		upgradeScreen.add(upgradeTitle);

		// upgradeSub
		const upgradeSub = this.add.text(480, 144, "", {});
		upgradeSub.text = "Choose an upgrade";
		upgradeSub.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "32px", "stroke": "#f80101ff", "strokeThickness": 4, "shadow.stroke": true, "resolution": 2 });
		upgradeScreen.add(upgradeSub);

		this.player = player;
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
		this.hUD = hUD;

		this.events.emit("scene-awake");
	}

	/** @type {Player} */
	player;
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
	/** @type {Phaser.GameObjects.Container} */
	hUD;

	/* START-USER-CODE */
  	/** @returns {void} */
	preload() {

		this.load.pack("Init-Asset-Pack", "assets/Init-Asset-Pack.json");
	}
  // =========== Upgrade System ===========
  upgradeCategories = {
    attack: [
      {
        name: "Fire Power",
        desc: "Increase attack power by 2",
        apply: () => this.player.stats.atk += 2,
      },
      {
        name: "Fire Rate",
        desc: "Increase fire rate by 0.2",
        apply: () => this.player.stats.fireRate += 0.2
      },
      {
        name:"Extra Projectile",
        desc: "Add an additional projectile to each attack",
        apply: () => this.player.stats.projectiles++,
      }
    ],
    mobility: [
      {
        name: "Speed Boost",
        desc: "Increase top speed by 20",
        apply: () => this.player.stats.speed += 20,
      },
      {
        name: "Turn Rate",
        desc: "Increase turn rate by 0.05",
        apply: () => this.player.turnSpeed += 0.05,
      }
    ],
    defense: [
      {
        name: "Reinforced Hitpoints",
        desc: "Increase max HP of your tank by 20",
        apply: () => {
          this.player.stats.maxHealth += 20;
          this.player.stats.currentHealth += 20;
          this.player.updateHealthBar();
        }
      },
      {
        name: "Repair your tank",
        desc: "Repair your tank, restoring it back to full HP",
        apply: () => {
          this.player.stats.currentHealth = this.player.stats.maxHealth
          this.player.updateHealthBar();
        },
      },
      {
        name: "Reinforced Armor",
        desc: "Increase your armor by +1, decreasing the amount of damage you take",
        apply: () => this.player.stats.armor++,
      }
    ]
  }

  // Write your code here

  create() {
    this.editorCreate();

    // Arena setup
    // Arena is at 0,0 with width of 1500 and height of 1100s
    this.physics.world.setBounds(0, 0, 1500, 1100);

    // Camera Setup
    // Camera should see some of the outer bounds
    this.cameras.main.setBounds(-150, -150, 1800, 1400);

    // Putting the player in position and the camera
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
      test: "SPACE"
    });
    this.input.gamepad.once("connected", (pad) => (this.pad = pad));

    // Physics
    this.player.body.setDamping(true);
    this.player.body.setDrag(0.05);
    this.player.setDepth(5);

    // particles
    this.dust = this.add.particles(0, 0, "dust-texture", {
      scale: { start: 1.25, end: 0 },
      alpha: { start: 0.3, end: 0 },
      lifespan: 3200,
      speed: 60,
      frequency: -1,
      blendMode: "NORMAL",
    });

    this.dust.setDepth(4);

    this.mouseMoved = false;
    this.time.addEvent({
      delay: 100,
      callback: () => this.mouseMoved = false,
      loop: true
    })

    this.input.on("pointermove", () => this.mouseMoved = true);

    // Attach HUD to the camera
    this.hUD.setScrollFactor(0); // Make it stay fixed on the screen
    this.hUD.setDepth(100); // Make sure it stays ontop of everything

    // Wave info
    this.wave = 1;
    this.waveTime = 5;
    this.isWaveActive = true;

    this.startWave();
    this.playerCanMove = true;
  }

  update() {
    if (!this.player || !this.player.isAlive) return;

    if (this.upgradeScreen && this.upgradeScreen.visible) {
      this.player.body.setVelocity(0,0);
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

    this.player.updateTurret(pointer.worldX, pointer.worldY, this.mouseMoved);

    // Test for damage taken.
    if (this.input.keyboard.checkDown(this.keys.test, 500)) {
      this.player.takeDamage(15);
      console.log(this.player.stats.currentHealth);
    }
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
    this.waveTime = 5;

    this.waveText.setText(`WAVE ${this.wave}`);
    this.timeLeftText.setText(`${this.waveTime}`);

    this.waveTimer = this.time.addEvent({
      delay: 1000, // 1 sec
      callback: this.tickWaveTimer,
      callbackScope: this,
      loop: true
    });
  }

  tickWaveTimer() {
    if (!this.isWaveActive) return;

    this.waveTime--;
    this.timeLeftText.setText(`${this.waveTime}`);
    this.player.stats.currentHealth += this.player.stats.regen;

    if (this.waveTime <= 0) this.endWave();
  }

  pausePlayerInput() {
    this.playerCanMove = false;
    this.player.body.setVelocity(0,0);
  }

  resumePlayerInput() {
    this.playerCanMove = true;
  }

  endWave() {
    this.isWaveActive = false;
    if (this.waveTimer) this.waveTimer.remove(false);

    this.pausePlayerInput();
    this.showUpgradeScreen();
  }

  showUpgradeScreen() {
    const screen = this.upgradeScreen;
    if (!screen) return;

    screen.setVisible(true);
    screen.setDepth(200);
    // Update title
    this.upgradeTitle.setText(`WAVE ${this.wave} COMPLETE!`)

    // Extra safety
    this.pausePlayerInput();

    // Pick random upgrades
    const attackUpg = Phaser.Utils.Array.GetRandom(this.upgradeCategories.attack);
    const mobilityUpg = Phaser.Utils.Array.GetRandom(this.upgradeCategories.mobility);
    const defenseUpg = Phaser.Utils.Array.GetRandom(this.upgradeCategories.defense);

    // Helper function 
    this.applyUpgradeToBox(this.upgrade1, attackUpg);
    this.applyUpgradeToBox(this.upgrade2, mobilityUpg);
    this.applyUpgradeToBox(this.upgrade3, defenseUpg);


  }

  applyUpgradeToBox(box, upgrade) {
    if (!box) return;

    // Update name and descriptions
    const nameTxt = box === this.upgrade1 ? this.upgradeName1 : box === this.upgrade2 ? this.upgradeName2 : this.upgradeName3;
    const descTxt = box === this.upgrade1 ? this.upgradeDesc1 : box == this.upgrade2 ? this.upgradeDesc2 : this.upgradeDesc3;
    const btn = box === this.upgrade1 ? this.upgradeBtn1 : box === this.upgrade2 ? this.upgradeBtn2 : this.upgradeBtn3;

    if (nameTxt) nameTxt.setText(upgrade.name);
    if (descTxt) descTxt.setText(upgrade.desc);

    if (btn) {
      // Making sure the button is in screen space
      btn.setScrollFactor(0);

      // Hopefully clean and properly set interactive spac e
      btn.setInteractive({
        useHandCursor: true,
        hitArea: new Phaser.Geom.Rectangle(0, 0, btn.width, btn.height),
        hitAreaCallback: Phaser.Geom.Rectangle.Contains
      });

      // Removal of old listeners to prevent stacking.
      btn.off("pointerover");
      btn.off("pointerout");
      btn.off("pointerdown");

      // Hover effects
      btn.on("pointerover", () => btn.setScale(1.05))
      btn.on("pointerout", () => btn.setScale(1));
      // button action
      btn.on("pointerdown", () => {
        upgrade.apply();
        this.upgradeScreen.setVisible(false);
        this.resumePlayerInput();
        this.wave += 1;
        this.startWave();
      });
    }
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
