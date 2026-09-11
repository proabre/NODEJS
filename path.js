const { resolve } = require("dns");
const path = require("path");

const filePath = path.join(__dirname, "documents", "report.pdf");

console.log("Full path:", filePath);

console.log("Directory:", path.dirname(filePath));

console.log("Filename:", path.basename(filePath));

console.log("Extension:", path.extname(filePath));

console.log("Absolute?", path.isAbsolute(filePath));

console.log("Parsed:", path.parse(filePath));

console.log("Absolute path :", path.resolve(filePath));
