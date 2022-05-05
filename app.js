const express = require("express");
const app = express();
const middleware = require("./middleware");

const port = 3003;

const server = app.listen(port, () => {
  console.log("Server listening on port" + port);
});

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", middleware.requireLogin, (req, res, next) => {
  var payload = {
    pageTitle: "Home",
  };
  res.status(200).render("home", payload);
});
