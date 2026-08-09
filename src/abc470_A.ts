import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [n] = input.split(/\s+/).map(Number);

// fizz
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}