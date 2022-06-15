import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class IcyHeart extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Accessories/${this.constructor.name}`;
    }

    SetDefaults() {
        this.Item.rare = 11;
        this.Item.value = ModItem.sellPrice(0, 12, 50, 0);
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.icyHeart = true;
    }
}