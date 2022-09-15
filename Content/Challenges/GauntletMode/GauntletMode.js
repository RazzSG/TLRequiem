import {Microsoft, Terraria} from "../../../TL/ModImports.js";
import {Boss} from "./Boss.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";
import * as Utils from "../../../Common/RequiemUtilities.js";

export class GauntletMode {
    static GauntletActive = false;
    static Stage = 0;
    static Bosses = [];
    static SpawnCountdown = 180;
    static TimeChangeContext = {
        day: 1,
        night: 2
    };
    
    static Load() {
        const bossList = [];
        bossList.push(new Boss({
            id: 50,
            time: 1,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [-9, -8, -7, -4, -3, 1, 147, 225, 244, 535]
        }));
        bossList.push(new Boss({
            id: 4,
            time: 2,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [5]
        }));
        bossList.push(new Boss({
            id: 266,
            time: 1,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [267]
        }));
        bossList.push(new Boss({
            id: 13,
            time: 1,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [14, 15, 112]
        }));
        bossList.push(new Boss({
            id: 222,
            time: 1,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: []
        }));
        bossList.push(new Boss({
            id: 35,
            time: 2,
            spawnContext: (type) => {
                const player = Terraria.Main.player[Terraria.Main.myPlayer];
                const num = Terraria.NPC.NewNPC(player.position.X + Utils.randNextRange(-200, 201), player.position.Y - 400.0, type, 1, 0.0, 0.0, 0.0, 0.0, 255);
                Terraria.Main.npc[num].timeLeft *= 20;
                this.BossAwakenMessage(num);
            },
            spawnCountdown: -1,
            permittedNPCs: [36]
        }));
        bossList.push(new Boss({
            id: 113,
            time: 1,
            spawnContext: () => {
                Terraria.NPC.SpawnWOF(Terraria.Main.player[Terraria.Main.myPlayer].position);
            },
            spawnCountdown: -1,
            permittedNPCs: [114, 115, 116, 117, 118, 119]
        }));
        bossList.push(new Boss({
            id: 657,
            time: 1,
            spawnContext: () => {
                if (Terraria.Main.player[Terraria.Main.myPlayer].active) {
                    Terraria.Main.player[Terraria.Main.myPlayer].Spawn(Terraria.PlayerSpawnContext.ReviveFromDeath);
                }
                Terraria.NPC.SpawnOnPlayer(Terraria.Main.myPlayer, 657);
            },
            spawnCountdown: -1,
            permittedNPCs: [658, 659, 660]
        }));
        bossList.push(new Boss({
            id: 126,
            time: 2,
            spawnContext: () => {
                Terraria.NPC.SpawnOnPlayer(Terraria.Main.myPlayer, 126);
                Terraria.NPC.SpawnOnPlayer(Terraria.Main.myPlayer, 125);
            },
            spawnCountdown: -1,
            permittedNPCs: [125]
        }));
        bossList.push(new Boss({
            id: 134,
            time: 2,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [135, 136, 139]
        }));
        bossList.push(new Boss({
            id: 127,
            time: 2,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [128, 129, 130, 131, 139]
        }));
        bossList.push(new Boss({
            id: 370,
            time: 1,
            spawnContext: (type) => {
                const player = Terraria.Main.player[Terraria.Main.myPlayer];
                const num = Terraria.NPC.NewNPC(player.position.X + Utils.randNextRange(-200, 201), player.position.Y - 400.0, type, 1, 0.0, 0.0, 0.0, 0.0, 255);
                Terraria.Main.npc[num].timeLeft *= 20;
                this.BossAwakenMessage(num);
            },
            spawnCountdown: -1,
            permittedNPCs: [371, 372, 373]
        }));
        bossList.push(new Boss({
            id: 262,
            time: 1,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [264, 263, 265]
        }));
        bossList.push(new Boss({
            id: 636,
            time: 2,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: []
        }));
        bossList.push(new Boss({
            id: 245,
            time: 1,
            spawnContext: (type) => {
                const player = Terraria.Main.player[Terraria.Main.myPlayer];
                const num = Terraria.NPC.NewNPC(player.position.X + Utils.randNextRange(-200, 201), player.position.Y - 400.0, type, 1, 0.0, 0.0, 0.0, 0.0, 255);
                Terraria.Main.npc[num].timeLeft *= 20;
                this.BossAwakenMessage(num);
            },
            spawnCountdown: -1,
            permittedNPCs: [246, 247, 248, 249]
        }));
        bossList.push(new Boss({
            id: 439,
            time: 1,
            spawnContext: (type) => {
                const player = Terraria.Main.player[Terraria.Main.myPlayer];
                const num = Terraria.NPC.NewNPC(player.Center.X, player.Center.Y - 400.0, type, 1, 0.0, 0.0, 0.0, 0.0, 255);
                Terraria.Main.npc[num].direction = (Terraria.Main.npc[num].spriteDirection = Math.sign(player.Center.X - player.Center.X - 90.0));
                Terraria.Main.npc[num].timeLeft *= 20;
                this.BossAwakenMessage(num);
            },
            spawnCountdown: -1,
            permittedNPCs: [440, 454, 455, 456, 457, 458, 459, 521, 522, 523]
        }));
        bossList.push(new Boss({
            id: 398,
            time: 1,
            spawnContext: null,
            spawnCountdown: -1,
            permittedNPCs: [396, 397, 400, 401]
        }));
        this.Bosses = bossList;
    }
    
