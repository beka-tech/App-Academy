const express = require("express");
const app = express();
const { WriteDataFile, generate4DigitId } = require("../util");

const router = express.Router();
const users = require("../data/user");
const {
  getAllUser,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

app.use(express.json());
//Get All Users
router.get("/", getAllUser);
//Get User By ID
router.get("/:id", getUserByID);
//Create User
router.post("/", createUser);
//Update User
router.patch("/:id", updateUser);
// Delete User
router.delete("/:id", deleteUser);

module.exports = router;
