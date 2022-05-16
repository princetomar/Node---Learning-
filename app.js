const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `\nHello World ${i}\n`, { flag: "a" });
}

// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.end("Welcome");
// });

// server.listen(3000);
