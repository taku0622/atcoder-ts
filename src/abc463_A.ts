import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [x, y] = input.split(/\s+/).map(Number);

if(x * 9 === y * 16){
    console.log("Yes");
} else {
    console.log("No");
}