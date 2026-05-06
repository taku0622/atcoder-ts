import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [l, r] = input.split(/\s+/).map(Number);;

let answer = r - l + 1;
console.log(answer);