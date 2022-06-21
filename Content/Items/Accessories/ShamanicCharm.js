import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class ShamanicCharm extends ModItem {
    SetDefaults() {
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.shamanicCharm = true;
    }
}