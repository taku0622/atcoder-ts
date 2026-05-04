import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim();
const [h1] = input.split(/\s+/).map(Number);

let ans:string = "";

for (let i = h1; i > 0; i--) {
    ans += i + ",";
}

console.log(ans.slice(0, -1));