import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class ShadowflameSkull extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Accessories/${this.constructor.name}`;
    }
    
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity5BuyPrice;
        this.Item.rare = 5;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.shadowflameMinion = true;
        player.maxMinions += 1;
    }
}