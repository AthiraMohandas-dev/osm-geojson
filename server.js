const express = require("express");
require('dotenv').config(); 
const apiRoute = require("./routes/index.js");

const PORT = process.env.PORT;

const app = express();

app.use("/api", apiRoute);

// start server
app.listen(PORT, function () {
  console.log("Server running on port 3000");
});
