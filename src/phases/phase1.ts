import ph from "phaser";
import {CommonState} from "./commonstate";
import {Player} from "../sprites/player";

export class Phase1 extends CommonState {

    private timer: ph.Timer;
    private releaseEnemyInterval: number;

    constructor() {
        super();
    }

    init() {
        this.timer = this.time.create(false);        
    }

    create() {
        let background = this.add.sprite(0, 0, "sky");
        background.fixedToCamera = true;

        background.alpha = 0.5;
        
        super.create();
                

        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('fantasy_tiles_by_surt', 'tiles');

        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();

        //this.map.setCollision( [ 217, 218, 511, 512, 247, 248, 251, 360, 171, 141, 328, 354, 355, 443, 413, 383, 353, 138, 168, 224, 225, 514, 515, 516, 226, 227, 181 ]);

        // this.layer.debug = true;

        //this.player = this.add.sprite(0, 384, 'wizard', 0);
        //this.player.animations.add('right', [0,1,2,3,4,5,6,7], 8, true);
        //this.player.animations.add('left', [8,9,10,11,12,13,14,15], 8, true);

        //this.physics.arcade.enable(this.player);

        //this.player.body.setSize(28, 32, 0, 0);
        //this.player.body.collideWorldBounds = true;


        // Jugador
        this.player = new Player(this, 32, this.world.height - 150);
        this.game.camera.follow(this.player);         
    }
}

