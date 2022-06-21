import {ModPlayer} from "../TL/ModPlayer.js";
import * as Utils from "../Common/RequiemUtilities.js";
import {Microsoft, System, Terraria} from "../TL/ModImports.js";
import {ModLocalization} from "../TL/ModLocalization.js";

export class RequiemPlayer extends ModPlayer {
    static blessedRelic;
    static blessedRelicTimer = 0;
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
    static precious;
    static faerieRing;
    static warriorBracer;
    static brawlerGloves;
    static brawlerGlovesStack = 0;
    static brawlerGlovesCooldown = 0;
    static featherCrystal;
    static featherCrystalCooldown = 0;
    static manaEqualizer;
    static manaEqualizerVolatilityStack = 0;
    static manaEqualizerVolatilityTimer = 0;
    static allCrit;
    static allDamage;
    static attackSpeed;
    static castingSpeed;
    static firingSpeed;
    static shimmeringCloak;
    static stealth = 1;
    static stealthTimer = 0;
    static hallowTreasureMagnet;
    static absorptionSphere;
    static runicScroll;
    static shamanicCharm;
    static shamanicCharmCooldown = 0;
    static dotResist;

    constructor() {
        super();
    }

    ResetEffects() {
        RequiemPlayer.blessedRelic = false;
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
        RequiemPlayer.precious = false;
        RequiemPlayer.faerieRing = false;
        RequiemPlayer.warriorBracer = false;
        RequiemPlayer.brawlerGloves = false;
        RequiemPlayer.featherCrystal = false;
        RequiemPlayer.manaEqualizer = false;
        RequiemPlayer.allCrit = 0;
        RequiemPlayer.allDamage = 0;
        RequiemPlayer.attackSpeed = 0;
        RequiemPlayer.castingSpeed = 0;
        RequiemPlayer.firingSpeed = 0;
        RequiemPlayer.shimmeringCloak = false;
        RequiemPlayer.hallowTreasureMagnet = false;
        RequiemPlayer.absorptionSphere = false;
        RequiemPlayer.runicScroll = false;
        RequiemPlayer.shamanicCharm = false;
        RequiemPlayer.dotResist = 0;
    }

