require("./add-local.js"); //importing local module
console.log("hello node js");

//loading exported local modules and pass values here

const Multiplication = require("./export-multipl.js"); //importing exported module

const product1 = Multiplication(30, 3); //passing values after importing modules

console.log(product1);
