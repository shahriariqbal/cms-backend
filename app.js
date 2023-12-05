const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const indexRouter = require("./routes/index");

const app = express();
const port = 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Connecting to the SQLite database
let db = new sqlite3.Database("./mydb.sqlite3", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the mydb.sqlite3 database.");
});

// Swagger setup for API documentation
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Certificate Management System API",
      version: "1.0.0",
      description: "A simple Express API for managing digital certificates",
    },
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
