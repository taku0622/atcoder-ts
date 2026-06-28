import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let ans = "";
let eCount = 0;
let wcount = 0;

for(const c of input[0]){
    if(c === "E"){
        eCount++;
    } else {
        wcount++;
    }
}
ans = eCount > wcount ? "East" : "West";
console.log(ans);