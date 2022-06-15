import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class ShimmeringCloak extends ModItem {
    SetDefaults() {
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.shimmeringCloak = true;
        player.rangedDamage += 0.05;
        player.rangedCrit += 5;
    }
}