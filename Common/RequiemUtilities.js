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

export function healLife(player, healAmount, healOverMax = true) {
    let result = 0;
    if ((!healOverMax && player.statLife >= player.statLifeMax2) || healAmount <= 0) {
        return result;
    }
    result = healAmount;
    if (!healOverMax && player.statLifeMax2 < healAmount + player.statLife) {
        result = player.statLifeMax2 - player.statLife;
    }
    player.statLife += result;
    if (healOverMax && player.statLife > player.statLifeMax2) {
        player.statLife = player.statLifeMax2;
    }
    if (player.whoAmI === Terraria.Main.myPlayer) {
        player.HealEffect(result, true);
    }
    return result;
}

export function isNPCHostile(npc) {
    return !npc.friendly && npc.lifeMax > 5 && npc.chaseable && !npc.dontTakeDamage && !npc.immortal;
}