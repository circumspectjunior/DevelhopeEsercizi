import * as fs from "node:fs";
//another way of importing writeFile
//import {writeFile} from "node:fs"

const content = "Hello, this is a sample text file1!";

fs.writeFile("sample.txt", content, (err) => {
  if (err) {
    console.error("An error occurred while writing the file:", err);
  } else {
    console.log("File has been written successfully!");
  }
});
