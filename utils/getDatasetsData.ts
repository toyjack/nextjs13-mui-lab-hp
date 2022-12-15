import path from "path";
import fs from "fs/promises";

async function getDatasetsData() {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/datasets.json",
    "utf8"
  );
  const jsonContent = JSON.parse(fileContents);

  return jsonContent;
}

export default getDatasetsData;