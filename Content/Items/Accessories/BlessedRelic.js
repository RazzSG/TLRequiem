import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class BlessedRelic extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity2BuyPrice;
        this.Item.rare = 2;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.blessedRelic = true;
    }
    
    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(22, 20)
          .AddIngredient(182, 5)
          .AddTile(16)
          .Register();
    }
}