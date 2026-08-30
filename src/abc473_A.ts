import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [n, ...arr] = input.split(/\s+/).map(Number);

let ans = 0;
const h = n / 2;
for (let i = h; i < n; i++) {
  ans += arr[i];
}
console.log(ans);