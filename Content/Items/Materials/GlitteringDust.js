import {ModItem} from "../../../TL/ModItem.js";
import {Terraria} from "../../../TL/ModImports.js";

export class GlitteringDust extends ModItem {
    SetDefaults() {
        this.Item.rare = 1;
        this.Item.value = Terraria.Item.sellPrice(0, 0, 5, 0);
    }
}