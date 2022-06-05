import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {ModLocalization} from "../../../TL/ModLocalization.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class UndeadHunterHood extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Armors/${this.constructor.name}`;
    }
    
    SetDefaults() {
        this.Item.width = 22;
        this.Item.height = 20;
        this.Item.value = RequiemGlobalItem.Rarity1BuyPrice;
        this.Item.rare = 1;
        this.Item.defense = 2;
    }
    
    UpdateEquip(player) {
        player.rangedCrit += 4;
        player.ammoCost80 = true;
    }
    
    IsArmorSet(head, body, legs) {
        return body?.Type === ModItem.getTypeByName('UndeadHunterShirt') && legs?.Type === ModItem.getTypeByName('UndeadHunterPants');
    }
    
    UpdateArmorSet(player) {
        player.setBonus = ModLocalization.getTranslationString('ArmorSetBonus.UndeadHunter');
        RequiemPlayer.undeadHunter = true;
        player.spikedBoots = 1;
    }
}