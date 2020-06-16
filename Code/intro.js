var config = {
    width: 815,
    height: 375,
    parent: "game-container",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: [Scene1, Scene2, Scene3]
}

var game = new Phaser.Game(config);