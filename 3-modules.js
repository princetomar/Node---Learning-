// CommonJS : every file is module( by default)
// Modules: Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");

// from 6-alternative-flavour
const data = require("./6-alternative-flavour");
console.log(data.singlePerson);

console.log(names.prince);
console.log(names.tashu);

sayHi(names.prince);
sayHi(names.tashu);

require("./7-mine-granade");
