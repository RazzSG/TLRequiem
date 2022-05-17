import {ModLocalization} from "./TL/ModLocalization.js";
import {initializeContent} from "./Common/RegisteredContent.js";
import {debugPlayerInfo} from "./Content/DebugPlayerInfo.js";

ModLocalization.register({
   "ru-RU": 'Localization/ru-RU.json'
});

initializeContent();
debugPlayerInfo();