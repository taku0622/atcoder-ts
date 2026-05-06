import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim();
const [n, s] = input.split(/\s+/)
const arr = s.split("");
let ans = "";
let f: boolean = true;
for(const v of arr){
    if(f && v === 'o'){
        continue;
    } else if(v !== 'o'){
        f = false;
    }
    ans += v;
}
console.log(ans);