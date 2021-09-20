const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("Yay. It's working...");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000...");
});
