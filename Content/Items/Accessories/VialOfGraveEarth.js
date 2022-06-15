import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class VialOfGraveEarth extends ModItem {
    SetDefaults() {
        this.Item.value = RequiemGlobalItem.Rarity1BuyPrice;
        this.Item.rare = 1;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        if (player.ZoneDirtLayerHeight || player.ZoneRockLayerHeight) {
            player.pickSpeed -= 0.15;
        }
    }
    
    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(424, 150)
          .AddIngredient(31, 1)
          .AddTile(16)
          .Register();

        this.CreateRecipe()
          .AddIngredient(1103, 150)
          .AddIngredient(31, 1)
          .AddTile(16)
          .Register();
    }
}