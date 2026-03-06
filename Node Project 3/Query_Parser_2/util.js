
function filterByCategory(data, category) {
  return data.filter((item) => item.category === category);
}

function filterByPrice(data, minPrice) {
  return data.filter((item) => item.price >= minPrice);
}

function searchByName(data, search) {
  const term = search.toLowerCase();
  return data.filter((item) =>
    item.name.toLowerCase().includes(term)
  );
}

function sortData(data, sortField) {
  const field = sortField.replace("-", "");
  const order = sortField.startsWith("-") ? -1 : 1;

  return [...data].sort((a, b) => {
    if (a[field] < b[field]) return -1 * order;
    if (a[field] > b[field]) return 1 * order;
    return 0;
  });
}

module.exports = {
  filterByCategory,
  filterByPrice,
  searchByName,
  sortData,
};
