import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [n, k] = input.split(/\s+/).map(Number);

console.log(n - k + 1);