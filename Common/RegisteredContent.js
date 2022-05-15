import {ModPlayer} from "../TL/ModPlayer.js";
import {RequiemPlayer} from "../Content/RequiemPlayer.js";
import {ModItem} from "../TL/ModItem.js";
import {VialOfGraveEarth} from "../Content/Items/Accessories/VialOfGraveEarth.js";
import {FireAmulet} from "../Content/Items/Accessories/FireAmulet.js";
import {ShadowflameSkull} from "../Content/Items/Accessories/ShadowflameSkull.js";
import {GlobalNPC} from "../TL/GlobalNPC.js";
import {RequiemGlobalNPC} from "../Content/RequiemGlobalNPC.js";

export function initializeContent() {
    ModPlayer.register(RequiemPlayer);
    GlobalNPC.register(RequiemGlobalNPC);
    
    ModItem.register(VialOfGraveEarth);
    ModItem.register(FireAmulet);
    ModItem.register(ShadowflameSkull);
}