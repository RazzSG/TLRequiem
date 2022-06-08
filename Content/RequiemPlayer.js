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
    static icyHeart;
    static icyHeartTimer = 0;
    static icyHeartDR = 1;
    static painkiller;
    static ankhOfLife;
    static ankhOfLifeCooldown = 0
    static encased = false;
    static encasedTimer = 0;
    static undeadHunter;
    static undeadHunterCooldown = 0;
    static yagasHead;
    static ringOfReplenishment;
    static goldenScarab;

    constructor() {
        super();
    }

    ResetEffects() {
        RequiemPlayer.fireAmulet = false;
        RequiemPlayer.shadowflameMinion = false;
        RequiemPlayer.oilMinion = false;
        RequiemPlayer.defianceBanner = false;
        RequiemPlayer.defianceBannerBonus = 0;
        RequiemPlayer.icyHeart = false;
        RequiemPlayer.painkiller = false;
        RequiemPlayer.ankhOfLife = false;
        RequiemPlayer.undeadHunter = false;
        RequiemPlayer.yagasHead = false;
        RequiemPlayer.ringOfReplenishment = false;
        RequiemPlayer.goldenScarab = false;
    }
    
    UpdateDead() {
        RequiemPlayer.ankhOfLife = false;
        RequiemPlayer.undeadHunter = false;
    }

    PostUpdateEquips() {
        RequiemPlayer.icyHeartTimer++;
        
        RequiemPlayer.areThereAnyBosses = Utils.anyBossNPCs();
        RequiemPlayer.MiscEffects(this.player);
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
        
        if (RequiemPlayer.yagasHead) {
            for (let i = 0; i < 1000; i++) {
                const proj = Terraria.Main.projectile[i];
                if (proj.active && proj.owner === this.player.whoAmI && proj.minion && proj.type !== 623) {
                    this.player.minionDamage += 0.05 * proj.minionSlots;
                }
            }
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

        if (RequiemPlayer.icyHeart) {
            RequiemPlayer.icyHeartDR = Microsoft.Xna.Framework.MathHelper.Lerp(1, 0, Microsoft.Xna.Framework.MathHelper.Clamp(RequiemPlayer.icyHeartTimer, 0, 1200) / 1200);
            let num = Microsoft.Xna.Framework.MathHelper.Lerp(1, 20, Microsoft.Xna.Framework.MathHelper.Clamp(RequiemPlayer.icyHeartTimer, 0, 1200) / 1200);
            let playerWidth = this.player.width * 1.2;
            let playerHeight = this.player.height * 1.1;
            for (let i = 0; i < num; i++) {
                let radius = Terraria.Main.rand.NextDouble() * 2.0 * 3.14;
                const vector = Microsoft.Xna.Framework.Vector2.new();
                vector.X = Math.sin(radius) * playerWidth;
                vector.Y = Math.cos(radius) * playerHeight;
                let num = Microsoft.Xna.Framework.Vector2.op_Subtraction(Microsoft.Xna.Framework.Vector2.op_Addition(this.player.Center, vector), Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Microsoft.Xna.Framework.Vector2.One, 4));
                const dust = Terraria.Dust.NewDust(num, 0, 0, 135, 0, 0, 100, Microsoft.Xna.Framework.Graphics.Color.new(), 1);
                Terraria.Main.dust[dust].noGravity = true;
                Terraria.Main.dust[dust].velocity = this.player.velocity;
            }
        }
        
        if (RequiemPlayer.painkiller) {
            for (let i = 0; i < Terraria.Player.maxBuffs; i++) {
                let buff = this.player.buffType[i];
                if ((buff === 163 || buff === 80 || buff === 69 || buff === 46 || buff === 36 || buff === 33 || buff === 32 || buff === 31 || buff === 22) && this.player.miscCounter % 2 === 0) {
                    this.player.buffTime[i]++;
                }
                switch (buff) {
                    case 163: {
                        this.player.headcovered = false;
                        this.player.statDefense += 50;
                        Utils.allDamageBoost(this.player, 0.5);
                        Utils.allCritBoost(this.player, 25);
                        break;
                    }
                    case 80: {
                        this.player.blackout = false;
                        this.player.statDefense += 30;
                        Utils.allDamageBoost(this.player, 0.25);
                        Utils.allCritBoost(this.player, 10);
                        break;
                    }
                    case 69: {
                        this.player.statDefense += 40;
                        break;
                    }
                    case 46: {
                        this.player.chilled = false;
                        this.player.moveSpeed += 0.3;
                        break;
                    }
                    case 36: {
                        this.player.brokenArmor = false;
                        this.player.statDefense += this.player.statDefense * 0.25;
                        break;
                    }
                    case 33: {
                        this.player.meleeDamage += 0.15;
                        this.player.statDefense += 14;
                        this.player.moveSpeed += 0.3;
                        break;
                    }
                    case 32: {
                        this.player.slow = false;
                        this.player.moveSpeed += 0.5;
                        break;
                    }
                    case 31: {
                        this.player.confused = false;
                        this.player.statDefense += 30;
                        Utils.allDamageBoost(this.player, 0.25);
                        Utils.allCritBoost(this.player, 10);
                        break;
                    }
                    case 22: {
                        this.player.blind = false;
                        this.player.statDefense += 15;
                        Utils.allDamageBoost(this.player, 0.1);
                        Utils.allCritBoost(this.player, 5);
                        break;
                    }
                }
            }
        }
    }
    
    OnHitNPC(item, target, damage, knockback, crit) {
        if (RequiemPlayer.goldenScarab && Utils.IsNPCHostile(target)) {
            target.AddBuff(72, 120, false);
            Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 71, 1, false, 0, false, false);
            if (Terraria.Main.rand['int Next(int maxValue)'](10) === 0) {
                Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 72, 1, false, 0, false, false);
            }
            if (Terraria.Main.rand['int Next(int maxValue)'](100) === 0) {
                Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 73, 1, false, 0, false, false);
            }
            if (Terraria.Main.rand['int Next(int maxValue)'](1000) === 0) {
                Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 74, 1, false, 0, false, false);
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

            if (RequiemPlayer.goldenScarab  && Utils.IsNPCHostile(target)) {
                target.AddBuff(72, 120, false);
                Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 71, 1, false, 0, false, false);
                if (Terraria.Main.rand['int Next(int maxValue)'](10) === 0) {
                    Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 72, 1, false, 0, false, false);
                }
                if (Terraria.Main.rand['int Next(int maxValue)'](100) === 0) {
                    Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 73, 1, false, 0, false, false);
                }
                if (Terraria.Main.rand['int Next(int maxValue)'](1000) === 0) {
                    Terraria.Item['int NewItem(Vector2 pos, int Width, int Height, int Type, int Stack, bool noBroadcast, int prefixGiven, bool noGrabDelay, bool reverseLookup)'](target.Center, target.width, target.height, 74, 1, false, 0, false, false);
                }
            }
        }
    }
    
    UpdateLifeRegen() {
        if (RequiemPlayer.ankhOfLife) {
            if (this.player.statLife < this.player.statLifeMax2 / 2) {
                this.player.lifeRegen++;
            }
            if (this.player.statLife < this.player.statLifeMax2 / 4) {
                this.player.lifeRegen++;
            }
            if (this.player.statLife < this.player.statLifeMax2 / 10) {
                this.player.lifeRegen += 2;
            }
            if (this.player.poisoned || this.player.onFire || this.player.onFrostBurn) {
                this.player.lifeRegen += 4;
            }
        }
    }

    PreHurt(pvp, quiet, modifier) {
        if (RequiemPlayer.icyHeart) {
            modifier.damage *= RequiemPlayer.icyHeartDR;
            RequiemPlayer.icyHeartTimer = -600;
            if (modifier.damage === 0) {
                Utils.giveIFrames(this.player, 45, true);
            }
        }
        
        if (RequiemPlayer.undeadHunter) {
            if (Terraria.Main.rand['int Next(int maxValue)'](10) === 0 && RequiemPlayer.undeadHunterCooldown === 0) {
                modifier.damage = 0;
                if (modifier.damage === 0) {
                    Utils.giveIFrames(this.player, 45, true);
                    RequiemPlayer.undeadHunterCooldown = Utils.secondsToFrames(15);
                    for (let i = 0; i < 100; i++) {
                        const dust = Terraria.Dust.NewDust(this.player.position, this.player.width, this.player.height, 235, 0, 0, 100, Microsoft.Xna.Framework.Graphics.Color.new(), 2);
                        Terraria.Main.dust[dust].noGravity = true;
                        Terraria.Main.dust[dust].position.X += Terraria.Main.rand['int Next(int minValue, int maxValue)'](-20, 21);
                        Terraria.Main.dust[dust].position.Y += Terraria.Main.rand['int Next(int minValue, int maxValue)'](-20, 21);
                        Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, 1.2);
                        Terraria.Main.dust[dust].scale *= 1 + Terraria.Main.rand['int Next(int maxValue)'](40) * 0.01;
                    }
                }
            }
        }
        
        return true;
    }
    
    PreKill(damage, hitDirection, pvp) {
        if (RequiemPlayer.ankhOfLife && RequiemPlayer.ankhOfLifeCooldown === 0) {
            RequiemPlayer.encased = true;
            RequiemPlayer.ankhOfLifeCooldown = Utils.secondsToFrames(180);
            this.player.statLife = this.player.statLifeMax2 * 3 / 10;
            Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](2, this.player.position, 92);
            for (let i = 0; i < 60; i++) {
                const dust = Terraria.Dust.NewDust(this.player.position, this.player.width, this.player.height, 88, 0, 0, 0, Microsoft.Xna.Framework.Graphics.Color.new(), 2.5);
                Terraria.Main.dust[dust].noGravity = true;
                Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, 5);
            }
            return false;
        }
        return true;
    }
    
    static MiscEffects(player) {
        RequiemPlayer.ankhOfLifeCooldown--;
        if (RequiemPlayer.ankhOfLifeCooldown < 0) {
            RequiemPlayer.ankhOfLifeCooldown = 0;
        }
        
        RequiemPlayer.undeadHunterCooldown--;
        if (RequiemPlayer.undeadHunterCooldown < 0) {
            RequiemPlayer.undeadHunterCooldown = 0;
        }
        
        player.statManaMax2 += (RequiemPlayer.ankhOfLife ? 50 : 0);
        
        if (RequiemPlayer.ankhOfLife) {
            player.manaCost *= 0.85;
        }
        
        if (RequiemPlayer.encased) {
            RequiemPlayer.encasedTimer++;
            if (RequiemPlayer.encasedTimer > 0 && RequiemPlayer.encasedTimer < 180) {
                RequiemPlayer.encased = false;
                player.frozen = true;
                Utils.giveIFrames(player, 90);
                player.velocity.X = 0;
                player.velocity.Y = -0.4;
                const dust = Terraria.Dust.NewDust(player.position, player.width, player.height, 88, 0, 0, 0, Microsoft.Xna.Framework.Graphics.Color.new(), 1);
                Terraria.Main.dust[dust].noGravity = true;
                Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, 2);
                player.buffImmune[47] = true;
                player.buffImmune[46] = true;
            } else if (RequiemPlayer.encasedTimer >= 180) {
                Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](2, player.position, 27);
                RequiemPlayer.encasedTimer = 0;
                RequiemPlayer.encased = false;
            }
        }
        
        if (RequiemPlayer.goldenScarab) {
            player.luck += 0.1;
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