    static BossAwakenMessage(npcIndex) {
        const typeName = Terraria.Main.npc[npcIndex].TypeName;
        const isRussian = Terraria.Localization.GameCulture.FromCultureName(Terraria.Localization.GameCulture.CultureName.Russian).IsActive;
        Terraria.Main.NewText(isRussian ? `Пробудился босс ${typeName}!` : `${typeName} has awoken!`, 175, 75, 255);
    }
    
    static Update() {
        if (!this.GauntletActive) {
            this.SpawnCountdown = 180;
            if (this.Stage !== 0) {
                this.Stage = 0;
            }
            return;
        }
        if (Terraria.NPC.MoonLordCountdown > 0) {
            Terraria.NPC.MoonLordCountdown = 0;
        }

        if (!RequiemPlayer.areThereAnyBosses) {
            if (this.SpawnCountdown > 0) {
                this.SpawnCountdown--;
            }

            if (this.SpawnCountdown <= 0) {
                this.SpawnCountdown = 120;

                if (this.Stage < this.Bosses.length - 1 && this.Bosses[this.Stage + 1].spawnCountdown !== -1) {
                    this.SpawnCountdown = this.Bosses[this.Stage + 1].spawnCountdown;
                }

                if (this.Bosses[this.Stage].time === this.TimeChangeContext.day) {
                    Terraria.Main.time = 27000.0;
                    Terraria.Main.dayTime = true;
                } else {
                    Terraria.Main.time = 0.0;
                    Terraria.Main.dayTime = false;
                }

                this.Bosses[this.Stage].spawnContext(this.Bosses[this.Stage].id);
            }
        }
    }
    
    static EndEffects() {
        for (let i = 0; i < 200; i++) {
            const npc = Terraria.Main.npc[i];

            if (npc.active && (npc.boss || npc.type === 13 || npc.type === 14 || npc.type === 15)) {
                npc.life = 0;
                npc.HitEffect(0, 10.0);
                npc.checkDead();
                npc.active = false;
            }
        }

        this.GauntletActive = false;
        this.Stage = 0;
        Utils.killAllHostileProjectiles();
    }
    
    static OnBossKill(npc) {
        if (npc.type === 13 || npc.type === 14 || npc.type === 15) {
            if (npc.boss) {
                this.Stage++;
                Utils.killAllHostileProjectiles();
            }
        }
        
        this.Bosses.forEach(boss => {
            if (boss.id === npc.type && boss.id !== 13) {
                this.Stage++;
                Utils.killAllHostileProjectiles();

                if (boss.id === 266) {
                    Terraria.Main.player[Terraria.Main.myPlayer].ZoneCrimson = false;
                }

                if (boss.id === 13) {
                    Terraria.Main.player[Terraria.Main.myPlayer].ZoneCorrupt = false;
                }

                if (boss.id === 35) {
                    const player = Terraria.Main.player[Terraria.Main.myPlayer];
                    const postImmune = player.immune;
                    const postImmuneTime = player.immuneTime;

                    player.grappling[0] = -1;
                    player.grapCount = 0;
                    for (let i = 0; i < 1000; i++) {
                        if (Terraria.Main.projectile[i].active && Terraria.Main.projectile[i].owner === player.whoAmI && Terraria.Main.projectile[i].aiStyle === 7) {
                            Terraria.Main.projectile[i].Kill();
                        }
                    }

                    player.velocity = Microsoft.Xna.Framework.Vector2.Zero;
                    player.immune = postImmune;
                    player.immuneTime = postImmuneTime;
                    player.DemonConch();

                    for (let i = 0; i < 70; i++) {
                        const dust = Terraria.Dust.NewDust(player.position, player.width, player.height, 15, player.velocity.X * 0.2, player.velocity.Y * 0.2, 150, Microsoft.Xna.Framework.Graphics.Color.Cyan, 1.2);
                        Terraria.Main.dust[dust].velocity = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](Terraria.Main.dust[dust].velocity, 0.5);
                    }

                    Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](2, player.position, 0);
                }

                if (boss.id === 439) {
                    for (let i = 0; i < 200; i++) {
                        const isPillars = Terraria.Main.npc[i].type === 493 || Terraria.Main.npc[i].type === 422 || Terraria.Main.npc[i].type === 507 || Terraria.Main.npc[i].type === 517;

                        if (Terraria.Main.npc[i].active && isPillars) {
                            Terraria.Main.npc[i].active = false;
                        }
                    }
                }

                if (boss.id === 398) {
                    this.Stage = 0;
                    this.GauntletActive = false;
                    
                    const player = Terraria.Main.player[Terraria.Main.myPlayer];
                    const proj = Terraria.Projectile['int NewProjectile(float X, float Y, float SpeedX, float SpeedY, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](player.Center.X, player.Center.Y, 0.0, -5.0, 167, 0, 0.0, Terraria.Main.myPlayer, 0.0, 0.0);
                    Terraria.Main.projectile[proj].ranged = false;
                }
            }
        });
    }
    
    static ForceDespawnOtherNPCs(npc) {
        if (this.Stage < this.Bosses.length && !this.Bosses[this.Stage].permittedNPCs.includes(npc.type)) {
            npc.active = false;
            npc.netUpdate = true;
        }
    }
}