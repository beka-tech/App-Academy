const fs = require("fs").promises;

async function readJSONFile(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}: ${error}`);
    return [];
  }
}

async function main() {
  try {
    const names = await readJSONFile("name.json");
    const address = await readJSONFile("address.json");

    const lookup = Object.fromEntries(names.map((name) => [name.id, name]));

    console.log(lookup);

    // Merge address with matching name using id
    const bioData = address.map((adrr) => ({
      ...lookup[adrr.id],
      ...adrr,
    }));
    // console.log(bioData);

    await fs.writeFile("bio2.json", JSON.stringify(bioData));
    return names;
  } catch (error) {
    console.error(error);
    return [];
  }
}

main();
