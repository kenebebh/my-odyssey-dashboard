const express = require("express");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/users", require("./routes/usersRoutes"));
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "hello my queen" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
