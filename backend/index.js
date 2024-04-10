const express = require("express");

const app = express();
cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

