const Cube = require('../models/cube');

const rubikCube = new Cube('simpleCube', 'a cube for beginners', 'https://img-a.udemycdn.com/course/750x422/2924080_d029_10.jpg', 1);

console.log(rubikCube);

rubikCube.save();