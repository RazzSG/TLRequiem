import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class RingOfReplenishment extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity2BuyPrice;
        this.Item.rare = 2;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.ringOfReplenishment = true;
    }
}