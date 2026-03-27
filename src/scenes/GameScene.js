// You can write more code here

/* START OF COMPILED CODE */

import MediumTank from "../prefabs/MediumTank.js";
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
    const player = new MediumTank(this, 0, 0);
    this.add.existing(player);

    this.player = player;

    this.events.emit("scene-awake");
  }

  /** @type {MediumTank} */
  player;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    // Arena setup
    // Arena is at 0,0 with width of 1500 and height of 1100
    this.physics.world.setBounds(0, 0, 1500, 1100);

    // Camera Setup
    // Camera should see some of the outer bounds
    this.cameras.main.setBounds(-150, -150, 1800, 1400);

	// Putting the player in position and the camera
    this.player.setPosition(750, 550);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

	// Player stats
    this.playerStats = { speed: 220, turnSpeed: 0.05 };
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
    });
    this.input.gamepad.once("connected", (pad) => (this.pad = pad));

    // Physics
    this.player.body.setDamping(true);
    this.player.body.setDrag(0.05);
	this.player.setDepth(5);

	// particles
	this.dust = this.add.particles(0, 0, "dust-texture", {
		scale: {start: 1.25, end: 0},
		alpha: {start: 0.3, end: 0},
		lifespan: 3200,
		speed: 60,
		frequency: -1,
		blendMode: "NORMAL",
	})

	this.dust.setDepth(4);
  }

  update() {
    if (!this.player) return;

    const moveInput = this.getInputDirection();
    const isMovingInput = moveInput.length() > 0.1;

    if (isMovingInput) {
      let targetAngle = moveInput.angle();

      targetAngle = Phaser.Math.Angle.Wrap(targetAngle);

      this.player.chassis.rotation = Phaser.Math.Angle.RotateTo(
        this.player.chassis.rotation,
        targetAngle,
        this.playerStats.turnSpeed,
      );

      // Movement based on chassis direction
      const currentRotation = this.player.chassis.rotation;
      this.player.body.setVelocity(
        Math.cos(currentRotation) * this.playerStats.speed,
        Math.sin(currentRotation) * this.playerStats.speed,
      );

      this.player.setScale(1.5 + Math.sin(this.time.now * 0.02) * 0.02);
	  this.dust.emitParticleAt(this.player.x, this.player.y);
    }

    const pointer = this.input.activePointer;
    this.player.updateTank(pointer.worldX, pointer.worldY);
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
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
