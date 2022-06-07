import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class GoldenScarab extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity7BuyPrice;
        this.Item.rare = 7;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.goldenScarab = true;
    }
}