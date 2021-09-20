const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json({ extended: true }));

app.listen(5000, function () {
  console.log("Server is running on port 5000...");
});
