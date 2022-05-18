import {ModPlayer} from "../TL/ModPlayer.js";
import {anyBossNPCs, isSummon} from "../Common/RequiemUtilities.js";
import {Terraria} from "../TL/ModImports.js";

export class RequiemPlayer extends ModPlayer {
    static fireAmulet;
    static shadowflameMinion;
    static oilMinion;
    static areThereAnyBosses;

    constructor() {
        super();
    }

    ResetEffects() {
        RequiemPlayer.fireAmulet = false;
        RequiemPlayer.shadowflameMinion = false;
        RequiemPlayer.oilMinion = false;
        RequiemPlayer.areThereAnyBosses = false;
    }

    PostUpdateEquips() {
        RequiemPlayer.areThereAnyBosses = anyBossNPCs();
        
        if (RequiemPlayer.fireAmulet) {
            this.player.maxMinions += 1;
        }
        
        if (RequiemPlayer.shadowflameMinion) {
            this.player.maxMinions += 1;
        }
        
        if (RequiemPlayer.oilMinion) {
            this.player.maxMinions += 2;
        }
    }

    OnHitNPCWithProj(proj, target) {
        if (isSummon(proj)) {
            if (RequiemPlayer.fireAmulet) {
                target.AddBuff(24, 60, false);
            }
            
            if (RequiemPlayer.shadowflameMinion) {
                target.AddBuff(153, 180, false);
            }
            
            if (RequiemPlayer.oilMinion) {
                if (Terraria.Main.rand['int Next(int maxValue)'](2) === 0) {
                    target.AddBuff(204, 60 * Terraria.Main.rand['int Next(int minValue, int maxValue)'](4, 10), false);
                }
            }
        }
    }
}