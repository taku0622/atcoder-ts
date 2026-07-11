import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [a, b] = input.split(/\s+/).map(Number);

if(a * 3 > b * 2){
    console.log("Yes");
} else {
    console.log("No");
}