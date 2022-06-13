import {ModHooks} from "./ModHooks.js";

export class GlobalProjectile {
    static RegisteredProjectile = [];

    static register(projectile) {
        this.RegisteredProjectile.push(new projectile());
        ModHooks.initialize();
    }
    
    Kill(projectile) {
    }
}