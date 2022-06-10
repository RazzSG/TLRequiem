import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class WarriorsBracer extends ModItem {
    SetDefaults() {
       this.Item.accessory = true;
       this.Item.value = RequiemGlobalItem.Rarity11BuyPrice;
       this.Item.master = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.warriorBracer = true;
        player.armorPenetration += 5;
        player.meleeDamage += 0.1;
        player.meleeSpeed += 0.06;
        player.meleeCrit += 6;
    }
}