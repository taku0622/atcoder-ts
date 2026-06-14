import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const words = input[0].split("");
let ans = "";

for(let w of words){
    const regex = /[0-9]/;
    if(regex.test(w)){
        ans += w;
    }
}
console.log(ans);