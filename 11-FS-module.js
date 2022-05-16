const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;
  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;
    writeFile(
      "./content/result-sync.txt",
      `\nHere is the result : ${first}, ${second}\n`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});

console.log("Starting the next task");
