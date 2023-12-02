const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./mydb.sqlite3");

// Certificate Model
class Certificate {
  constructor(id, name, data) {
    this.id = id;
    this.name = name;
    this.data = data;
  }

  // Create a new certificate
  static create(name, data, callback) {
    db.run(
      `CREATE TABLE IF NOT EXISTS certificates(
            id INTEGER PRIMARY KEY,
            name TEXT,
            data TEXT
        )`,
      [],
      function (err) {
        if (err) {
          return callback(err);
        }
        db.run(
          `INSERT INTO certificates(name, data) VALUES(?, ?)`,
          [name, data],
          function (err) {
            if (err) {
              return callback(err);
            }
            callback(null, new Certificate(this.lastID, name, data));
          }
        );
      }
    );
  }

  // Get all certificates
  static getAll(callback) {
    db.run(
      `CREATE TABLE IF NOT EXISTS certificates(
            id INTEGER PRIMARY KEY,
            name TEXT,
            data TEXT
        )`,
      [],
      function (err) {
        if (err) {
          return callback(err);
        }
        db.all(`SELECT * FROM certificates`, [], (err, rows) => {
          if (err) {
            return callback(err);
          }
          callback(
            null,
            rows.map((row) => new Certificate(row.id, row.name, row.data))
          );
        });
      }
    );
  }

  // Delete a certificate
  static delete(id, callback) {
    db.run(
      `CREATE TABLE IF NOT EXISTS certificates(
            id INTEGER PRIMARY KEY,
            name TEXT,
            data TEXT
        )`,
      [],
      function (err) {
        if (err) {
          return callback(err);
        }
        db.run(`DELETE FROM certificates WHERE id = ?`, id, function (err) {
          if (err) {
            return callback(err);
          }
          callback(null, this.changes);
        });
      }
    );
  }
}

module.exports = Certificate;
