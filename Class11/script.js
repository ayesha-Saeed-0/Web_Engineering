console.log("Shukar Nodemon");

// const add = require("./funcs/add");
// const sub = require("./funcs/sub");
// const mul = require("./funcs/mul");
// const div = require("./funcs/div");

// const file = require("fs");
// file.writeFile("./data.txt", "nodeeeemon", (err) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

const http = require("http"); // Correct module name

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // Fix the header format
  res.end("Welcome to Hell"); // Remove invalid <h1> tag (plain text cannot have HTML)
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
