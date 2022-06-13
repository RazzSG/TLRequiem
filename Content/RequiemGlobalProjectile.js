import {GlobalProjectile} from "../TL/GlobalProjectile.js";
import {Terraria} from "../TL/ModImports.js";
import {RequiemPlayer} from "./RequiemPlayer.js";

export class RequiemGlobalProjectile extends GlobalProjectile {
    Kill(projectile) {
        const player = Terraria.Main.player[projectile.owner];
        
        if (RequiemPlayer.featherCrystal && projectile.magic && player.whoAmI === Terraria.Main.myPlayer && RequiemPlayer.featherCrystalCooldown <= 0 && Terraria.Main.rand['int Next(int maxValue)'](4) === 0) {
            Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](2, player.position, 1);
            RequiemPlayer.featherCrystalCooldown = 60;
            
            for (let i = 0; i < 5; i++) {
                const velocityX = -projectile.velocity.X * Terraria.Main.rand['int Next(int minValue, int maxValue)'](40, 70) * 0.01 + Terraria.Main.rand['int Next(int minValue, int maxValue)'](-20, 21) * 0.4;
                const velocityY = -projectile.velocity.Y * Terraria.Main.rand['int Next(int minValue, int maxValue)'](40, 70) * 0.01 + Terraria.Main.rand['int Next(int minValue, int maxValue)'](-20, 21) * 0.4;
                Terraria.Projectile['int NewProjectile(float X, float Y, float SpeedX, float SpeedY, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](projectile.position.X + velocityX, projectile.position.Y + velocityY, velocityX, velocityY, 90, 25 * player.magicDamage, 0, projectile.owner, 0, 0);
            }
        }
    }
}