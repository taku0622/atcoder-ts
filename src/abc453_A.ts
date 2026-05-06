import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [, s] = input.split(/\s+/);

let answer = "";
let skipping = true;

for (const ch of s) {
  if (skipping && ch === "o") {
    continue;
  }

  skipping = false;
  answer += ch;
}

console.log(answer);