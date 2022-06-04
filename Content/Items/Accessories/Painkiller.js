import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class Painkiller extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity3BuyPrice;
        this.Item.rare = 3;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.painkiller = true;
    }
}