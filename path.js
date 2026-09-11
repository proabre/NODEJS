const { resolve } = require("dns");
const path = require("path"); //path is a built-in Node.js module.

const filePath = path.join(__dirname, "documents", "report.pdf"); //Combines path pieces.

console.log("Full path:", filePath);

console.log("Directory:", path.dirname(filePath)); //gives you the directory ,it almost is oppositr of filename

console.log("Filename:", path.basename(filePath)); //basename() gets the final part of a path.

console.log("Extension:", path.extname(filePath)); //gives you the extention name

console.log("Absolute?", path.isAbsolute(filePath)); //This checks whether a path is absolute.

console.log("Parsed:", path.parse(filePath)); //break a path into pieces and gives you in a json format

console.log("Absolute path :", path.resolve(filePath)); //Creates an absolute path.

//path doesn't manage files. It manages the strings that describe where files/directories are located
