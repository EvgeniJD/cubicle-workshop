const fs = require("fs");
const path = require("path");

getCubes = (callback) => {
  const databaseFile = path.join(__dirname, "..", "config/database.json");

  fs.readFile(databaseFile, (err, dbJSON) => {
    if (err) {
      throw err;
    }

    const db =  JSON.parse(dbJSON);
    callback(db);
  });
};

getCube = (id, callback) => {
  getCubes((cubes) => {
    const currCube = cubes.find((c) => c.id === id);
    callback(currCube);
  });
};

module.exports = { getCubes, getCube };
