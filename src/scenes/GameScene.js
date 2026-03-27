
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

		this.player.setPosition(750, 550);
		this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

		this.playerStats = { speed: 220 };
		this.cursors = this.input.keyboard.createCursorKeys();
		this.wasdKeys = this.input.keyboard.addKeys({ up: "W", left: "A", right: "D", down: "S"});
	}

	update() {

		if (!this.player) return;

		const rotationSpeed = 0.1;
		const vel = this.player.body.velocity;
		let moving = false;

		// Horizontal
		if (this.cursors.left.isDown || this.wasdKeys.left.isDown) {
			vel.x = -this.playerStats.speed;
			moving = true
		} else if (this.cursors.right.isDown || this.wasdKeys.right.isDown) {
			vel.x = this.playerStats.speed;
			moving = true;
		} else {
			vel.x *= 0.9
		}

		// Vertical
		if (this.cursors.up.isDown || this.wasdKeys.up.isDown) {
			vel.y = -this.playerStats.speed;
			moving = true
		} else if (this.cursors.down.isDown || this.wasdKeys.down.isDown) {
			vel.y = this.playerStats.speed;
			moving = true
		} else {
			vel.y *= 0.9
		}

		// Rotate chassis towards direction
		if (moving && (vel.x !== 0 || vel.y !== 0)) {
            const angle = Phaser.Math.Angle.Between(0, 0, vel.x, vel.y)
            this.player.chassis.rotation = Phaser.Math.Angle.RotateTo(
				this.player.chassis.rotation,
				angle,
				rotationSpeed
			);
			this.player.setScale(1.5 + Math.sin(this.time.now * 0.02) * 0.02);
        } else {
			this.player.setScale(1.5);
			moving = !moving;

		}

		const pointer = this.input.activePointer;
		this.player.updateTank(pointer.worldX, pointer.worldY)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
