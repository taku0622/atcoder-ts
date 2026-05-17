import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const s = input[0];
const n = parseInt(input[1]);

const ans = s.slice(n, s.length - n);
console.log(ans);