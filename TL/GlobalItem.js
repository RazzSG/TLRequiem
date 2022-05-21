import { ModHooks } from "./ModHooks.js";

export class GlobalItem {
    static RegisteredItem = [];

    constructor() {
    }

    static register(item) {
        this.RegisteredItem.push(new item());
        ModHooks.initialize();
    }

    UpdateInventory(item, player) {
    }

    UpdateEquip(item, player) {
    }

    UpdateAccessory(item, player) {
    }
}