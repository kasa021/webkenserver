// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("サーバーからこんにちは");
// });

// server.listen(8000, () => {
//   console.log("8000でサーバー立てたで！");
// });

// const sqlite3 = require("sqlite3");
// const db = new sqlite3.Database("db.sqlite3");

// db.run(
//     "CREATE TABLE IF NOT EXISTS members (id INTEGER PRIMARY KEY, name TEXT)"
//   );

// db.run("INSERT INTO members (name) VALUES (?)", "Taro");

// db.all("SELECT * FROM members", (err, rows) => {
//   console.log(rows);
// });

const http = require("http");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("db.sqlite3");

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  db.all("SELECT * FROM members", (err, rows) => {
    res.end(JSON.stringify(rows));
  });
});

server.listen(8000, () => {
  console.log("8000でサーバー立てたで！");
});