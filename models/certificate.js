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
  static create(name, data, callback) {}

  // Get all certificates
  static getAll(callback) {}

  // Delete a certificate
  static delete(id, callback) {}
}

module.exports = Certificate;
