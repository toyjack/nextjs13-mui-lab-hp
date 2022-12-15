import path from "path";
import fs from "fs";

function getReferenceData() {
  const mdFolder = path.join(process.cwd(), "markdown");
  const fileContents = fs.readFileSync(
    mdFolder + "/references.md",
    "utf8"
  );
  return fileContents;
}

export default getReferenceData;
