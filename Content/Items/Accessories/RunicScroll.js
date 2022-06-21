import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class RunicScroll extends ModItem {
    SetDefaults() {
        this.Item.width = 36;
        this.Item.height = 22;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.runicScroll = true;
    }
}