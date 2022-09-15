import {ModLocalization} from "./TL/ModLocalization.js";
import {initializeContent} from "./Common/RegisteredContent.js";
import {debugPlayerInfo} from "./Content/DebugPlayerInfo.js";
import {GauntletMode} from "./Content/Challenges/GauntletMode/GauntletMode.js";

ModLocalization.register({
   "ru-RU": 'Localization/ru-RU.json'
});

GauntletMode.Load();
initializeContent();
debugPlayerInfo();