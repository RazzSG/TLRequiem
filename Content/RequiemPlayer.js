import {ModPlayer} from "../TL/ModPlayer.js";
import * as Utils from "../Common/RequiemUtilities.js";
import {Microsoft, System, Terraria} from "../TL/ModImports.js";

export class RequiemPlayer extends ModPlayer {
    static fireAmulet;
    static shadowflameMinion;
    static oilMinion;
    static areThereAnyBosses;
    static requiemEndurance;
    static requiemEnduranceCap = 0.5;
    static statSheet = false;

    constructor() {
        super();
    }

    ResetEffects() {
        RequiemPlayer.fireAmulet = false;
        RequiemPlayer.shadowflameMinion = false;
        RequiemPlayer.oilMinion = false;
        RequiemPlayer.areThereAnyBosses = false;
        RequiemPlayer.requiemEndurance = 0;
        RequiemPlayer.requiemEnduranceCap = 0.5;
    }

    PostUpdateEquips() {
        RequiemPlayer.areThereAnyBosses = Utils.anyBossNPCs();
        
        if (RequiemPlayer.fireAmulet) {
            this.player.maxMinions += 1;
        }
        
        if (RequiemPlayer.shadowflameMinion) {
            this.player.maxMinions += 1;
        }
        
        if (RequiemPlayer.oilMinion) {
            this.player.maxMinions += 2;
        }
        
        if (this.player.endurance > 0) {
            RequiemPlayer.requiemEnduranceCap -= this.player.endurance;
            if (RequiemPlayer.requiemEnduranceCap < 0.2){
                RequiemPlayer.requiemEnduranceCap = 0.2;
            }
        }
        if (RequiemPlayer.requiemEndurance > RequiemPlayer.requiemEnduranceCap) {
            RequiemPlayer.requiemEndurance = RequiemPlayer.requiemEnduranceCap;
        }
        this.player.endurance += RequiemPlayer.requiemEndurance;
    }

    OnHitNPCWithProj(proj, target) {
        if (Utils.isSummon(proj)) {
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