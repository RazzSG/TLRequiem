import {GlobalProjectile} from "../TL/GlobalProjectile.js";
import {Terraria} from "../TL/ModImports.js";
import {RequiemPlayer} from "./RequiemPlayer.js";
import * as Utils from "../Common/RequiemUtilities.js";

export class RequiemGlobalProjectile extends GlobalProjectile {
    Kill(projectile) {
        const player = Terraria.Main.player[projectile.owner];
        
        if (RequiemPlayer.featherCrystal && projectile.magic && player.whoAmI === Terraria.Main.myPlayer && RequiemPlayer.featherCrystalCooldown <= 0 && Utils.randNext(4) === 0) {
            Terraria.Audio.SoundEngine['void PlaySound(int type, Vector2 position, int style)'](2, player.position, 1);
            RequiemPlayer.featherCrystalCooldown = 60;
            
            for (let i = 0; i < 5; i++) {
                const velocityX = -projectile.velocity.X * Utils.randNextRange(40, 70) * 0.01 + Utils.randNextRange(-20, 21) * 0.4;
                const velocityY = -projectile.velocity.Y * Utils.randNextRange(40, 70) * 0.01 + Utils.randNextRange(-20, 21) * 0.4;
                Terraria.Projectile['int NewProjectile(float X, float Y, float SpeedX, float SpeedY, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](projectile.position.X + velocityX, projectile.position.Y + velocityY, velocityX, velocityY, 90, 25 * player.magicDamage, 0, projectile.owner, 0, 0);
            }
        }
    }
}