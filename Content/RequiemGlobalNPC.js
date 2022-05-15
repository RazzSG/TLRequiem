import {GlobalNPC} from "../TL/GlobalNPC.js";
import {ModItem} from "../TL/ModItem.js";
import {DropHelper} from "../Common/DropHelper.js";
import {Terraria} from "../TL/ModImports.js";

export class RequiemGlobalNPC extends GlobalNPC {
    NPCLoot(npc) {
        let chance;
        switch (npc.type) {
            case 471: {
                chance = Terraria.Main.masterMode ? 0.3333 : 0.2;
                DropHelper.DropItemChanceFromNPC(npc, ModItem.getTypeByName('ShadowflameSkull'), chance);
            }
        }
    }
}