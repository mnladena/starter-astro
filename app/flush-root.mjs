import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.basename(__dirname);

fs.readdirSync("../html").forEach((file) => {
  if (file !== root && !/^[.].*/.test(file)) {
    const path = `../html/${file}`;
    try {
      file = fs.rmSync(path, { recursive: true, force: true });
    } catch (error) {
      if (error.code === "EISDIR") {
        return null;
      } else {
        // I add for show the folder
        console.log("file: ", path);
        throw error;
      }
    }
  }
});
