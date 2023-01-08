import {Terraria, Microsoft, System} from "../TL/ModImports.js";
import {RequiemPlayer} from "./RequiemPlayer.js";

export class StatSheetUI {
    get player() {
        return Terraria.Main.LocalPlayer;
    }
    
    #bgPanel = {
        width: 320,
        height: 190,
        texture() {
            return Terraria.GameContent.TextureAssets.MagicPixel.Value;
        },
        color() {
            const color = Microsoft.Xna.Framework.Graphics.Color.new();
            color.R = 29;
            color.G = 33;
            color.B = 70;
            color.A = 230;
            return color;
        },
        rect() {
            const rect = Microsoft.Xna.Framework.Rectangle.new();
            rect.X = (StatSheetUI.prototype.player.Center.X - this.width / 2) - Terraria.Main.screenPosition.X;
            rect.Y = StatSheetUI.prototype.player.BottomRight.Y - Terraria.Main.screenPosition.Y;
            rect.Width = this.width;
            rect.Height = this.height;
            return rect;
        }
    }
    
    Initialize() {
        const hook = Terraria.Main.DrawRain.hook((original, self) => {
            original(self);

            if (RequiemPlayer.StatSheet && this.player.active) {
                this.#DrawTexture(this.#bgPanel.texture, this.#bgPanel.rect, this.#bgPanel.color);

                this.#AddStat(3508, `Melee Damage: ${Math.round(this.player.meleeDamage * 100 - 100)}%`, 1, 0);
                this.#AddStat(3508, `Melee Crit: ${this.player.meleeCrit}%`, 1, 1);
                this.#AddStat(3508, `Melee Speed: ${Math.round((1.0 - this.player.meleeSpeed) * (100.0 / this.player.meleeSpeed))}%`, 1, 2);
                this.#AddStat(3504, `Ranged Damage: ${Math.round(this.player.rangedDamage * 100 - 100)}%`, 1, 3);
                this.#AddStat(3504, `Ranged Crit: ${this.player.rangedCrit}%`, 1, 4);
                this.#AddStat(3069, `Magic Damage: ${Math.round(this.player.magicDamage * 100 - 100)}%`, 1, 5);
                this.#AddStat(3069, `Magic Crit: ${this.player.magicCrit}%`, 1, 6);
                this.#AddStat(3069, `Mana Cost Reduction: ${Math.round((1.0 - this.player.manaCost) * 100)}%`, 1, 7);
                this.#AddStat(1309, `Minion Damage: ${Math.round(this.player.minionDamage * 100 - 100)}%`, 1, 8);
                this.#AddStat(1309, `Max Minions: ${this.player.maxMinions}`, 1, 9);
                this.#AddStat(1309, `Max Sentries: ${this.player.maxTurrets}`, 1, 10);
                this.#AddStat(3212, `Armor Penetration: ${this.player.armorPenetration}`, 1, 11);

                this.#AddStat(29, `Life: ${this.player.statLifeMax2}`, 2, 0);
                this.#AddStat(49, `Life Regen: ${this.player.lifeRegen}/sec`, 2, 1);
                this.#AddStat(109, `Mana: ${this.player.statManaMax2}`, 2, 2);
                this.#AddStat(109, `Mana Regen: ${this.player.manaRegen / 2}/sec`, 2, 3);
                this.#AddStat(156, `Defense: ${this.player.statDefense}`, 2, 4);
                this.#AddStat(3224, `Damage Reduction: ${Math.round(this.player.endurance * 100)}%`, 2, 5);
                this.#AddStat(3016, `Argo: ${this.player.aggro}`, 2, 6);
                this.#AddStat(54, `Max Speed: ${Math.round((this.player.accRunSpeed + this.player.maxRunSpeed) / 2.0 * this.player.moveSpeed * 6)} mph`, 2, 7);
                this.#AddStat(4479, `Luck: ${System.Math['double Round(double value, int digits)'](this.player.luck, 2)}`, 2, 8);
                this.#AddStat(2374, `Fishing Quests: ${this.player.anglerQuestsFinished}`, 2, 9);
                this.#AddStat(493, `${this.player.wingTimeMax / 60 > 60 || this.player.empressBrooch ? 'Wing Time: ∞' : 'Wing Time: ' + System.Math['double Round(double value, int digits)'](this.player.wingTimeMax / 60.0, 2) + ' sec'}`, 2, 10);
            }
        });
    }
    
    #GetItemTexture(item) {
        return Terraria.GameContent.TextureAssets.Item[item].Value;
    }

    #DrawTexture(texture, rectangle, color) {
        Terraria.Main.spriteBatch['void Draw(Texture2D texture, Rectangle destinationRectangle, Color color)'](texture, rectangle, color);
    }

    #AddStat(item, text, column, line) {
        const offsetY = 15;
        const offsetColumn = column === 1 ? 5 : 170;
        const offsetLine = line === 0 ? 5 : 5 + offsetY * line;
        const white = Microsoft.Xna.Framework.Graphics.Color.White;
        
        const rect = Microsoft.Xna.Framework.Rectangle.new();
        rect.X = this.player.Center.X - this.#bgPanel.width / 2 + offsetColumn - Terraria.Main.screenPosition.X;
        rect.Y = this.player.BottomRight.Y + offsetLine - Terraria.Main.screenPosition.Y;
        rect.Width = 16;
        rect.Height = 16;
        
        const scaleFont = Microsoft.Xna.Framework.Vector2.new();
        scaleFont.X = 0.25;
        scaleFont.Y = 0.25;
        
        const offsetText = Microsoft.Xna.Framework.Vector2.new();
        offsetText.X = 20;
        offsetText.Y = 0;

        Terraria.Main.spriteBatch.End();
        Terraria.Main.spriteBatch['void Begin(SpriteSortMode sortMode, bool useTransformMatrix, bool defferedBatch)'](Microsoft.Xna.Framework.Graphics.SpriteSortMode.Deferred, false, true);
        this.#DrawTexture(this.#GetItemTexture(item), rect, white);

        Terraria.UI.Chat.ChatManager['void DrawColorCodedStringShadow(SpriteBatch spriteBatch, SpriteFont font, string text, Vector2 position, Color baseColor, float rotation, Vector2 origin, Vector2 baseScale, float maxWidth, float spread)']
        (
          Terraria.Main.spriteBatch,
          Terraria.GameContent.FontAssets.DeathText.Value,
          text,
          Microsoft.Xna.Framework.Vector2['Vector2 op_Addition(Vector2 value1, Vector2 value2)'](Terraria.Utils.TopLeft(rect), offsetText),
          white,
          0.0,
          Microsoft.Xna.Framework.Vector2.Zero,
          scaleFont,
          -1.0,
          0.0
        );
    }
}