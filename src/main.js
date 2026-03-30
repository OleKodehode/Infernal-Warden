import MainMenu from "./scenes/MainMenu.js";
import GameScene from "./scenes/GameScene.js";

window.addEventListener("load", function () {
  var game = new Phaser.Game({
    width: 1280,
    height: 800,
    type: Phaser.AUTO,
    backgroundColor: "#000",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    input: {
      gamepad: true,
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 },
        debug: true,
      },
    },
  });

  // Uncomment main menu when closer to being done
  // game.scene.add("MainMenu", MainMenu, true);
  game.scene.add("GameScene", GameScene, true); // Remove true from this when Main Menu is uncommented
});
