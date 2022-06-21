import { ModHooks } from "./ModHooks.js";

export class GlobalItem {
    static RegisteredItem = [];

    constructor() {
    }

    static register(item) {
        this.RegisteredItem.push(new item());
        ModHooks.initialize();
    }

    SetDefaults(item) {
    }
    
    UpdateInventory(item, player) {
    }

    UpdateEquip(item, player) {
    }

    UpdateAccessory(item, player) {
    }

    OpenVanillaBag(context, player, arg) {
    }
    
    AddRecipes() {
    }
}