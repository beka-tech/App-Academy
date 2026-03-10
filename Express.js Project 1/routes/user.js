const express = require("express");
const app = express();

const router = express.Router();
const users = require("../data/user");

app.use(express.json());

router.get("/", (req, res) => {
  // const user = users;
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((u) => u.userUniqueId === req.params.id);
  res.json(user);
});

module.exports = router;
