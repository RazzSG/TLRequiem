import {ModItem} from "../../../TL/ModItem.js";
import {Terraria} from "../../../TL/ModImports.js";

export class ElectrumBar extends ModItem {
    SetDefaults() {
        this.Item.rarity = 5;
        this.Item.value = Terraria.Item.sellPrice(0, 0, 50, 0);
    }
    
    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(14, 5)
          .AddIngredient(13, 5)
          .AddIngredient(ModItem.getTypeByName('GlitteringDust'), 8)
          .AddTile(134)
          .Register();
        
        this.CreateRecipe()
          .AddIngredient(701, 5)
          .AddIngredient(702, 5)
          .AddIngredient(ModItem.getTypeByName('GlitteringDust'), 8)
          .AddTile(134)
          .Register();
    }
}