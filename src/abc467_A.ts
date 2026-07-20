import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [h, w] = input.split(/\s+/).map(Number);

// console.log(w / ((h / 100) * (h / 100)));

if(w * 10000 / (h * h) >= 25.0){
    console.log("Yes");
} else {
    console.log("No");
}