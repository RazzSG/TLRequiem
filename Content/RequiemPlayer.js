import {ModPlayer} from "../TL/ModPlayer.js";
import * as Utils from "../Common/RequiemUtilities.js";
import {Microsoft, System, Terraria} from "../TL/ModImports.js";

export class RequiemPlayer extends ModPlayer {
    static fireAmulet;
    static shadowflameMinion;
    static oilMinion;
    static areThereAnyBosses = false;
    static statSheet = false;
    static defianceBanner;
    static defianceBannerBonus;

    constructor() {
        super();
    }

    ResetEffects() {
        RequiemPlayer.fireAmulet = false;
        RequiemPlayer.shadowflameMinion = false;
        RequiemPlayer.oilMinion = false;
        RequiemPlayer.defianceBanner = false;
        RequiemPlayer.defianceBannerBonus = 0;
    }

    PostUpdateEquips() {
        RequiemPlayer.areThereAnyBosses = Utils.anyBossNPCs();
        RequiemPlayer.Limits(this.player);
        
        if (RequiemPlayer.fireAmulet) {
            this.player.maxMinions += 1;
        }
        
        if (RequiemPlayer.shadowflameMinion) {
            this.player.maxMinions += 1;
        }
        
        if (RequiemPlayer.oilMinion) {
            this.player.maxMinions += 2;
        }
        
        if (RequiemPlayer.defianceBanner) {
            let num = -1;
            for (let i = 0; i < 200; i++) {
                const npc = Terraria.Main.npc[i];
                if (npc.active && !npc.friendly && (npc.damage > 0 || npc.boss) && !npc.dontTakeDamage) {
                    num = i;
                    break;
                }
            }
            let num2 = -1;
            for (let j = 0; j < 200; j++) {
                const npc = Terraria.Main.npc[j];
                if (npc.active && !npc.friendly && (npc.damage > 0 || npc.boss) && !npc.dontTakeDamage) {
                    let num3 = Math.abs(npc.position.X + npc.width / 2 - (this.player.position.X + this.player.width / 2)) + Math.abs(npc.position.Y + npc.height / 2 - (this.player.position.Y + this.player.height / 2));
                    if (num2 === -1 || num3 < num2) {
                        num2 = num3;
                        num = j;
                    }
                }
            }
            if (num !== -1) {
                const npc = Terraria.Main.npc[num];
                let num4 = Math.max(npc.Hitbox.Width / 2, npc.Hitbox.Height / 2);
                let num5 = npc.Distance(this.player.Center) - num4;
                if (num5 < 0) {
                    num5 = 0;
                }
                if (num5 < 480) {
                    RequiemPlayer.defianceBannerBonus = Microsoft.Xna.Framework.MathHelper.Lerp(0, 0.2, 1 - num5 / 480);
                    if (RequiemPlayer.defianceBannerBonus > 0.2){
                        RequiemPlayer.defianceBannerBonus = 0.2;
                    }
                }
                this.player.meleeDamage += RequiemPlayer.defianceBannerBonus;
                this.player.meleeSpeed += RequiemPlayer.defianceBannerBonus;
                this.player.meleeCrit += Math.round(RequiemPlayer.defianceBannerBonus * 100);
                this.player.endurance += RequiemPlayer.defianceBannerBonus / 2;
            }
        }
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

    static Limits(player) {
        if (player.endurance > 0) {
            player.endurance = 1 - 1 / (1 + player.endurance);
        }
        if (RequiemPlayer.areThereAnyBosses && player.aggro < 0) {
            player.aggro = 0;
        }
    }
}