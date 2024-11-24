import { writeFile } from "node:fs/promises";

let files = {
  file1: "Hello, this is a sample text file1!",
  file2: "Hello, this is a sample text file2!",
  file3: "Hello, this is a sample text file3!",
};

export default files;

writeFile("sampleFile1.txt", files.file1)
  .then((value1) => console.log(`file written successfully: ${value1}`))
  .then(() => writeFile("sampleFile2.txt", files.file2))
  .then((value2) => console.log(`file written successfully: ${value2}`))
  .then(() => writeFile("sampleFile3.txt", files.file3))
  .then((value3) => console.log(`file written successfully: ${value3}`))
  .catch((error) => console.log(error));

/*import { writeFile } from "node:fs/promises";
const file1 = "Hello, this is a sample text file1!";
const file2 = "Hello, this is a sample text file2!";
const file3 = "Hello, this is a sample text file3!";
async function writeFiles() {
  try {
    await writeFile("sampleFile1.txt", file1);
    console.log("File written successfully: sampleFile1.txt");
    await writeFile("sampleFile2.txt", file2);
    console.log("File written successfully: sampleFile2.txt");
    await writeFile("sampleFile3.txt", file3);
    console.log("File written successfully: sampleFile3.txt");
  } catch (error) {
    console.log(error);
  }
}
writeFiles();*/
