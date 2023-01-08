import {ModLocalization} from "./TL/ModLocalization.js";
import {initializeContent} from "./Common/RegisteredContent.js";
import {StatSheetUI} from "./Content/StatSheetUI.js";
import {GauntletMode} from "./Content/Challenges/GauntletMode/GauntletMode.js";

ModLocalization.register({
   "ru-RU": 'Localization/ru-RU.json'
});

GauntletMode.Load();
initializeContent();
new StatSheetUI().Initialize();