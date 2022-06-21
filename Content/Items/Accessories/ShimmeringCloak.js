import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class ShimmeringCloak extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Accessories/${this.constructor.name}`;
    }
    
    SetDefaults() {
        this.Item.width = 42;
        this.Item.height = 44;
        this.Item.rare = 2;
        this.Item.value = RequiemGlobalItem.Rarity2BuyPrice;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.shimmeringCloak = true;
        player.rangedDamage += 0.05;
        player.rangedCrit += 5;
    }
    
    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(ModItem.getTypeByName('ShimmeringSilk'), 20)
          .AddTile(16)
          .Register();
    }
}