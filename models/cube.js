const { v4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const databaseFile = path.join(__dirname, "..", "config/database.json");

class Cube {
  constructor(name, description, imageUrl, difficulty) {
    this.id = v4();
    this.name = name || "No name";
    this.description = description || "No description available";
    this.imageUrl = imageUrl || "some default error image";
    this.difficulty = difficulty || 0;
  }

  save() {
    fs.readFile(databaseFile, (err, dbDataJson) => {
      if (err) {
        throw err;
      }

      const db = JSON.parse(dbDataJson);
      db.push(this);

      fs.writeFile(databaseFile, JSON.stringify(db), (err) => {
        if (err) {
          throw err;
        }

        console.log(`${this.name.toUpperCase()} is successfully stored`);
      });
    });
  }
}

module.exports = Cube;
