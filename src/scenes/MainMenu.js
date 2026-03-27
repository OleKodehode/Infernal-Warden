
// You can write more code here

/* START OF COMPILED CODE */

import StartBtn from "../prefabs/StartBtn.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("Init-Asset-Pack", "assets/Init-Asset-Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// main_menu
		this.add.image(640, 400, "main-menu");

		// title_text_quick_edit
		this.add.image(368, 144, "title-text-quick-edit");

		// StartBtn
		const startBtn = new StartBtn(this, 160, 352);
		this.add.existing(startBtn);

		this.startBtn = startBtn;

		this.events.emit("scene-awake");
	}

	/** @type {StartBtn} */
	startBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const btn = this.startBtn;
		const btnText = btn.list[0]; // Make sure the text is in the first spot in the container

		btn.setInteractive(new Phaser.Geom.Rectangle(-100, -25, 200, 50), Phaser.Geom.Rectangle.Contains);

		btn.on("pointerdown", () => this.scene.start("GameScene"));
		btn.on("pointerover", () => {
			btnText.setStyle({color: "#fff"});
			btnText.setScale(1.1);
		})

		btn.on("pointerout", () => {
			btnText.setStyle({color: "#ffcc00"});
			btnText.setScale(1.0);
		})

		// Just for now - Any keyboard input should get the player to the game scene
		this.input.keyboard.once("keydown", () => this.scene.start("GameScene"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
