
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MediumTank extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 449, y ?? 152);

		this.scaleX = 1.5;
		this.scaleY = 1.5;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setOffset(-30, -30);
		this.body.setSize(60, 60, false);

		// chassis
		const chassis = scene.add.image(0, 0, "chassis-medium");
		this.add(chassis);

		// turret
		const turret = scene.add.image(0, 0, "turret-medium");
		this.add(turret);

		this.chassis = chassis;
		this.turret = turret;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	chassis;
	/** @type {Phaser.GameObjects.Image} */
	turret;

	/* START-USER-CODE */

	// Write your code here.
	updateTank(targetX, targetY) {
		const targetAngle = Phaser.Math.Angle.Between(
			this.x, this.y,
			targetX, targetY
		);

		this.turret.rotation = Phaser.Math.Angle.RotateTo(
			this.turret.rotation,
			targetAngle,
			0.1
		)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
