const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, ".", "data", "user.json");

function readData() {
  try {
    const data = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
}

function writeData(data) {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing data:", error);
  }
}

function getBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (err) {
        reject(new Error("Invalid JSON body"));
      }
    });
  });
}

function filterByGender(data, gender) {
  if (!gender) return data;

  return data.filter(
    (user) =>
      typeof user.gender === "string" &&
      user.gender.toLowerCase() === gender.toLowerCase(),
  );
}

function filterByAge(data, age) {
  const minAge = Number(age);

  if (isNaN(minAge)) return data;

  return data.filter((user) => Number(user.userAge) >= minAge);
}

function searchByCountry(data, search) {
  if (!search) return data;

  const term = search.toLowerCase();

  return data.filter((user) => {
    const country = user.country || "";
    const city = user.city || "";
    const name = user.userName || "";

    return (
      country.toLowerCase().includes(term) ||
      city.toLowerCase().includes(term) ||
      name.toLowerCase().includes(term)
    );
  });
}

function sortData(data, sortField) {
  if (!sortField || !data.length) return data;

  const field = sortField.replace("-", "").toLowerCase();
  const order = sortField.startsWith("-") ? -1 : 1;

  const key = Object.keys(data[0]).find((k) => k.toLowerCase() === field);

  if (!key) return data;

  return [...data].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue) * order;
    }

    if (aValue < bValue) return -1 * order;
    if (aValue > bValue) return 1 * order;

    return 0;
  });
}

module.exports = {
  readData,
  writeData,
  getBody,
  filterByGender,
  filterByAge,
  searchByCountry,
  sortData,
};
