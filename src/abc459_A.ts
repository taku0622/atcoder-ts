import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const x = input[0];
const arr = "HelloWorld".split("");

let ans = "";
for(let i:number = 0; i < arr.length; i++){
    if(i === x - 1) continue;
    ans += arr[i];
}

console.log(ans);