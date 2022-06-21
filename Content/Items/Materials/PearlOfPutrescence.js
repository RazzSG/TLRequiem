import {ModItem} from "../../../TL/ModItem.js";

export class PearlOfPutrescence extends ModItem {
    constructor() {
        super();
        this.Texture = this.Texture = `Items/Material/${this.constructor.name}`;
    }

    SetDefaults() {
        this.Item.width = 16;
        this.Item.height = 16;
    }
}