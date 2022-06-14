import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class ManaEqualizer extends ModItem {
    SetDefaults() {
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.manaEqualizer = true;
    }
}