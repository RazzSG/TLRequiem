import {ModItem} from "../../../TL/ModItem.js";
import {Microsoft, Terraria} from "../../../TL/ModImports.js";
import {secondsToFrames} from "../../../Common/RequiemUtilities.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class FieryCore extends ModItem {
    SetDefaults() {
        this.Item.value = Terraria.Item.buyPrice(0, 50, 0, 0);
        this.Item.accessory = true;
        this.Item.master = true;
    }
    
    UpdateAccessory(player) {
        if (player.ZoneUnderworldHeight) {
            RequiemPlayer.allDamage += 0.1;
        }
        player.buffImmune[24] = true;
        player.buffImmune[67] = true;
        const distance = 400;
        for (let i = 0; i < 200; i++) {
            const npc = Terraria.Main.npc[i];
            const flag = npc.active && !npc.friendly && !npc.boss && npc.damage > 0 && !npc.dontTakeDamage && Microsoft.Xna.Framework.Vector2['float Distance(Vector2 value1, Vector2 value2)'](player.Center, npc.Center) <= distance;
            if (flag) {
                npc.AddBuff(24, secondsToFrames(3), false);
            }
            if (flag && npc.FindBuffIndex(24) !== -1 && npc.life <= npc.lifeMax * 0.05){
                Terraria.Projectile['int NewProjectile(float X, float Y, float SpeedX, float SpeedY, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](npc.Center.X, npc.Center.Y, 0, 0, 612, 50, 4, Terraria.Main.myPlayer, 0, 0);
            }
        }
    }
}