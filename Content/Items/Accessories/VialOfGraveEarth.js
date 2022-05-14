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
}