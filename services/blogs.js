import { readdir, readFile } from "node:fs/promises";

export async function getBlogFileNames() {
  try {
    const fileNames = await readdir(process.cwd() + "/data/blogs");
    return fileNames;
  } catch (error) {
    console.log("getBlogFileNames: >>> ", error);
    return [];
  }
}

export function getBlogFileContent(fileName) {
  // const c = await readFile(process.cwd() + "/data/blogs/" + fileName + ".json");
  return require("../data/blogs/" + fileName + ".json");
}
