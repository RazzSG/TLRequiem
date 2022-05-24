import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class StatSheet extends ModItem {
    SetDefaults() {
        this.Item.rare = 1;
        this.Item.useTime = 30;
        this.Item.useAnimation = 30;
        this.Item.useStyle = 4;
        this.Item.value = RequiemGlobalItem.Rarity1BuyPrice;
    }
    
    UseItem(player) {
        RequiemPlayer.statSheet = !RequiemPlayer.statSheet;
        return true;
    }
}