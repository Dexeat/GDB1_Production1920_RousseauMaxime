class Scene2 extends Phaser.Scene {
    constructor() {
        super("deuxieme_scene");
    }
    init(data) {
        this.dp = data.score;
    }
    preload() {
        this.load.image("background2", "assets/jeu2/fond.png")
        this.load.image("pompe","assets/jeu2/Pompe.png")
        this.load.image("oil","assets/jeu2/Baril.png")
        //this.baril = this.physics.add.staticGroup();
    }
    create() {
        this.dp2 = 0;
        this.add.image(0, 0, "background2").setOrigin(0);
        this.pomp = this.add.image(300, 130, "pompe").setOrigin(0);
        
        this.pomp.setInteractive();

        this.pomp.on('pointerdown',function(){
            console.log(this.dp2);
            this.dp2 += 10;
            //baril.create(100,100,'oil')
        })

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
        this.text.setText('Event.progress: ' + this.timedEvent.getProgress().toString().substr(0, 4));
    }
}