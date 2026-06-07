import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [n, m] = input.split(/\s+/).map(Number);

let count = 0;

let v = m;

while(true){
    if(v === 0) break;
    count++;
    v = n % v;
}

console.log(count);