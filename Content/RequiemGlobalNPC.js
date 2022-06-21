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
        if (npc.playerInteraction[Terraria.Main.myPlayer] && RequiemPlayer.ringOfReplenishment && Utils.randNext(3) === 0) {
            Utils.healLife(Terraria.Main.LocalPlayer, Utils.randNextRange(1, 4));
        }
    }
    
    SetupShop(type, shop, nextSlot) {
        const flag = Terraria.Main.hardMode ? Terraria.Item.buyPrice(0, 4, 0, 0) : Terraria.Item.buyPrice(0, 2, 0, 0);
        if (type === 17) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](31);
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](2997);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 0, 20, 0);
            nextSlot++;
            if (Terraria.NPC.downedBoss1) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](303);
                shop.item[nextSlot].value = flag;
                nextSlot++;
            }
            if (Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](188);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](189);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](2326);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
                nextSlot++;
            }
            if (Terraria.NPC.downedBoss1) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](2674);
                nextSlot++;
            }
            if (Terraria.NPC.downedBoss3) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](2675);
                nextSlot++;
            }
            if (Terraria.WorldGen.shadowOrbSmashed || Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](Terraria.WorldGen.crimson ? 64 : 1256);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](Terraria.WorldGen.crimson ? 162 : 802);
                nextSlot++;
            }
            if (Terraria.NPC.downedPlantBoss) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](2676);
                nextSlot++;
            }
        }
        if (type === 207) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](3349);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 12, 50, 0);
            nextSlot++;
        }
        if (type === 38) {
            if (Terraria.NPC.downedBoss1) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](2322);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](292);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](298);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
                nextSlot++;
            }
            if (Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](296);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](288);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
                nextSlot++;
            }
            if (Terraria.NPC.downedBoss3) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](2346);
                shop.item[nextSlot].value = flag;
                nextSlot++;
            }
        }
        if (type === 19) {
            if (Terraria.WorldGen.shadowOrbSmashed || Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](Terraria.WorldGen.crimson ? 96 : 800);
                nextSlot++;
            }
            if (Terraria.NPC.downedQueenBee) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](964);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 20, 0, 0);
                nextSlot++;
            }
            if (Terraria.NPC.downedGolemBoss) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](679);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](1254);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](1300);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
            }
            shop.item[nextSlot]['void SetDefaults(int Type)'](2344);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](304);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
            nextSlot++;
            if (Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](300);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
                nextSlot++;
            }
        }
        if (type === 209) {
            if (Terraria.NPC.downedGolemBoss) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](759);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
            }
        }
        if (type === 20) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](301);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](295);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
            nextSlot++;
            if (Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](289);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](290);
                shop.item[nextSlot].value = flag;
                nextSlot++;
            }
            shop.item[nextSlot]['void SetDefaults(int Type)'](223);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 10, 0, 0);
            nextSlot++;
            if (Terraria.WorldGen.shadowOrbSmashed || Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](Terraria.WorldGen.crimson ? 111 : 1290);
                nextSlot++;
            }
            if (Terraria.Main.expertMode && Terraria.NPC.downedBoss2) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](Terraria.WorldGen.crimson ? 3224 : 3223);
                nextSlot++;
            }
        }
        if (type === 107) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](2353);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
            nextSlot++;
        }
        if (type === 124) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](2325);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
            nextSlot++;
        }
        if (type === 54) {
            if (Terraria.Main.hardMode) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](327);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 5, 0, 0);
                nextSlot++;
            }
        }
        if (type === 227) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](3350);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 12, 50, 0);
            nextSlot++;
        }
        if (type === 108) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](293);
            shop.item[nextSlot].value = flag;
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](294);
            shop.item[nextSlot].value = flag;
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](305);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](113);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 5, 0, 0);
            nextSlot++;
            if (Terraria.Main.hardMode && Terraria.Main.LocalPlayer.ZoneHallow) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](1326);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(20, 0, 0, 0);
                nextSlot++;
            }
            if (Terraria.NPC.downedGolemBoss) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](1446);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](1445);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](1444);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
                shop.item[nextSlot]['void SetDefaults(int Type)'](1266);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 25, 0, 0);
                nextSlot++;
            }
        }
        if (type === 228) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](2328);
            shop.item[nextSlot].value = flag;
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](2324);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](2347);
            shop.item[nextSlot].value = flag;
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](2349);
            shop.item[nextSlot].value = flag;
            nextSlot++;
            shop.item[nextSlot]['void SetDefaults(int Type)'](2348);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 2, 0, 0);
            nextSlot++;
            if (Terraria.NPC.downedGolemBoss) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](1611);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 10, 0, 0);
                nextSlot++;
            }
        }
        if (type === 208) {
            shop.item[nextSlot]['void SetDefaults(int Type)'](2756);
            shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 1, 0, 0);
            nextSlot++;
        }
        if (type === 453) {
            if (Terraria.Main.hardMode) {
                shop.item[nextSlot]['void SetDefaults(int Type)'](682);
                shop.item[nextSlot].value = Terraria.Item.buyPrice(0, 36, 0, 0);
                nextSlot++;
            }
        }
    }
}