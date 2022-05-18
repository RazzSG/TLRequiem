import {ModItem} from "../../../../TL/ModItem.js";
import {Terraria} from "../../../../TL/ModImports.js";
import {RequiemPlayer} from "../../../RequiemPlayer.js";

export class FlamingStar extends ModItem {
    SetDefaults() {
        this.Item.rare = 4;
        this.Item.useAnimation = 20;
        this.Item.useTime = 20;
        this.Item.useStyle = 4;
        this.Item.UseSound = Terraria.ID.SoundID.Item60;
        this.Item.consumable = false;
    }
    
    CanUseItem(player) {
        return !RequiemPlayer.areThereAnyBosses;
    }
    
    UseItem(player) {
        Terraria.Main.time = 0.0;
        Terraria.Main.dayTime = !Terraria.Main.dayTime;
        if (Terraria.Main.dayTime && ++Terraria.Main.moonPhase >= 8) {
            Terraria.Main.moonPhase = 0;
        }
        return true;
    }
}