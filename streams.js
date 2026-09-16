const fs = require("fs");

//for a large datas we use streams because streams start using data before it has finishe loading by using small chunk of stream of datas

//to read a bit of streams at a time

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

//write chunk of stream datas which come from blog3 into blog4
const writeStream = fs.createWriteStream("./docs/blog4.txt");

const writeStream2 = fs.createWriteStream("./docs/blog5.txt");

readStream.on("data", (chunk) => {
  //this is an event listener we listing to a buffer of data from a stream
  console.log("=======NEW CHUNK OF DATA=======");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

//piping
//piping or writing streams of data into blog5 with piping
readStream.pipe(writeStream2);
