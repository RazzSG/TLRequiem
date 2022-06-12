import {ModItem} from "../../../../TL/ModItem.js";
import {Terraria} from "../../../../TL/ModImports.js";

export class PocketRainCloud extends ModItem {
    SetDefaults() {
        this.Item.rare = 5;
        this.Item.useAnimation = 20;
        this.Item.useTime = 20;
        this.Item.useStyle = 4;
        this.Item.UseSound = Terraria.ID.SoundID.Item66;
    }
    
    CanUseItem(player) {
        return !Terraria.Main.slimeRain;
    }

    UseItem(player) {
        if (!Terraria.Main.raining) {
            Terraria.Main.StartRain();
        } else {
            Terraria.Main.StopRain();
        }
        return true;
    }
}