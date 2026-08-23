import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [s] = input.split(/\s+/);

let ans: string = "";

for(const char of s) {
  if ( char !== "A") {
    ans += ".";
  } else {
    ans += char;
  }
}
console.log(ans);