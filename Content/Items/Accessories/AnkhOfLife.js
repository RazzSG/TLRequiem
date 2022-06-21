import {ModItem} from "../../../TL/ModItem.js";
import {RequiemGlobalItem} from "../../RequiemGlobalItem.js";
import {RequiemPlayer} from "../../RequiemPlayer.js";

export class AnkhOfLife extends ModItem {
    constructor() {
        super();
        this.Texture = `Items/Accessories/${this.constructor.name}`;
        this.FrameCount = 60;
        this.TicksPerFrame = 70;
    }
    
    SetDefaults() {
        this.Item.width = 22;
        this.Item.height = 33;
        this.Item.accessory = true;
        this.Item.value = RequiemGlobalItem.Rarity5BuyPrice;
        this.Item.rare = 5;
    }
    
    UpdateAccessory(player) {
        RequiemPlayer.ankhOfLife = true;
        RequiemPlayer.dotResist += 0.1;
    }
}