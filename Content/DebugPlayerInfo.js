import {Terraria, Microsoft, System} from "../TL/ModImports.js";
import {RequiemPlayer} from "./RequiemPlayer.js";

export function debugPlayerInfo() {
    Terraria.Main.DrawRain.hook((original, self) => {
        original(self);

        const player = Terraria.Main.player[Terraria.Main.myPlayer];
        const backgroundPanelWidth = 320;
        const backgroundPanelHeight = 190;
        const backgroundPanelTexture = Terraria.GameContent.TextureAssets.MagicPixel.Value;
        const backgroundPanelColor = Microsoft.Xna.Framework.Graphics.Color.new();
        backgroundPanelColor.R = 29;
        backgroundPanelColor.G = 33;
        backgroundPanelColor.B = 70;
        backgroundPanelColor.A = 230;
        const backgroundPanelRectangle = Microsoft.Xna.Framework.Rectangle.new();
        backgroundPanelRectangle.X = (player.Center.X - backgroundPanelWidth / 2) - Terraria.Main.screenPosition.X;
        backgroundPanelRectangle.Y = player.BottomRight.Y - Terraria.Main.screenPosition.Y;
        backgroundPanelRectangle.Width = backgroundPanelWidth;
        backgroundPanelRectangle.Height = backgroundPanelHeight;

        if (player.active && RequiemPlayer.statSheet) {
            function drawTexture(texture, rectangle, color) {
                Terraria.Main.spriteBatch['void Draw(Texture2D texture, Rectangle destinationRectangle, Color color)']
                (texture, rectangle, color);
            }
            
            function getItemTexture(item) {
                return Terraria.GameContent.TextureAssets.Item[item].Value;
            }
            
            function addStat(item, text, column, line) {
                const offsetY = 15;
                const offsetColumn = column === 1 ? 5 : 170;
                const offsetLine = line === 0 ? 5 : 5 + offsetY * line;
                const itemTextureColor = Microsoft.Xna.Framework.Graphics.Color.White;
                const itemTextureRectangle = Microsoft.Xna.Framework.Rectangle.new();
                itemTextureRectangle.X = player.Center.X - backgroundPanelWidth / 2 + offsetColumn - Terraria.Main.screenPosition.X;
                itemTextureRectangle.Y = player.BottomRight.Y + offsetLine - Terraria.Main.screenPosition.Y;
                itemTextureRectangle.Width = 16;
                itemTextureRectangle.Height = 16;
                const scaleFont = Microsoft.Xna.Framework.Vector2.new();
                scaleFont.X = 0.25;
                scaleFont.Y = 0.25;
                const offsetText = Microsoft.Xna.Framework.Vector2.new();
                offsetText.X = 20;
                offsetText.Y = 0;
                
                drawTexture(getItemTexture(item), itemTextureRectangle, itemTextureColor);
                
                Terraria.UI.Chat.ChatManager['void DrawColorCodedStringShadow(SpriteBatch spriteBatch, SpriteFont font, string text, Vector2 position, Color baseColor, float rotation, Vector2 origin, Vector2 baseScale, float maxWidth, float spread)']
                (
                  Terraria.Main.spriteBatch,
                  Terraria.GameContent.FontAssets.DeathText.Value,
                  text,
                  Microsoft.Xna.Framework.Vector2['Vector2 op_Addition(Vector2 value1, Vector2 value2)'](Terraria.Utils.TopLeft(itemTextureRectangle), offsetText),
                  Microsoft.Xna.Framework.Graphics.Color.White,
                  0.0,
                  Microsoft.Xna.Framework.Vector2.Zero,
                  scaleFont,
                  -1.0,
                  0.0
                );
            }
            
            drawTexture(backgroundPanelTexture, backgroundPanelRectangle, backgroundPanelColor);
            
            addStat(3508, `Melee Damage: ${Math.round(player.meleeDamage * 100 - 100)}%`, 1, 0);
            addStat(3508, `Melee Crit: ${player.meleeCrit}%`, 1, 1);
            addStat(3508, `Melee Speed: ${Math.round((1.0 - player.meleeSpeed) * (100.0 / player.meleeSpeed))}%`, 1, 2);
            addStat(3504, `Ranged Damage: ${Math.round(player.rangedDamage * 100 - 100)}%`, 1, 3);
            addStat(3504, `Ranged Crit: ${player.rangedCrit}%`, 1, 4);
            addStat(3069, `Magic Damage: ${Math.round(player.magicDamage * 100 - 100)}%`, 1, 5);
            addStat(3069, `Magic Crit: ${player.magicCrit}%`, 1, 6);
            addStat(3069, `Mana Cost Reduction: ${Math.round((1.0 - player.manaCost) * 100)}%`, 1, 7);
            addStat(1309, `Minion Damage: ${Math.round(player.minionDamage * 100 - 100)}%`, 1, 8);
            addStat(1309, `Max Minions: ${player.maxMinions}`, 1, 9);
            addStat(1309, `Max Sentries: ${player.maxTurrets}`, 1, 10);
            addStat(3212, `Armor Penetration: ${player.armorPenetration}`, 1, 11);
            
            addStat(29, `Life: ${player.statLifeMax2}`, 2, 0);
            addStat(49, `Life Regen: ${player.lifeRegen}/sec`, 2, 1);
            addStat(109, `Mana: ${player.statManaMax2}`, 2, 2);
            addStat(109, `Mana Regen: ${player.manaRegen / 2}/sec`, 2, 3);
            addStat(156, `Defense: ${player.statDefense}`, 2, 4);
            addStat(3224, `Damage Reduction: ${Math.round(player.endurance * 100)}%`, 2, 5);
            addStat(3016, `Argo: ${player.aggro}`, 2, 6);
            addStat(54, `Max Speed: ${Math.round((player.accRunSpeed + player.maxRunSpeed) / 2.0 * player.moveSpeed * 6)} mph`, 2, 7);
            addStat(4479, `Luck: ${System.Math['double Round(double value, int digits)'](player.luck, 2)}`, 2, 8);
            addStat(2374, `Fishing Quests: ${player.anglerQuestsFinished}`, 2, 9);
            addStat(493, `${player.wingTimeMax / 60 > 60 || player.empressBrooch ? 'Wing Time: ∞' : 'Wing Time: ' + System.Math['double Round(double value, int digits)'](player.wingTimeMax / 60.0, 2) + ' sec'}`, 2, 10);
        }
    });
}