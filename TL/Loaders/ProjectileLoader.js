import {GlobalProjectile} from "../GlobalProjectile.js";


export class ProjectileLoader {
    static Kill(self) {
        for (let projectile of GlobalProjectile.RegisteredProjectile) {
            projectile.Kill(self);
        }
    }
}