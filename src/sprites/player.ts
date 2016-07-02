import {CommonState} from "src/phases/commonstate";
import {getProperties} from "src/phases/tileproperties";
import ph from "phaser";
import {SimpleCursor} from "../cursor";

export class Player extends ph.Sprite {
    private cursors: SimpleCursor;

    constructor(private state: CommonState, x: number, y: number) {
        super(state.game, x, y, "wizard");

        this.game.physics.arcade.enable(this);

        this.cursors = new SimpleCursor(this.game);
        state.game.add.existing(this);
    }

    update() {
        let body = this.body as ph.Physics.Arcade.Body;
        body.velocity.x = 0;
        this.body.velocity.y = 0;
        if (this.cursors.left)
            this.body.velocity.x = -100;
        if (this.cursors.right)
            this.body.velocity.x = 100;
        if (this.cursors.up)
            this.body.velocity.y = -100;
        if (this.cursors.down)
            this.body.velocity.y = 100;


        let x = this.state.layer.getTileX(this.x);
        let y = this.state.layer.getTileX(this.y);

        let tile = this.state.map.getTileBelow(0, x, y);
        if (getProperties(tile).tipo === "suelo")
            this.body.velocity.y = 0;
    }
}