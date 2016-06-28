import {CommonState} from "src/phases/commonstate";
import ph from "phaser";
import {SimpleCursor} from "../cursor";

export class Player extends ph.Sprite {
    private cursors: SimpleCursor;

    constructor(private state: CommonState, x: number, y: number) {
        super(state.game, x, y, "player");

        this.cursors = new SimpleCursor(this.game);
        state.game.add.existing(this);
    }

    update() {
        if (this.alive) {
        }
    }
}