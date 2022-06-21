import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class HallowTreasureMagnet extends ModItem {
    SetDefaults() {
        this.Item.rare = 5;
        this.Item.value = RequiemGlobalItem.Rarity5BuyPrice;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.hallowTreasureMagnet = true;
    }

    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(5010)
          .AddIngredient(1225, 18)
          .AddTile(134)
          .Register();
    }
}