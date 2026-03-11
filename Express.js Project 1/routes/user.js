const express = require("express");
const app = express();
const { WriteDataFile, generate4DigitId } = require("../util");

const router = express.Router();
const users = require("../data/user");

app.use(express.json());
//Get All Users
router.get("/", (req, res) => {
  // const user = users;
  res.send(users);
});
//Get User
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.userUniqueId === req.params.id);
  if (!user) res.send("404 User Not Found");
  res.send(user);
});
//Create User
router.post("/", (req, res) => {
  const user = req.body;

  const newUser = {
    userUniqueId: generate4DigitId(),
    ...user,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  WriteDataFile("./data/user.json", users);
  res.json(newUser);
});

//Update User
router.patch("/:id", (req, res) => {
  const user = req.body;
  const Index = users.findIndex((u) => u.userUniqueId === req.params.id);
  users[Index] = { ...user, createdAt: new Date().toISOString() };

  users.push(users[Index]);
  WriteDataFile("./data/user.json", users);
  res.json(users[Index]);
});

// Delete User
router.delete("/:id", (req, res) => {
  const user = users.filter((u) => u.userUniqueId !== req.params.id);
  if (!users.find((u) => u.userUniqueId === req.params.id))
    res.send("404 User Not Found");

  WriteDataFile("./data/user.json", user);
  res.send(`User 4{req.params.id} Deleted `);
});

module.exports = router;
