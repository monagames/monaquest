import ph from "phaser";

export abstract class CommonState extends ph.State {

    player: ph.Sprite;
    map: ph.Tilemap;
    layer: ph.TilemapLayer;
    private _score: number = 0;
    private textScore: ph.Text;


    constructor() {
        super();
    }

    create() {
        this.physics.startSystem(ph.Physics.ARCADE);       
    }

    get score() { return this._score; }
    set score(value: number) {
        this._score = value;
        this.textScore.setText(value.toString());
    }

}

