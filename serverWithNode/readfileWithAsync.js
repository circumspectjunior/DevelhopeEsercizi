import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const data1 = await readFile("sampleFile1.txt", { encoding: "utf-8" });
    console.log(`here is what i found from data1: ${data1}`);
    const data2 = await readFile("sampleFile2.txt", { encoding: "utf-8" });
    console.log(`here is what i found from data2: ${data2}`);
    const data3 = await readFile("sampleFile3.txt", { encoding: "utf-8" });
    console.log(`here is what i found from data3: ${data3}`);
  } catch (error) {
    console.log(error);
  }
};

read();
