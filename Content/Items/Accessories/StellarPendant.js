import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {Microsoft, Terraria} from "../../../TL/ModImports.js";
import * as Utils from "../../../Common/RequiemUtilities.js";

export class StellarPendant extends ModItem {
    
    static projectileCountdown = 0;
    static active = false;
    
    constructor() {
        super();
    }

    SetDefaults() {
        this.Item.width = 38;
        this.Item.height = 42;
        this.Item.value = RequiemGlobalItem.Rarity2BuyPrice;
        this.Item.rare = 2;
        this.Item.accessory = true;
    }
    
    UpdateAccessory(player) {
        StellarPendant.active = true;
        if (StellarPendant.projectileCountdown <= 0) {
            StellarPendant.projectileCountdown = 240;
        }
        if (StellarPendant.projectileCountdown > 0) {
            StellarPendant.projectileCountdown -= Utils.randNextRange(1, 4);
            if (StellarPendant.projectileCountdown <= 0 && player.whoAmI === Terraria.Main.myPlayer) {
                const speed = 0.03;
                const startPositionX = player.Center.X + Utils.randNextRange(-400, 401);
                const startPositionY = -1000 + player.Center.Y;
                const vector = Microsoft.Xna.Framework.Vector2.new();
                vector.X = startPositionX;
                vector.Y = startPositionY;
                let vector2 = Microsoft.Xna.Framework.Vector2.op_Subtraction(player.Center, vector);
                Microsoft.Xna.Framework.Vector2['void Normalize()'](vector2);
                vector2 = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](vector2, speed);
                for (let i = 0; i < 3; i++) {
                    let vector3 = vector;
                    vector3.X += i * 30 - 30;
                    let vector4 = Terraria.Utils.RotatedBy(vector2, Microsoft.Xna.Framework.MathHelper.ToRadians(-15 + 15 * i), Microsoft.Xna.Framework.Vector2.new());
                    vector4.X = vector4.X + 3 * Terraria.Utils['float NextFloat(UnifiedRandom r)'](Terraria.Main.rand) - 1.5;
                    let type = 0;
                    let damage = 0;
                    switch (Utils.randNext(2)) {
                        case 0:
                            type = 9;
                            damage = 15;
                            break;
                        case 1:
                            type = 92;
                            damage = 15;
                            break;
                    }
                    const proj = Terraria.Projectile['int NewProjectile(float X, float Y, float SpeedX, float SpeedY, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](vector3.X, vector3.Y, vector4.X / 3, vector4.Y / 2, type, damage * Utils.averageDamage(player), 5, Terraria.Main.myPlayer, 0, 0);
                    Terraria.Main.projectile[proj].timeLeft = 80;
                }
            }
        }
    }
}