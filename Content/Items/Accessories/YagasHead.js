import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class YagasHead extends ModItem {
    SetDefaults() {
        this.Item.rare = 3;
        this.Item.value = RequiemGlobalItem.Rarity3BuyPrice;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.yagasHead = true;
        player.maxMinions++;
    }
}