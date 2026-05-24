import * as fs from "fs";

const x = Number(fs.readFileSync(0, "utf8").trim());

const str = "HelloWorld";

console.log(str.slice(0, x - 1) + str.slice(x));