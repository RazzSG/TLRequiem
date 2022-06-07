import {GlobalNPC} from "../TL/GlobalNPC.js";
import {ModItem} from "../TL/ModItem.js";
import {DropHelper} from "../Common/DropHelper.js";
import {Terraria} from "../TL/ModImports.js";
import {RequiemPlayer} from "./RequiemPlayer.js";
import * as Utils from "../Common/RequiemUtilities.js";

export class RequiemGlobalNPC extends GlobalNPC {
    NPCLoot(npc) {
        let chance;
        switch (npc.type) {
            case 471: {
                chance = Terraria.Main.masterMode ? 0.3333 : 0.2;
                DropHelper.DropItemChanceFromNPC(npc, ModItem.getTypeByName('ShadowflameSkull'), chance);
                break;
            }
        }
    }
    
    OnKill(npc) {
        if (npc.playerInteraction[Terraria.Main.myPlayer] && RequiemPlayer.ringOfReplenishment && Terraria.Main.rand['int Next(int maxValue)'](3) === 0) {
            Utils.healLife(Terraria.Main.LocalPlayer, Terraria.Main.rand['int Next(int minValue, int maxValue)'](1, 4));
        }
    }
}