// file system module
const fs = require("fs");

// functions :

// // Blocking and Non Blocking request
// // Sync
// fs.writeFileSync("fileName", "data");

// // Async call in current dir
// fs.writeFile("./test.txt", "hello world", (err) => {});

// // fs.readFileSync : return result
// const data = fs.readFileSync("./contact.txt", "utf-8");
// console.log(data);

// // fs.readFile does not return result provoid callback to display or print result
// fs.readFile("./contact.txt", "utf-8", (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });

// add data to file
fs.appendFileSync("./test.txt", `\n User log : ${Date.now()}`);

// copy file
fs.cpSync("./test.txt", "./copy.txt");

// delete file
fs.unlinkSync("./copy.txt");

// stat
console.log(fs.statSync("test.txt"));

// create new folders
fs.mkdirSync("./newdir/user/");
