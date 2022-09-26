const express = require("express");
require("dotenv").config();
const apiRoute = require("./src/routes/index.js");

const PORT = process.env.PORT;

const app = express();

app.use("/api", apiRoute);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
