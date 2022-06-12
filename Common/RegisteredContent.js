import {ModPlayer} from "../TL/ModPlayer.js";
import {RequiemPlayer} from "../Content/RequiemPlayer.js";
import {ModItem} from "../TL/ModItem.js";
import {GlobalItem} from "../TL/GlobalItem.js";
import {RequiemGlobalItem} from "../Content/RequiemGlobalItem.js";
import {VialOfGraveEarth} from "../Content/Items/Accessories/VialOfGraveEarth.js";
import {FireAmulet} from "../Content/Items/Accessories/FireAmulet.js";
import {ShadowflameSkull} from "../Content/Items/Accessories/ShadowflameSkull.js";
import {GlobalNPC} from "../TL/GlobalNPC.js";
import {RequiemGlobalNPC} from "../Content/RequiemGlobalNPC.js";
import {SacredChalice} from "../Content/Items/Accessories/SacredChalice.js";
import {AbsoluteFire} from "../Content/Items/Weapons/Magic/AbsoluteFire.js";
import {ElixirOfLife} from "../Content/Items/Accessories/ElixirOfLife.js";
import {FlamingStar} from "../Content/Items/Tools/ClimateChange/FlamingStar.js";
import {PearlOfPurity} from "../Content/Items/Materials/PearlOfPurity.js";
import {PearlOfPutrescence} from "../Content/Items/Materials/PearlOfPutrescence.js";
import {StatSheet} from "../Content/Items/Tools/StatSheet.js";
import {DefianceBanner} from "../Content/Items/Accessories/DefianceBanner.js";
import {SpellbindersSigil} from "../Content/Items/Accessories/SpellbindersSigil.js";
import {ArtemisSoul} from "../Content/Items/Accessories/ArtemisSoul.js";
import {IcyHeart} from "../Content/Items/Accessories/IcyHeart.js";
import {Painkiller} from "../Content/Items/Accessories/Painkiller.js";
import {AnkhOfLife} from "../Content/Items/Accessories/AnkhOfLife.js";
import {UndeadHunterHood} from "../Content/Items/Armors/UndeadHunterHood.js";
import {UndeadHunterShirt} from "../Content/Items/Armors/UndeadHunterShirt.js";
import {UndeadHunterPants} from "../Content/Items/Armors/UndeadHunterPants.js";
import {YagasHead} from "../Content/Items/Accessories/YagasHead.js";
import {StellarPendant} from "../Content/Items/Accessories/StellarPendant.js";
import {RingOfReplenishment} from "../Content/Items/Accessories/RingOfReplenishment.js";
import {ElectrumBow} from "../Content/Items/Weapons/Ranged/ElectrumBow.js";
import {GoldenScarab} from "../Content/Items/Accessories/GoldenScarab.js";
import {FaerieRing} from "../Content/Items/Accessories/FaerieRing.js";
import {FieryCore} from "../Content/Items/Accessories/FieryCore.js";
import {WarriorsBracer} from "../Content/Items/Accessories/WarriorsBracer.js";
import {SandstormGenerator} from "../Content/Items/Tools/ClimateChange/SandstormGenerator.js";
import {PocketRainCloud} from "../Content/Items/Tools/ClimateChange/PocketRainCloud.js";
import {BrawlersGloves} from "../Content/Items/Accessories/BrawlersGloves.js";
import {ElectrumBar} from "../Content/Items/Materials/ElectrumBar.js";
import {GlitteringDust} from "../Content/Items/Materials/GlitteringDust.js";

export function initializeContent() {
    ModPlayer.register(RequiemPlayer);
    GlobalNPC.register(RequiemGlobalNPC);
    GlobalItem.register(RequiemGlobalItem);

    initializeAccessories();
    initializeArmors();
    initializeMaterials();
    initializeWeapons();
    initializeTools();
}

function initializeAccessories() {
    ModItem.register(VialOfGraveEarth);
    ModItem.register(FireAmulet);
    ModItem.register(ShadowflameSkull);
    ModItem.register(SacredChalice);
    ModItem.register(ElixirOfLife);
    ModItem.register(DefianceBanner);
    ModItem.register(SpellbindersSigil);
    ModItem.register(ArtemisSoul);
    ModItem.register(IcyHeart);
    ModItem.register(Painkiller);
    ModItem.register(AnkhOfLife);
    ModItem.register(YagasHead);
    ModItem.register(StellarPendant);
    ModItem.register(RingOfReplenishment);
    ModItem.register(GoldenScarab);
    ModItem.register(FaerieRing);
    ModItem.register(FieryCore);
    ModItem.register(WarriorsBracer);
    ModItem.register(BrawlersGloves);
}

function initializeArmors() {
    ModItem.register(UndeadHunterHood);
    ModItem.register(UndeadHunterShirt);
    ModItem.register(UndeadHunterPants);
}

function initializeMaterials() {
    ModItem.register(PearlOfPurity);
    ModItem.register(PearlOfPutrescence);
    ModItem.register(ElectrumBar);
    ModItem.register(GlitteringDust);
}

function initializeWeapons() {
    ModItem.register(AbsoluteFire);
    ModItem.register(ElectrumBow);
}

function initializeTools() {
    ModItem.register(FlamingStar);
    ModItem.register(StatSheet);
    ModItem.register(SandstormGenerator);
    ModItem.register(PocketRainCloud);
}