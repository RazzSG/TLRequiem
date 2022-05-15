import {ModPlayer} from "../TL/ModPlayer.js";
import {RequiemPlayer} from "../Content/RequiemPlayer.js";
import {ModItem} from "../TL/ModItem.js";
import {VialOfGraveEarth} from "../Content/Items/Accessories/VialOfGraveEarth.js";
import {FireAmulet} from "../Content/Items/Accessories/FireAmulet.js";

export function initializeContent() {
    ModPlayer.register(RequiemPlayer);
    
    ModItem.register(VialOfGraveEarth);
    ModItem.register(FireAmulet);
}