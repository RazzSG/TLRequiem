import {Terraria} from "../TL/ModImports.js";
import {GlobalItem} from "../TL/GlobalItem.js";
import {DropHelper} from "../Common/DropHelper.js";
import {ModItem} from "../TL/ModItem.js";

export class RequiemGlobalItem extends GlobalItem {
    static Rarity0BuyPrice = Terraria.Item.buyPrice(0, 0, 50, 0);
    static Rarity1BuyPrice = Terraria.Item.buyPrice(0, 1, 0, 0);
    static Rarity2BuyPrice = Terraria.Item.buyPrice(0, 2, 0, 0);
    static Rarity3BuyPrice = Terraria.Item.buyPrice(0, 4, 0, 0);
    static Rarity4BuyPrice = Terraria.Item.buyPrice(0, 12, 0, 0);
    static Rarity5BuyPrice = Terraria.Item.buyPrice(0, 24, 0, 0);
    static Rarity6BuyPrice = Terraria.Item.buyPrice(0, 36, 0, 0);
    static Rarity7BuyPrice = Terraria.Item.buyPrice(0, 48, 0, 0);
    static Rarity8BuyPrice = Terraria.Item.buyPrice(0, 60, 0, 0);
    static Rarity9BuyPrice = Terraria.Item.buyPrice(0, 80, 0, 0);
    static Rarity10BuyPrice = Terraria.Item.buyPrice(1, 0, 0, 0);
    static Rarity11BuyPrice = Terraria.Item.buyPrice(1, 10, 0, 0);
    
    SetDefaults(item) {
        switch (item.type) {
            case 560:
            case 43:
            case 70:
            case 1331:
            case 1133:
            // Deer Thing
            // case 5120:
            case 4988:
            case 544:
            case 556:
            case 557:
            case 4961:
            case 3601:
            case 3747:
            case 4271:
            case 361:
            case 602:
            case 2767:
            case 1315:
            case 1844:
            case 1958:
                item.consumable = false;
        }
    }

    OpenVanillaBag(context, player, arg) {
        switch (context) {
            case 'bossBag': {
                RequiemGlobalItem.BossBagLoot(player, arg);
                break;
            }
        }
    }
    
    static BossBagLoot(player, itemID) {
        switch (itemID) {
            case 3324: {
                DropHelper.DropItemConditionToPlayer(player, ModItem.getTypeByName('FieryCore'), Terraria.Main.masterMode);
            }
        }
    }
}