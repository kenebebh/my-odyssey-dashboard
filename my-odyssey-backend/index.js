const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "hello my queen" });
});

app.use("/users", require("./routes/usersRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
