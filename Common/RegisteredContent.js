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
import {PearlOfPurity} from "../Content/Materials/PearlOfPurity.js";
import {PearlOfPutrescence} from "../Content/Materials/PearlOfPutrescence.js";
import {StatSheet} from "../Content/Items/Tools/StatSheet.js";
import {DefianceBanner} from "../Content/Items/Accessories/DefianceBanner.js";
import {SpellbindersSigil} from "../Content/Items/Accessories/SpellbindersSigil.js";
import {ArtemisSoul} from "../Content/Items/Accessories/ArtemisSoul.js";
import {IcyHeart} from "../Content/Items/Accessories/IcyHeart.js";
import {Painkiller} from "../Content/Items/Accessories/Painkiller.js";
import {AnkhOfLife} from "../Content/Items/Accessories/AnkhOfLife.js";

export function initializeContent() {
    ModPlayer.register(RequiemPlayer);
    GlobalNPC.register(RequiemGlobalNPC);
    GlobalItem.register(RequiemGlobalItem);
    
    ModItem.register(VialOfGraveEarth);
    ModItem.register(FireAmulet);
    ModItem.register(ShadowflameSkull);
    ModItem.register(SacredChalice);
    ModItem.register(AbsoluteFire);
    ModItem.register(ElixirOfLife);
    ModItem.register(FlamingStar);
    ModItem.register(PearlOfPurity);
    ModItem.register(PearlOfPutrescence);
    ModItem.register(StatSheet);
    ModItem.register(DefianceBanner);
    ModItem.register(SpellbindersSigil);
    ModItem.register(ArtemisSoul);
    ModItem.register(IcyHeart);
    ModItem.register(Painkiller);
    ModItem.register(AnkhOfLife);
}