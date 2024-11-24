import { writeFile } from "node:fs/promises";

const file4 = "Hello, this is an sample text file4!";
const file5 = "Hello, this is an sample text file5!";

const writeFiles = async () => {
  try {
    await writeFile("sampleFile4.txt", file4);
    console.log(`${file4} added to files`);
    await writeFile("sampleFile5.txt", file5);
    console.log(`${file5} added to files`);
  } catch (error) {
    console.log(error);
  }
};

writeFiles();
