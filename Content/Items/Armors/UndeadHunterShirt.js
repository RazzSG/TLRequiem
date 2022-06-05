import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class UndeadHunterShirt extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Armors/${this.constructor.name}`;
    }

    SetDefaults() {
        this.Item.width = 34;
        this.Item.height = 24;
        this.Item.value = RequiemGlobalItem.Rarity1BuyPrice;
        this.Item.rare = 1;
        this.Item.defense = 3;
    }

    UpdateEquip(player) {
        player.rangedCrit += 5;
    }
}