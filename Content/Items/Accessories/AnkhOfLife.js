import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class AnkhOfLife extends ModItem {
    SetDefaults() {
        this.Item.accessory = true;
        this.Item.value = RequiemGlobalItem.Rarity5BuyPrice;
        this.Item.rare = 5;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.ankhOfLife = true;
    }
}