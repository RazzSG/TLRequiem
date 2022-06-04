import {Terraria} from "../TL/ModImports.js";

export function isSummon(proj) {
    return proj.minion || proj.sentry ||
      Terraria.ID.ProjectileID.Sets.MinionShot[proj.type] ||
      Terraria.ID.ProjectileID.Sets.SentryShot[proj.type];
}

export function isABoss(npc) {
    return npc !== null && npc.active && ((npc.boss && npc.type !== 395) ||
      (npc.type === 13 || npc.type === 14 || npc.type === 15));
}

export function anyBossNPCs(checkForMechs = false) {
    for (let i = 0; i < 200; i++) {
        const npc = Terraria.Main.npc[i];
        if (npc !== null && isABoss(npc)) {
            return !checkForMechs || npc.type === 134 || npc.type === 127 || npc.type === 126 || npc.type === 125;
        }
    }
}

export function allCritBoost(player, boost) {
    player.meleeCrit += boost;
    player.rangedCrit += boost;
    player.magicCrit += boost;
}

export function allDamageBoost(player, boost) {
    player.meleeDamage += boost;
    player.magicDamage += boost;
    player.rangedDamage += boost;
    player.minionDamage += boost;
}

export function secondsToFrames(seconds) {
    return seconds * 60;
}

export function giveIFrames(player, frames, blink = false) {
    let flag = false;
    for (let i = 0; i < player.hurtCooldowns.length; i++) {
        if (player.hurtCooldowns[i] < frames) {
            flag = true;
        }
    }
    if (!flag) {
        return false;
    }
    player.immune = true;
    player.immuneNoBlink = !blink;
    player.immuneTime = frames;
    for (let k = 0; k < player.hurtCooldowns.length; k++){
        if (player.hurtCooldowns[k] < frames) {
            player.hurtCooldowns[k] = frames;
        }
    }
    return true;
}
}