import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
// console.log(input);
let ans = "";
const arr = input.slice(1, Number(input[0]) + 1);


const returnC = (c:string):number => {
    if(c === "a" || c === "b" || c === "c") return 2;
    else if(c === "d" || c === "e" || c === "f") return 3;
    else if(c === "g" || c === "h" || c === "i") return 4;
    else if(c === "j" || c === "k" || c === "l") return 5;
    else if(c === "m" || c === "n" || c === "o") return 6;
    else if(c === "p" || c === "q" || c === "r" || c === "s") return 7;
    else if(c === "t" || c === "u" || c === "v") return 8;
    else return 9;
}

for(let a of arr){
    ans += returnC(a[0]);
}

console.log(ans);