console.log("it works ;)");

import { TextService } from "./services/text/text.service";

const textS = new TextService();

console.log(textS.convertCase("TestCase", "pascal", "normal"));
