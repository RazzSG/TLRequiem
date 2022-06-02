import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class ArtemisSoul extends ModItem {
    SetDefaults() {
       this.Item.value = RequiemGlobalItem.Rarity8BuyPrice;
       this.Item.rare = 8;
       this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        player.lifeRegen += 2;
        player.statDefense += 5;
        player.rangedDamage += 0.1;
        player.rangedCrit += 5;
        player.moveSpeed += 0.05;
        player.ammoCost80 = true;
    }
}