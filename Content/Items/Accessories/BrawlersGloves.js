import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class BrawlersGloves extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity2BuyPrice;
        this.Item.rare = 2;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.brawlerGloves = true;
    }
}