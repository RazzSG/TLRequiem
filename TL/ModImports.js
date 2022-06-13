export const Terraria = {
    Player: new NativeClass('Terraria', 'Player'),
    Item: new NativeClass('Terraria', 'Item'),
    Projectile: new NativeClass('Terraria', 'Projectile'),
    NPC: new NativeClass('Terraria', 'NPC'),
    Main: new NativeClass('Terraria', 'Main'),
    WorldGen: new NativeClass('Terraria', 'WorldGen'),
    Lang: new NativeClass('Terraria', 'Lang'),
    Recipe: new NativeClass('Terraria', 'Recipe'),
    Tile: new NativeClass('Terraria', 'Tile'),
    TileData: new NativeClass('Terraria', 'TileData'),
    Utils: new NativeClass('Terraria', 'Utils'),
    Mount : new NativeClass('Terraria', 'Mount'),
    GetItemSettings: new NativeClass('Terraria', 'GetItemSettings'),
    Chest: new NativeClass('Terraria', 'Chest'),
    Dust: new NativeClass('Terraria', 'Dust'),
    CombatText: new NativeClass('Terraria', 'CombatText'),
    Collision: new NativeClass('Terraria', 'Collision'),
    GUIPlayerCreateMenu: new NativeClass('', 'GUIPlayerCreateMenu'),
    ID: {
        NPCID: new NativeClass('Terraria.ID', 'NPCID'),
        SoundID: new NativeClass('Terraria.ID', 'SoundID'),
        ItemID: new NativeClass('Terraria.ID', 'ItemID'),
        TileID: new NativeClass('Terraria.ID', 'TileID'),
        ArmorIDs: new NativeClass('Terraria.ID', 'ArmorIDs'),
        ProjectileID: new NativeClass('Terraria.ID', 'ProjectileID'),
        ContentSamples: new NativeClass('Terraria.ID', 'ContentSamples'),
        AmmoID: new NativeClass('Terraria.ID', 'AmmoID'),
        MountID: new NativeClass('Terraria.ID', 'MountID'),
        ItemUseStyleID: new NativeClass('Terraria.ID', 'ItemUseStyleID'),
        ItemHoldStyleID: new NativeClass('Terraria.ID', 'ItemHoldStyleID'),
        PrefixID: new NativeClass('Terraria.ID', 'PrefixID'),
        CustomCurrencyID: new NativeClass('Terraria.ID', 'CustomCurrencyID'),
    },
    Localization: {
        Language: new NativeClass('Terraria.Localization', 'Language'),
        LocalizedText: new NativeClass('Terraria.Localization', 'LocalizedText')
    },
    UI: {
        ItemTooltip: new NativeClass("Terraria.UI", "ItemTooltip"),
        ItemSorting: new NativeClass("Terraria.UI", "ItemSorting"),
        Chat: {
            ChatManager: new NativeClass('Terraria.UI.Chat', 'ChatManager')
        }
    },
    GameContent: {
        TextureAssets: new NativeClass('Terraria.GameContent', 'TextureAssets'),
        FontAssets: new NativeClass('Terraria.GameContent', 'FontAssets'),
        ItemDropRules: {
            ItemDropRule: new NativeClass('Terraria.GameContent.ItemDropRules', 'ItemDropRule'),
            ItemDropDatabase: new NativeClass('Terraria.GameContent.ItemDropRules', 'ItemDropDatabase'),
            CommonCode: new NativeClass('Terraria.GameContent.ItemDropRules', 'CommonCode')
        },
        Creative: {
            CreativeItemSacrificesCatalog: new NativeClass('Terraria.GameContent.Creative', 'CreativeItemSacrificesCatalog'),
            ItemsSacrificedUnlocksTracker: new NativeClass('Terraria.GameContent.Creative', 'ItemsSacrificedUnlocksTracker')
        },
        Events: {
            Sandstorm: new NativeClass('Terraria.GameContent.Events', 'Sandstorm')
        }
    },
    DataStructures: {
        PlayerDrawSet: new NativeClass('Terraria.DataStructures', 'PlayerDrawSet'),
        PlayerDeathReason: new NativeClass('Terraria.DataStructures', 'PlayerDeathReason')
    },
    Audio: {
        SoundEngine : new NativeClass('Terraria.Audio', 'SoundEngine')
    },
    Chat: {
        ChatCommandProcessor: new NativeClass('Terraria.Chat', 'ChatCommandProcessor')
    },
    Graphics: {
        Shaders: {
            GameShaders: new NativeClass('Terraria.Graphics.Shaders', 'GameShaders')
        }
    }
}

export const Microsoft = {
    Xna: {
        Framework: {
            Vector2: new NativeClass('Microsoft.Xna.Framework', 'Vector2'),
            Rectangle: new NativeClass('Microsoft.Xna.Framework', 'Rectangle'),
            MathHelper: new NativeClass('Microsoft.Xna.Framework', 'MathHelper'),
            Graphics: {
                Texture2D: new NativeClass('Microsoft.Xna.Framework.Graphics', 'Texture2D'),
                SpriteEffects: new NativeClass('Microsoft.Xna.Framework.Graphics', 'SpriteEffects'),
                Color: new NativeClass('Microsoft.Xna.Framework.Graphics', 'Color'),
                SpriteBatch: new NativeClass('Microsoft.Xna.Framework.Graphics', 'SpriteBatch')
            }
        }
    }
}

export const ReLogic = {
    Content: {
        Asset: new NativeClass('ReLogic.Content', 'Asset`1'),
        AssetState: new NativeClass('ReLogic.Content', 'AssetState')
    }
}

export const System = {
    Nullable: new NativeClass('System', 'Nullable`1'),
    Int32: new NativeClass('System', 'Int32'),
    Math: new NativeClass('System', 'Math')
}