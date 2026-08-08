import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [n, ...a] = input.split(/\s+/).map(Number);
let ans = 0;
// console.log("n", n);
// console.log("a", a);

for (let i = 1; i < n - 1; i++) {
  if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
    ans++;
  }
}

console.log(ans);