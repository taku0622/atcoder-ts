import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim();
const [m, d] = input.split(/\s+/).map(Number);

const v = `${m} ${d}`;
const special = ["1 7", "3 3", "5 5", "7 7", "9 9"];

const ans = special.includes(v) ? "Yes" : "No";
console.log(ans);