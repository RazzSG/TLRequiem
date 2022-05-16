import {ModItem} from "../../../../TL/ModItem.js";
import {Terraria} from "../../../../TL/ModImports.js";

export class AbsoluteFire extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Weapons/Magic/${this.constructor.name}`;
        this.FrameCount = 10;
    }

    SetStaticDefaults() {
        Terraria.Item.staff[this.Type] = true;
        super.SetStaticDefaults();
    }

    SetDefaults() {
        this.Item.useStyle = 5;
        this.Item.useAnimation = 20;
        this.Item.useTime = 20;
        this.Item.shootSpeed = 14;
        this.Item.knockBack = 7;
        this.Item.width = 72;
        this.Item.height = 78;
        this.Item.damage = 100;
        this.Item.UseSound = Terraria.ID.SoundID.DD2_BetsysWrathShot;
        this.Item.shoot = 711;
        this.Item.mana = 14;
        this.Item.rare = 8;
        this.Item.value = ModItem.sellPrice(0, 50, 0, 0);
        this.Item.noMelee = true;
        this.Item.magic = true;
        this.Item.autoReuse = true;
    }
}