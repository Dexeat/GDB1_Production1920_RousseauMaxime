class Scene3 extends Phaser.Scene {
    constructor() {
        super("troisieme_scene");
    }
    init(data) {
        this.score = data.score;
    }
    preload() {
        this.load.image("background3", "assets/jeu3/fond.jpg");
        this.load.image("d1", "assets/jeu3/d1.png");
        this.load.image("d2", "assets/jeu3/d2.png");
        this.load.image("d3", "assets/jeu3/d3.png");
    }
    create() {
        this.add.image(0,0,"background3").setOrigin(0);

        //onEvent
        this.onEvent = function () {
            this.score = this.dp + this.dp2;
            console.log(this.score);
            this.scene.start("troisieme_scene", {
                score: this.score
            });
            //this.bdroit.setFlipX(true);

        };
        //timer
        this.text = this.add.text(32, 32);
        this.timedEvent = this.time.delayedCall(10000, this.onEvent, [], this); // 10s

    }
    update() {

    }
}