    PostUpdateEquips() {
        RequiemPlayer.MiscEffects(this.player);
        RequiemPlayer.StandingStillEffects(this.player);
        RequiemPlayer.Limits(this.player);
        
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
                        RequiemPlayer.allDamage += 0.5;
                        RequiemPlayer.allCrit += 25;
                        break;
                    }
                    case 80: {
                        this.player.blackout = false;
                        this.player.statDefense += 30;
                        RequiemPlayer.allDamage += 0.25;
                        RequiemPlayer.allCrit += 10;
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
                        RequiemPlayer.allDamage += 0.25;
                        RequiemPlayer.allCrit += 10;
                        break;
                    }
                    case 22: {
                        this.player.blind = false;
                        this.player.statDefense += 15;
                        RequiemPlayer.allDamage += 0.1;
                        RequiemPlayer.allCrit += 5;
                        break;
                    }
                }
            }
        }
        
        if (RequiemPlayer.faerieRing) {
            this.player.meleeSpeed += 0.12;
            this.player.maxMinions += 2;
            RequiemPlayer.allDamage += 0.12;
            this.player.minionKB += 1.2;
            this.player.pickSpeed -= 0.15;
            if (Terraria.Main.eclipse || !Terraria.Main.dayTime) {
                this.player.statDefense += 15;
            }
        }
        
        if (RequiemPlayer.manaEqualizer) {
            if (this.player.statMana > this.player.statManaMax2 * 0.6) {
                this.player.magicDamage += 0.35;
                this.player.magicCrit += 10;
            } else if (this.player.statMana < this.player.statManaMax2 * 0.2) {
                for (let i = 0; i < 8; i++) {
                    const dust = Terraria.Dust.NewDust(this.player.position, this.player.width, this.player.height, 132, 0, 0, 0, Microsoft.Xna.Framework.Graphics.Color.new(), 1);
                    Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, Terraria.Utils['float NextFloat(UnifiedRandom r)'](Terraria.Main.rand) * 2 + 0.5);
                    Terraria.Main.dust[dust].scale = Terraria.Utils['float NextFloat(UnifiedRandom r)'](Terraria.Main.rand) + 1.2;
                    Terraria.Main.dust[dust].noGravity = true;
                }
                RequiemPlayer.manaEqualizerVolatilityStack += 1;
                const color = Microsoft.Xna.Framework.Graphics.Color.new();
                color.R = 245;
                color.G = 255;
                color.B = 142;
                Terraria.CombatText['int NewText(Rectangle location, Color color, int amount, bool dramatic, bool dot)'](this.player.getRect(), color, RequiemPlayer.manaEqualizerVolatilityStack, false, false);
                this.player.statMana += this.player.statManaMax2 * 0.6;
                Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](4, this.player.position, 58);
            }
        }
        if (RequiemPlayer.manaEqualizerVolatilityStack > 0) {
            RequiemPlayer.castingSpeed += RequiemPlayer.manaEqualizerVolatilityStack * 0.03333333333;
            RequiemPlayer.manaEqualizerVolatilityTimer++;
            if (RequiemPlayer.manaEqualizerVolatilityTimer > Utils.secondsToFrames(12)) {
                RequiemPlayer.manaEqualizerVolatilityStack--;
                RequiemPlayer.manaEqualizerVolatilityTimer = 0;
            }
            if (RequiemPlayer.manaEqualizerVolatilityStack >= 10) {
                RequiemPlayer.manaEqualizerVolatilityStack = 0;
                this.player.KillMe(Terraria.DataStructures.PlayerDeathReason.ByCustomReason(`${this.player.name} ${ModLocalization.getTranslationString('DeathText.ManaEqualizer')}`), this.player.statLife, 1, false);
                Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](4, this.player.position, 58);
                for (let i = 0; i < 15; i++) {
                    const dust = Terraria.Dust.NewDust(this.player.position, this.player.width, this.player.height, 27, Utils.randNextRange(-4, 4), Utils.randNextRange(-4, 4), 0, Microsoft.Xna.Framework.Graphics.Color.new(), 1);
                    Terraria.Main.dust[dust].scale = 1.2 + Utils.randNext(10) * 0.2;
                    Terraria.Main.dust[dust].noGravity = true;
                }
                for (let j = 0; j < 30; j++) {
                    const color = Microsoft.Xna.Framework.Graphics.Color.new();
                    color.R = 255;
                    color.G = 98;
                    color.B = 236;
                    const dust = Terraria.Dust.NewDust(this.player.position, this.player.width, this.player.height, 27, Utils.randNextRange(-15, 15), Utils.randNextRange(-15, 15), 0, color, 1.5);
                    Terraria.Main.dust[dust].noGravity = true;
                }
                for (let k = 0; k < 20; k++) {
                    const color = Microsoft.Xna.Framework.Graphics.Color.new();
                    color.R = 190;
                    color.G = 0;
                    color.B = 165;
                    const dust = Terraria.Dust.NewDust(this.player.position, this.player.width, this.player.height, 27, Utils.randNextRange(-10, 10), Utils.randNextRange(-10, 10), 0, color, 2.25);
                    Terraria.Main.dust[dust].noGravity = true;
                }
            }
        }
        
        if (RequiemPlayer.blessedRelic && RequiemPlayer.blessedRelicTimer > 0) {
            this.player.minionDamage += 0.1;
            this.player.statDefense += 6;
            this.player.endurance += 0.03;
            this.player.lifeRegen += 2;
        }
        
        RequiemPlayer.CritAndDamageBoost(this.player);
        RequiemPlayer.AttackSpeedMultiplier(this.player);
    }
    
    OnHitNPC(item, target, damage, knockback, crit) {
        RequiemPlayer.ItemOnHit(item, this.player, target, damage, crit, Utils.isNPCHostile(target) && !target.SpawnedFromStatue);
        RequiemPlayer.NPCDebuffsOnHit(target, item.melee, item.ranged, item.magic, item.summon, Utils.isNPCHostile(target) && !target.SpawnedFromStatue);
    }

    OnHitNPCWithProj(proj, target) {
        RequiemPlayer.ProjOnHit(proj, this.player, target, Utils.isNPCHostile(target) && !target.SpawnedFromStatue);
        RequiemPlayer.NPCDebuffsOnHit(target, proj.melee, proj.ranged, proj.magic, Utils.isSummon(proj), Utils.isNPCHostile(target) && !target.SpawnedFromStatue);
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
        
        if (RequiemPlayer.faerieRing && (Terraria.Main.eclipse || Terraria.Main.dayTime)) {
            this.player.lifeRegen += 3;
        }
    }

    UpdateBadLifeRegen() {
        if (RequiemPlayer.manaEqualizerVolatilityStack > 0) {
            if (this.player.lifeRegen > 0){
                this.player.lifeRegen = 0;
            }
            this.player.lifeRegenTime = 0;
            this.player.lifeRegen -= RequiemPlayer.manaEqualizerVolatilityStack / 10 * 10;
        }
        
        if (RequiemPlayer.dotResist > 0) {
            this.player.lifeRegen = Math.round(this.player.lifeRegen * (1 - RequiemPlayer.dotResist));
        }
    }

    PreHurt(pvp, quiet, modifier) {
        RequiemPlayer.stealth = 1;
        
        if (RequiemPlayer.icyHeart) {
            modifier.damage *= RequiemPlayer.icyHeartDR;
            RequiemPlayer.icyHeartTimer = -600;
            if (modifier.damage === 0) {
                Utils.giveIFrames(this.player, 45, true);
            }
        }
        
        if (RequiemPlayer.undeadHunter && Utils.randNext(10) === 0 && RequiemPlayer.undeadHunterCooldown === 0) {
            modifier.damage = 0;
            if (modifier.damage === 0) {
                Utils.giveIFrames(this.player, 45, true);
                RequiemPlayer.undeadHunterCooldown = Utils.secondsToFrames(15);
                for (let i = 0; i < 100; i++) {
                    const dust = Terraria.Dust.NewDust(this.player.position, this.player.width, this.player.height, 235, 0, 0, 100, Microsoft.Xna.Framework.Graphics.Color.new(), 2);
                    Terraria.Main.dust[dust].noGravity = true;
                    Terraria.Main.dust[dust].position.X += Utils.randNextRange(-20, 21);
                    Terraria.Main.dust[dust].position.Y += Utils.randNextRange(-20, 21);
                    Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, 1.2);
                    Terraria.Main.dust[dust].scale *= 1 + Utils.randNext(40) * 0.01;
                }
            }
        }
        
        if (RequiemPlayer.absorptionSphere) {
            const healLife = modifier.damage * 0.05;
            Utils.healLife(this.player, healLife);
        }
        
        if (RequiemPlayer.shamanicCharm && RequiemPlayer.shamanicCharmCooldown <= 0) {
            const flag = Terraria.Main.hardMode ? 50 : 15;
            RequiemPlayer.shamanicCharmCooldown = Utils.secondsToFrames(7);
            for (let i = 0; i < 12; i++) {
                Terraria.Projectile['int NewProjectile(Vector2 position, Vector2 velocity, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](this.player.Center, Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Utils.RotatedBy(Microsoft.Xna.Framework.Vector2.UnitX, Math.PI * 2 / 8 * i, Microsoft.Xna.Framework.Vector2.new()), 1.25), 263, flag * Utils.averageDamage(this.player), 6, this.player.whoAmI, 0, 0);
            }
            for (let i = 0; i < 10; i++) {
                Terraria.Projectile['int NewProjectile(Vector2 position, Vector2 velocity, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](this.player.Center, Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Utils.RotatedBy(Microsoft.Xna.Framework.Vector2.UnitX, Math.PI * 2 / 10 * i, Microsoft.Xna.Framework.Vector2.new()), 0), 274, flag * Utils.averageDamage(this.player), 4, this.player.whoAmI, 0, 0);
            }
        }
        
        return true;
    }
    
    PreKill(damage, hitDirection, pvp) {
        if (RequiemPlayer.ankhOfLife && RequiemPlayer.ankhOfLifeCooldown === 0) {
            RequiemPlayer.encased = true;
            RequiemPlayer.ankhOfLifeCooldown = Utils.secondsToFrames(180);
            this.player.statLife = this.player.statLifeMax2 * 0.3;
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
        RequiemPlayer.icyHeartTimer++;
        
        RequiemPlayer.areThereAnyBosses = Utils.anyBossNPCs();
        
        RequiemPlayer.blessedRelicTimer--;
        if (RequiemPlayer.blessedRelicTimer < 0) {
            RequiemPlayer.blessedRelicTimer = 0;
        }
        
        RequiemPlayer.ankhOfLifeCooldown--;
        if (RequiemPlayer.ankhOfLifeCooldown < 0) {
            RequiemPlayer.ankhOfLifeCooldown = 0;
        }
        
        RequiemPlayer.undeadHunterCooldown--;
        if (RequiemPlayer.undeadHunterCooldown < 0) {
            RequiemPlayer.undeadHunterCooldown = 0;
        }
        
        RequiemPlayer.brawlerGlovesCooldown--;
        if (RequiemPlayer.brawlerGlovesCooldown < 0) {
            RequiemPlayer.brawlerGlovesCooldown = 0;
        }
        
        RequiemPlayer.featherCrystalCooldown--;
        if (RequiemPlayer.featherCrystalCooldown < 0) {
            RequiemPlayer.featherCrystalCooldown = 0;
        }
        
        RequiemPlayer.shamanicCharmCooldown--;
        if (RequiemPlayer.shamanicCharmCooldown < 0) {
            RequiemPlayer.shamanicCharmCooldown = 0;
        }

        player.statManaMax2 += (RequiemPlayer.manaEqualizer ? player.statManaMax2 * 0.5 : 0);
        
        if (RequiemPlayer.encased) {
            RequiemPlayer.encasedTimer++;
            if (RequiemPlayer.encasedTimer > 0 && RequiemPlayer.encasedTimer < 180) {
                player.frozen = true;
                Utils.giveIFrames(player, 90);
                player.velocity.X = 0;
                player.velocity.Y = -0.4;
                player.buffImmune[47] = true;
                player.buffImmune[46] = true;
                const dust = Terraria.Dust.NewDust(player.position, player.width, player.height, 88, 0, 0, 0, Microsoft.Xna.Framework.Graphics.Color.new(), 1);
                Terraria.Main.dust[dust].noGravity = true;
                Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, 2);
            } else if (RequiemPlayer.encasedTimer >= 180) {
                Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](2, player.position, 27);
                RequiemPlayer.encasedTimer = 0;
                RequiemPlayer.encased = false;
            }
        }
        
        if (RequiemPlayer.brawlerGloves) {
            const num = 0.15;
            player.meleeDamage += RequiemPlayer.brawlerGlovesStack / 150 * num;
        }

        if (RequiemPlayer.icyHeart) {
            RequiemPlayer.icyHeartDR = Microsoft.Xna.Framework.MathHelper.Lerp(1, 0, Microsoft.Xna.Framework.MathHelper.Clamp(RequiemPlayer.icyHeartTimer, 0, 1200) / 1200);
            const num = Microsoft.Xna.Framework.MathHelper.Lerp(1, 20, Microsoft.Xna.Framework.MathHelper.Clamp(RequiemPlayer.icyHeartTimer, 0, 1200) / 1200);
            const playerWidth = player.width * 1.2;
            const playerHeight = player.height * 1.1;
            for (let i = 0; i < num; i++) {
                const radius = Terraria.Main.rand.NextDouble() * 2.0 * 3.14;
                const vector = Microsoft.Xna.Framework.Vector2.new();
                vector.X = Math.sin(radius) * playerWidth;
                vector.Y = Math.cos(radius) * playerHeight;
                const num = Microsoft.Xna.Framework.Vector2.op_Subtraction(Microsoft.Xna.Framework.Vector2.op_Addition(player.Center, vector), Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Microsoft.Xna.Framework.Vector2.One, 4));
                const dust = Terraria.Dust.NewDust(num, 0, 0, 135, 0, 0, 100, Microsoft.Xna.Framework.Graphics.Color.new(), 1);
                Terraria.Main.dust[dust].noGravity = true;
                Terraria.Main.dust[dust].velocity = player.velocity;
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
    
    static StandingStillEffects(player) {
        if (RequiemPlayer.shimmeringCloak) {
            if (player.itemAnimation > 0){
                RequiemPlayer.stealthTimer = 5;
            }
            if (player.velocity.X === 0 && !player.mount.Active) {
                if (RequiemPlayer.stealthTimer === 0 && RequiemPlayer.stealth > 0) {
                    RequiemPlayer.stealth -= 0.015;
                    if (RequiemPlayer.stealth <= 0){
                        RequiemPlayer.stealth = 0;
                    }
                }
                if (RequiemPlayer.stealth === 0) {
                    const dust = Terraria.Dust.NewDust(player.position, player.width + 4, player.height + 4, 244, 0.4, 0.4, 100, Microsoft.Xna.Framework.Graphics.Color.new(), 1.5);
                    Terraria.Main.dust[dust].noGravity = true;
                    Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, 0.5);
                }
            } else {
                const num = Math.abs(player.velocity.X) + Math.abs(player.velocity.Y);
                RequiemPlayer.stealth += num * 0.0075;
                if (RequiemPlayer.stealth > 1) {
                    RequiemPlayer.stealth = 1;
                }
                if (player.mount.Active) {
                    RequiemPlayer.stealth = 1;
                }
            }

            player.rangedDamage += (1 - RequiemPlayer.stealth) * 0.15;
            player.rangedCrit += (1 - RequiemPlayer.stealth) * 5;
            if (RequiemPlayer.stealthTimer > 0) {
                RequiemPlayer.stealthTimer--;
            }
        } else {
            RequiemPlayer.stealth = 1;
        }
    }
    
    static ItemOnHit(item, player, target, damage, crit, npcCheck) {
        if (npcCheck) {
            if (RequiemPlayer.precious) {
                if (Utils.randNext(1000) === 0) {
                    Utils.spawnItem(target.Center, target.width, target.height, 74, 1, 0);
                }
            }

            if (RequiemPlayer.brawlerGloves && RequiemPlayer.brawlerGlovesStack < 150 && crit && RequiemPlayer.brawlerGlovesCooldown <= 0) {
                RequiemPlayer.brawlerGlovesStack++;
                RequiemPlayer.brawlerGlovesCooldown = 30;
            }
        }

        if (RequiemPlayer.warriorBracer && Utils.randNext(11) === 0) {
            target.StrikeNPC(item.damage, 0, 0, crit, false, false);
        }
    }
    
    static ProjOnHit(proj, player, target, npcCheck) {
        if (npcCheck) {
            if (RequiemPlayer.precious) {
                if (Utils.randNext(1000) === 0) {
                    Utils.spawnItem(target.Center, target.width, target.height, 74, 1, 0);
                }
            }
        }
        
        if (proj.melee) {
            RequiemPlayer.ProjMeleeOnHit(proj, player, target, npcCheck);
        }
        
        if (Utils.isSummon(proj)) {
            RequiemPlayer.SummonOnHit(proj, player, target, npcCheck);
        }
    }
    
    static ProjMeleeOnHit(proj, player, target, npcCheck) {
        if (npcCheck) {
            if (RequiemPlayer.warriorBracer && Utils.randNext(11) === 0) {
                // Полурабочий костыль крит. шанса
                const crit = Utils.randNextRange(0, 101) < Terraria.Main.player[proj.owner].meleeCrit;
                target.StrikeNPC(proj.damage, 0, 0, crit, false, false);
            }
        }
    }

    static SummonOnHit(proj, player, target, npcCheck) {
        if (npcCheck) {
            if (RequiemPlayer.blessedRelic) {
                RequiemPlayer.blessedRelicTimer = 60;
            }
        }
    }
    
    static NPCDebuffsOnHit(target, melee, ranged, magic, summon, npcCheck) {
        if (npcCheck) {
            if (RequiemPlayer.precious) {
                target.AddBuff(72, 120, false);
            }

            if (magic) {
                if (RequiemPlayer.runicScroll) {
                    switch (Utils.randNext(13)) {
                        case 0: {
                            target.AddBuff(24, 120, false);
                            break;
                        }
                        case 1: {
                            target.AddBuff(70, 120, false);
                            break;
                        }
                        case 2: {
                            target.AddBuff(39, 120, false);
                            break;
                        }
                        case 3: {
                            target.AddBuff(44, 120, false);
                            break;
                        }
                        case 4: {
                            target.AddBuff(31, 120, false);
                            break;
                        }
                        case 5: {
                            target.AddBuff(153, 120, false);
                            break;
                        }
                        case 6: {
                            target.AddBuff(20, 120, false);
                            break;
                        }
                    }
                }
            }
                
            if (summon) {
                if (RequiemPlayer.shadowflameMinion) {
                    target.AddBuff(153, 180, false);
                }

                if (RequiemPlayer.oilMinion && Utils.randNext(2) === 0) {
                    target.AddBuff(204, 60 * Utils.randNextRange(4, 10), false);
                }
            }
        }
    }
    
    static AttackSpeedMultiplier(player) {
        const attackSpeed = RequiemPlayer.attackSpeed;
        if (attackSpeed > 0) {
            player.meleeSpeed += attackSpeed;
            RequiemPlayer.firingSpeed += attackSpeed;
            RequiemPlayer.castingSpeed += attackSpeed;
        }

        const item = Terraria.Item.new();
        item['void SetDefaults(int Type, bool noMatCheck)'](player.HeldItem.type, false);
        item.Prefix(player.HeldItem.prefix);
        if (item.magic) {
            player.HeldItem.useTime = item.useTime * (1 - RequiemPlayer.castingSpeed);
            player.HeldItem.useAnimation  = item.useAnimation * (1 - RequiemPlayer.castingSpeed);
        }
        if (item.ranged) {
            player.HeldItem.useTime = item.useTime * (1 - RequiemPlayer.firingSpeed);
            player.HeldItem.useAnimation  = item.useAnimation * (1 - RequiemPlayer.firingSpeed);
        }
        Terraria.Item.TurnToAir(item);
    }
    
    static CritAndDamageBoost(player) {
        const crit = RequiemPlayer.allCrit;
        const damage = RequiemPlayer.allDamage;
        if (crit > 0) {
            player.meleeCrit += crit;
            player.magicCrit += crit;
            player.rangedCrit += crit;
        }
        
        if (damage > 0) {
            player.meleeDamage += damage;
            player.magicDamage += damage;
            player.rangedDamage += damage;
        }
    }
}