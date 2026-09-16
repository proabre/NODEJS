const fs = require("fs");

//reading file
//rading file is asunchronous
fs.readFile("./docs/bloge1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  console.log(data.toString());
});

console.log("last line");

//writing files

fs.writeFile("./docs/bloge1.txt", "hello world", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "hello blog 2 ", () => {
  console.log("file was written");
});

fs.readFile("./docs/blog2.txt", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data.toString());
});
