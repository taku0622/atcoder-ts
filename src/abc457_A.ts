import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = input[0];
const a = input.slice(1, 1 + n);
const x = input[1 + n];

console.log(a[x-1]);