import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";

export class UndeadHunterPants extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Armors/${this.constructor.name}`;
    }

    SetDefaults() {
        this.Item.width = 22;
        this.Item.height = 16;
        this.Item.value = RequiemGlobalItem.Rarity1BuyPrice;
        this.Item.rare = 1;
        this.Item.defense = 2;
    }
    
    UpdateEquip(player) {
        player.moveSpeed += 0.1;
    }
}