import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [x, y] = input.split(/\s+/).map(Number);

if(x / (x + y) === 0.64){
    console.log("Yes");
} else {
    console.log("No");
}