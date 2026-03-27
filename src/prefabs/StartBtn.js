
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartBtn extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 248, 55), Phaser.Geom.Rectangle.Contains);

		// BtnTxt
		const btnTxt = scene.add.text(0, 0, "", {});
		btnTxt.text = "Start Game";
		btnTxt.setStyle({ "color": "#ffcc00", "fontFamily": "Arial", "fontSize": "48px", "stroke": "#000", "strokeThickness": 2, "shadow.offsetX": 2, "shadow.offsetY": 2, "shadow.blur": 4, "shadow.stroke": true });
		this.add(btnTxt);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
