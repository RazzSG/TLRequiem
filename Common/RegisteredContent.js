import {ModPlayer} from "../TL/ModPlayer.js";
import {RequiemPlayer} from "../Content/RequiemPlayer.js";
import {ModItem} from "../TL/ModItem.js";
import {VialOfGraveEarth} from "../Content/Items/Accessories/VialOfGraveEarth.js";

export function initializeContent() {
    ModPlayer.register(RequiemPlayer);
    
    ModItem.register(VialOfGraveEarth);
}