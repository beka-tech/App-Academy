const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/user");

app.use(express.json());

app.get("/about", (req, res) => {
  res.send("<h2>About<h2>");
});

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
