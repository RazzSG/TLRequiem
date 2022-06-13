import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class FeatherCrystal extends ModItem {
    SetDefaults() {
        this.Item.accessory = true;
        this.Item.rare = 4;
        this.Item.value = RequiemGlobalItem.Rarity4BuyPrice;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.featherCrystal = true;
    }
}