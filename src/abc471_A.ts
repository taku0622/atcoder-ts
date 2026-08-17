import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [a, b] = input.split(/\s+/).map(Number);

const ans = a + b === 9 || 
  a * b === 9 ||
  a - b === 9 ||
  a / b === 9 ? "Nine" : "Nein";

console.log(ans);