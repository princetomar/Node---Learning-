const { readFile, writeFile } = require("fs").promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

// My Work
// const { readFile, writeFile } = require("fs").promises;

// // The above imprt does the same
// // const util = require("util");
// // const readFilePromise = util.promisify(readFile);
// // const writeFilePromise = util.promisify(writeFile);

// // const { resolve } = require("path");
// // const { result } = require("lodash");

// // Sync and Async AND AWAIT

// const start = async () => {
//   try {
//     // const first = await readFilePromise("./content/first.txt", "utf-8");
//     // const second = await readFilePromise("./content/second.txt", "utf-8");

//     // The below lines do the same as above 2 lines
//     const first = await readFile("./content/first.txt", "utf-8");
//     const second = await readFile("./content/second.txt", "utf-8");

//     // write File promise
//     await writeFile(
//       "./content/result-mind-granade.txt",
//       `\nThis is AWESOME : ${first} ${second}\n`,
//       { flag: "a" }
//     );
//     console.log(first);
//     console.log(second);
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();

// // const getText = (path) => {
// //   return new Promise((resolve, reject) => {
// //     readFile(path, "utf-8", (err, data) => {
// //       if (err) {
// //         reject(err);
// //       } else {
// //         resolve(data);
// //       }
// //     });
// //   });
// // };

// //   getText("./content/first.txt")
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));
