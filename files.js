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

//directories
if (!fs.existsSync("./assets")) {
  //if folder does not exist it will create
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  //if it ecists it deletes the folder
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//deleting diles

if (fs.existsSync("./docs/deleteme.txt")) {
  //if the file exists it will be deleted
  fs.unlink("./docs/deleteme.txt", (err) => {
    //unlink will delete the file
    console.log(err);
  });
  console.log("file deleted");
}

//for a large datas we use streams because streams start using data before it has finishe loading by using small chunk of stream of datas
