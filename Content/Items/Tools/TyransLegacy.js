import {ModItem} from "../../../TL/ModItem.js";
import {GauntletMode} from "../../Challenges/GauntletMode/GauntletMode.js";

export class TyransLegacy extends ModItem {
    SetDefaults() {
        this.Item.useAnimation = 45;
        this.Item.useTime = 45;
        this.Item.useStyle = 4;
    }
    
    UseItem(player) {
        GauntletMode.GauntletActive = !GauntletMode.GauntletActive;
        return true;
    }
}