const express = require("express");

const app = express();

app.listen(3000, "localhost", () => {
  console.log("Server started on port 3000");
});
