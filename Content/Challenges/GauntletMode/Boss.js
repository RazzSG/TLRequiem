import {Terraria} from "../../../TL/ModImports.js";

export class Boss {
    constructor({id, time, spawnContext, spawnCountdown, permittedNPCs}) {
        this.id = id;
        this.time = time;
        this.spawnContext = spawnContext;
        this.spawnCountdown = spawnCountdown;
        this.permittedNPCs = permittedNPCs;

        if (spawnContext === null) {
            this.spawnContext = (type) => {
                Terraria.NPC.SpawnOnPlayer(Terraria.Main.myPlayer, type);
            };
        }

        if (!this.permittedNPCs.includes(id)) {
            this.permittedNPCs.push(id);
        }
    }
}