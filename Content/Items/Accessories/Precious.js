import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class Precious extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity8BuyPrice;
        this.Item.rare = 8;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.precious = true;
        RequiemPlayer.hallowTreasureMagnet = true;
        player.discount = true;
        player.coins = true;
        player.luck += 0.1;
    }
    
    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(3035)
          .AddIngredient(501, 150)
          .AddIngredient(1225, 18)
          .AddIngredient(1508, 18)
          .AddIngredient(ModItem.getTypeByName('HallowTreasureMagnet'))
          .AddTile(134)
          .Register();
    }
}