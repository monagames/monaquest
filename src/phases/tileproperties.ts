import ph from "phaser";

export interface TileProperties {
    tipo?: "suelo";
}

export function getProperties(tile: ph.Tile): TileProperties
{
    return tile.properties as TileProperties || {};
}