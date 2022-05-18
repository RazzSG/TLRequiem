import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class ElixirOfLife extends ModItem {
    SetDefaults() {
        this.Item.rare = 11;
        this.Item.value = RequiemGlobalItem.Rarity11BuyPrice;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        player.statLifeMax2 *= 1.25;
        player.lifeRegen += player.statLife >= player.statLifeMax2 * 0.5 ? 5 : 10;
        player.pStone = true;
        player.lifeMagnet = true;
        player.longInvince = true;
        player.buffImmune[105] = true;
        player.buffImmune[2] = true;
        player.buffImmune[113] = true;
    }

    AddRecipes() {
        this.CreateRecipe()
          .AddIngredient(860)
          .AddIngredient(289, 5)
          .AddIngredient(2345, 5)
          .AddIngredient(2323, 5)
          .AddIngredient(1291, 5)
          .AddTile(355)
          .Register();
    }
}