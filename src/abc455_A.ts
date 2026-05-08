import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [a, b, c] = input.split(/\s+/).map(Number);

let answer = "No";
if(a !== b && b === c){
    answer = "Yes";
}
console.log(answer);