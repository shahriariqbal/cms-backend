const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const indexRouter = require("./routes/index");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

let db = new sqlite3.Database("./mydb.sqlite3", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the mydb.sqlite3 database.");
});
