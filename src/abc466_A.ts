import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const arr = input.split(/\s+/).map(Number);

let ans = "Yes";
for (let i = 1; i <= arr[0]; i++) {
  if (arr[i] >= 0) {
    ans = "No";
    break;
  }
}
console.log(ans);