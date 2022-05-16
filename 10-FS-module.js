// FS MODULE - File System Module

// Read a file from the file system
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

// Write a file to the file system
writeFileSync(
  "./content/result-sync.txt",
  `\nHere is the result : ${first}, ${second}\n`,
  { flag: "a" }
);
