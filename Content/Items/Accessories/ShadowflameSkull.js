import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class ShadowflameSkull extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity5BuyPrice;
        this.Item.rare = 5;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.shadowflameMinion = true;
    }
}