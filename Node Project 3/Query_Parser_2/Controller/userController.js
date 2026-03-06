
const { getAllUsers } = require("../model/userModel");
const { filterByCategory, filterByPrice, searchByName, sortData } = require("../util");

function getUsers(req, res, query) {
  let users = getAllUsers();

  if (query.category) {
    users = filterByCategory(users, query.category);
  }

  if (query.price) {
    users = filterByPrice(users, Number(query.price));
  }

  if (query.search) {
    users = searchByName(users, query.search);
  }

  if (query.sort) {
    users = sortData(users, query.sort);
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ results: users }));
}

module.exports = { getUsers };
