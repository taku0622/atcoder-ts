import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim();

const ans:string = input.length % 5 === 0 ? "Yes" : "No";

console.log(ans);