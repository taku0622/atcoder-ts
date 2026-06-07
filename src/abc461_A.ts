import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [a, d] = input.split(/\s+/).map(Number);

console.log(a <= d ? "Yes" : "No");