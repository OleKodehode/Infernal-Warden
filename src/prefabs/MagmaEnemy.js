
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MagmaEnemy extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// ellipse_1
		const ellipse_1 = scene.add.ellipse(0, 0, 60, 60);
		ellipse_1.setInteractive(new Phaser.Geom.Circle(30, 30, 30), Phaser.Geom.Circle.Contains);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 15821830;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 16187392;
		ellipse_1.lineWidth = 4;
		this.add(ellipse_1);

		// healthBar
		const healthBar = scene.add.container(0, -50);
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

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.stats = {
			maxHealth: 20,
			currentHealth: 20,
		}
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
