import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class SpellbindersSigil extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity8BuyPrice;
        this.Item.rare = 8;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        player.magicDamage += 0.15;
        player.manaCost *= 0.9;
        player.statManaMax2 += 100;
        player.manaMagnet = true;
    }
}