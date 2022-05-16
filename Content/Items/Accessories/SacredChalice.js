import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class SacredChalice extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity7BuyPrice;
        this.Item.rare = 7;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.oilMinion = true;
        player.minionKB += 2.5;
        player.minionDamage += 0.1;
    }
    
    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(1864)
          .AddIngredient(1158)
          .AddIngredient(2998)
          .AddIngredient(422, 30)
          .AddTile(134)
          .Register();
    }
}