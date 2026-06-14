import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let ans = "";

for(const w of input[0]){
    if("0" <= w && w <= "9"){
        ans += w;
    }
}
console.log(ans);