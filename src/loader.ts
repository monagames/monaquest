import ph from "phaser";

export class Loader extends ph.State {

    started: boolean;
    loading: ph.Text;
    startSprite: ph.Text;

    init() {
        this.sound.boot();
    }

    preload() {
        this.started = false;
        this.loading = this.add.text(this.game.width / 2, this.game.height * 0.7, "LOADING", { fontSize: "64px", fill: "#FDF", align: "right" });
        this.loading.anchor.x = 0.5;
        this.loading.anchor.y = 0.5;
        this.load.setPreloadSprite(this.loading);

        this.load.path ="assets/";
        
        this.load.image("tiles");
        // this.load.image("diamond", "diamond.png");
        // this.load.spritesheet("astro", "astro.png", 32, 48);
        // this.load.image("sky", "space.jpg");
        // this.load.image("platform2", "platform 2.png");
        // this.load.image("ufo", "ufo.png");
        // this.load.image("star", "star-sheet.png");
        // this.load.image("laser", "laser.png");

        // this.load.audio("get-star", "key.mp3");
        // this.load.audio("explosion", "explosion.mp3");
        // this.load.audio("space-monas", "space-monas.mp3");
        // this.load.audio("silence", "silence.mp3");
        // this.load.audio("jetpack", "jetpack.mp3");
        // this.load.audio("laser", "laser.wav");
        // this.load.audio("aaah", "aaah.mp3");
    }

    create() {
        this.loading.destroy();
        this.game.state.start("game");
    }


}