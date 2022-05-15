import {ModPlayer} from "../TL/ModPlayer.js";
import {isSummon} from "../Common/RequiemUtilities.js";
import {Terraria} from "../TL/ModImports.js";

export class RequiemPlayer extends ModPlayer {
    static fireAmulet;

    constructor() {
        super();
    }

    ResetEffects() {
        RequiemPlayer.fireAmulet = false;
    }

    PostUpdateEquips() {
        if (RequiemPlayer.fireAmulet) {
            this.player.maxMinions += 1;
        }
    }

    OnHitNPCWithProj(proj, target) {
        if (isSummon(proj)) {
            if (RequiemPlayer.fireAmulet) {
                target.AddBuff(24, 60, false);
            }
        }
    }
}