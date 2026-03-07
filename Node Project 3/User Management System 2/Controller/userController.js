const users = require("../model/userModel");
const { findAll } = require("../model/userModel");
const {
  readData,
  getBody,
  filterBygender,
  filterByAge,
  searchByCountry,
  sortData,
} = require("../util");
const crypto = require("crypto");

// async function getUser(req, res, query) {
//   try {
//     const user = await users.findAll();
//     // let users = getAllUsers();

//     if (query.country) {
//       user = filterByCategory(user, query.country);
//     }

//     if (query.price) {
//       user = filterByPrice(user, Number(query.price));
//     }

//     if (query.search) {
//       user = searchByName(user, query.search);
//     }

//     if (query.sort) {
//       user = sortData(user, query.sort);
//     }

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ results: user }));
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getUser(req, res, query) {
  try {
    let user = await users.findAll();

    if (query.get("gender")) {
      const gender = query.get("gender");
      user = filterBygender(user, gender);
    }

    if (query.get("age")) {
      user = filterByAge(user, Number(query.get("age")));
    }

    if (query.get("search")) {
      user = searchByCountry(user, query.get("search"));
    }

    if (query.get("sort")) {
      user = sortData(user, query.get("sort"));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ results: user }));
  } catch (error) {
    console.log(error);
  }
}

async function getUserByID(req, res, userUniqueId) {
  try {
    const user = await users.findByID(userUniqueId);
    if (!user) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("User Not Found");
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
async function createUser(req, res) {
  try {
    const newUser = await getBody(req);

    const userN = await users.create(newUser);

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(userN));
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res, userUniqueId) {
  try {
    const user = await users.findByID(userUniqueId);

    if (!user) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("User Not Found");
      return;
    }

    const body = await getBody(req);

    const {
      userName,
      userEmail,
      userAge,
      phoneNumber,
      gender,
      address,
      city,
      country,
    } = body;

    const updatedUser = {
      userName: userName ?? user.userName,
      userEmail: userEmail ?? user.userEmail,
      userAge: userAge ?? user.userAge,
      phoneNumber: phoneNumber ?? user.phoneNumber,
      gender: gender ?? user.gender,
      address: address ?? user.address,
      city: city ?? user.city,
      country: country ?? user.country,
    };

    const userN = await users.update(userUniqueId, updatedUser);

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(userN));
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server Error");
  }
}

async function deleteUser(req, res, userUniqueId) {
  try {
    const user = await users.findByID(userUniqueId);

    if (!user) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("User Not Found");
      return;
    } else {
      const userN = await users.deletes(userUniqueId);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(userN));
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server Error");
  }
}

module.exports = { getUser, getUserByID, createUser, updateUser, deleteUser };
