import path from "path";
import fs from "fs/promises";

async function getServicesData() {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/services.json",
    "utf8"
  );
  const jsonContent = JSON.parse(fileContents);

  return jsonContent;
}

export default getServicesData;