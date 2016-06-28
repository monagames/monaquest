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
        background.alpha = 0.5;
        
        super.create();
                
        // Jugador
        this.player = new Player(this, 32, this.world.height - 150);        
    }
}

