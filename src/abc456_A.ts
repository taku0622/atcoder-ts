import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [x] = input.split(/\s+/).map(Number);

// 3 <= x <= 18
console.log(3<=x && x<=18 ? "Yes" : "No");