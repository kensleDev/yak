console.log("it works ;)");

import { TextUtilsService } from "./text";

const textS = new TextUtilsService();

console.log(textS.convertCase("TestCase", "pascal", "normal"));
