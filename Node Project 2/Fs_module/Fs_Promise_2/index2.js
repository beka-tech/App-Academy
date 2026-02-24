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
    const addresses = await readJSONFile("address.json");

    const bioData = names.map((name) => {
      const matchingAddress = addresses.find(
        (address) => address.id === name.id,
      );
      return { ...name, ...matchingAddress };
    });

    bioData.push({ id: 4, name: "Charlie", address: "789 Oak St" });
    await fs.writeFile("bio.json", JSON.stringify(bioData, null, 2));

    console.log("bio.json created successfully!");
  } catch (error) {
    console.error("Error combining data:", error);
  }
}

// Execute the main method
main();
