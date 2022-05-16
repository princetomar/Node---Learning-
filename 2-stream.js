var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("../content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (e) => console.log(e));
  })
  .listen(3000);
