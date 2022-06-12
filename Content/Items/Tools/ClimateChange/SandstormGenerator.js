import {ModItem} from "../../../../TL/ModItem.js";
import {Terraria} from "../../../../TL/ModImports.js";

export class SandstormGenerator extends ModItem {
    SetDefaults() {
        this.Item.rare = 5;
        this.Item.useAnimation = 20;
        this.Item.useTime = 20;
        this.Item.useStyle = 4;
        this.Item.UseSound = Terraria.ID.SoundID.Item66;
    }

    UseItem(player) {
        if (Terraria.GameContent.Events.Sandstorm.Happening) {
            Terraria.GameContent.Events.Sandstorm.StopSandstorm();
        } else {
            Terraria.GameContent.Events.Sandstorm.StartSandstorm();
        }
        return true;
    }
}