import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class FaerieRing extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity11BuyPrice;
        this.Item.rare = 11;
        this.Item.defense = 10;
        this.Item.lifeRegen = 1;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.faerieRing = true;
    }
}