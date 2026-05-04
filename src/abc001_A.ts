import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [h1, h2] = input.split(/\s+/).map(Number);

console.log(h1 - h2);