// const xyz= require('./people') // ./ to find the same files in directory

// //console.log(xyz);

// console.log(xyz.people, xyz.ages);

const {people , ages}= require('./people') // ./ to find the same files in directory

//console.log(xyz);

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());