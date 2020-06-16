class Scene1 extends Phaser.Scene {
    constructor() {
        super("premiere_scene");
    }
    init(data) {}

    preload() {
        this.load.image("background","assets/jeu1/fond.jpg")
        this.load.image("bouton", "assets/jeu1/Bouton.png")
        this.load.image("hache", "assets/jeu1/Hache.png")
        this.load.image("tronc", "assets/jeu1/Tronc.png")
    }

    create() {
        this.add.image(0,0,"background").setOrigin(0);
        this.add.image(340,0,"tronc").setOrigin(0);
        this.bgauche = this.add.image(300,330,"bouton").setFlipX(true);
        this.bdroit = this.add.image(497, 330, "bouton");
        this.hd = this.add.image(300, 250, "hache").setFlipX(true);
        this.hg = this.add.image(497, 250, "hache");
        this.bgauche.setVisible(false);
        this.hd.setVisible(false);
        
        //input
        this.cursors = this.input.keyboard.createCursorKeys();

        //score
        this.dp = 0;
        this.etat = 0;

        
        //onEvent
        this.onEvent = function () {
            console.log(this.dp);
            this.scene.start("deuxieme_scene",{score: this.dp});
            //this.bdroit.setFlipX(true);

        };
        //timer
        this.text = this.add.text(32, 32);
        this.timedEvent = this.time.delayedCall(10000, this.onEvent, [], this); // 10s = 10000
        
        
        

    }

    


    update() {
        this.text.setText('Event.progress: ' + this.timedEvent.getProgress().toString().substr(0, 4));

        if(this.cursors.right.isDown && this.etat == 0){
            this.hd.setVisible(true);
            this.hg.setVisible(false);
            this.bgauche.setVisible(true);
            this.bdroit.setVisible(false);
            this.etat = 1;
        }

        if (this.cursors.left.isDown && this.etat == 1) {
            this.hd.setVisible(false);
            this.hg.setVisible(true);
            this.bgauche.setVisible(false);
            this.bdroit.setVisible(true);
            this.etat = 0;
            this.dp += 1;
        }
        
        
    }

    

}
