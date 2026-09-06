import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [n] = input.split(/\s+/).map(Number);

let ans = 0;
if (n === 1) {
  ans = 2;
} else if (n === 2) {
  ans = 3;
} else {
  ans = 1;
}
console.log(ans);