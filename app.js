require("./add-local.js"); //importing local module
console.log("hello node js");

//loading exported local modules and pass values here

const Multiplication = require("./export-multipl.js"); //importing exported module

const product1 = Multiplication(30, 3); //passing values after importing modules

const product2 = Multiplication(10, 2);

console.log(product1);
console.log(product2);

//advance importing with array distructuring

const calc = require("./calc.js");

const { add, subtract } = calc; //array distructuring

console.log("advanced importing");

console.log(add(3, 5));
console.log(subtract(10, 9));
