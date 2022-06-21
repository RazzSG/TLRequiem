import {ModItem} from "../../../TL/ModItem.js";
import {Terraria} from "../../../TL/ModImports.js";

export class ShimmeringSilk extends ModItem {
    constructor() {
        super();
        this.Texture = this.Texture = `Items/Material/${this.constructor.name}`;
    }
    
    SetDefaults() {
        this.Item.width = 60;
        this.Item.height = 34;
        this.Item.rare = 2;
        this.Item.value = Terraria.Item.sellPrice(0, 0, 1, 0);
    }
    
    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(225, 10)
          .AddIngredient(75)
          .AddTile(16)
          .Register();
    }
}