import {ModItem} from "../../../../TL/ModItem.js";
import {Microsoft, Terraria} from "../../../../TL/ModImports.js";
import {RequiemGlobalItem} from "../../../RequiemGlobalItem.js";
import {randNext} from "../../../../Common/RequiemUtilities.js";

export class ElectrumBow extends ModItem {
    constructor() {
        super();
        this.Texture = this.Texture = `Items/Weapons/Ranged/${this.constructor.name}`;
    }
    
    SetDefaults() {
        this.Item.damage = 50;
        this.Item.ranged = true;
        this.Item.width = 24;
        this.Item.height = 58;
        this.Item.useTime = 22;
        this.Item.useAnimation = 22;
        this.Item.useStyle = 5;
        this.Item.noMelee = true;
        this.Item.knockBack = 4;
        this.Item.value = RequiemGlobalItem.Rarity5BuyPrice;
        this.Item.rare = 5;
        this.Item.UseSound = Terraria.ID.SoundID.Item5;
        this.Item.autoReuse = true;
        this.Item.shoot = 1;
        this.Item.shootSpeed = 12;
        this.Item.useAmmo = Terraria.ID.AmmoID.Arrow;
    }
    
    Shoot(player, position, velocity, type, damage, knockback) {
        const num = Math.PI / 17;
        let vector = Microsoft.Xna.Framework.Vector2.new();
        vector.X = velocity.X;
        vector.Y = velocity.Y;
        Microsoft.Xna.Framework.Vector2['void Normalize()'](vector);
        vector = Microsoft.Xna.Framework.Vector2['Vector2 op_Multiply(Vector2 value, float scaleFactor)'](vector, 20);
        for (let i = 0; i < 2; i++) {
            const num2 = i - (2 - 1) / 2;
            let vector2 = Terraria.Utils.RotatedBy(vector, Microsoft.Xna.Framework.MathHelper.ToRadians(num * num2), Microsoft.Xna.Framework.Vector2.new());
            vector2 = Microsoft.Xna.Framework.Vector2.op_Subtraction(vector2, vector);
            let arrowType = 0;
            switch (randNext(13)) {
                case 0:
                    arrowType = 1;
                    break;
                case 1:
                    arrowType = 2;
                    break;
                case 2:
                    arrowType = 4;
                    break;
                case 3:
                    arrowType = 5;
                    break;
                case 4:
                    arrowType = 41;
                    break;
                case 5:
                    arrowType = 91;
                    break;
                case 6:
                    arrowType = 103;
                    break;
                case 7:
                    arrowType = 172;
                    break;
                case 8:
                    arrowType = 225;
                    break;
                case 9:
                    arrowType = 278;
                    break;
                case 10:
                    arrowType = 282;
                    break;
                case 11:
                    arrowType = 474;
                    break;
                case 12:
                    arrowType = 639;
                    break;
            }
            
            const proj = Terraria.Projectile['int NewProjectile(float X, float Y, float SpeedX, float SpeedY, int Type, int Damage, float KnockBack, int Owner, float ai0, float ai1)'](position.X + vector2.X, position.Y + vector2.Y, velocity.X, velocity.Y, arrowType, damage, knockback, player.whoAmI, 0, 0);
            Terraria.Main.projectile[proj].noDropItem = true;
        }
        return true;
    }
    
    HoldoutOffset() {
        return { X: 5, Y: 30 };
    }
}