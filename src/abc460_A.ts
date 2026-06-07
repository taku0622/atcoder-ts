import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [n, m] = input.split(/\s+/).map(Number);

let count = 0;

let v = m;

while(v !== 0){
    count++;
    v = n % v;
}

console.log(count);