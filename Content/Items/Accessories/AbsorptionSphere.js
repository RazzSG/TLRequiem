import {ModItem} from "../../../TL/ModItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class AbsorptionSphere extends ModItem {
    SetDefaults() {
        super.SetDefaults();
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.absorptionSphere = true;
    }
}