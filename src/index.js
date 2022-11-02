const path = require("path");
const express = require("express");
const app = express();
//for View-Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
//set-Path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
//Routing
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/about", (req, res) => {
  res.render("about.hbs");
});
app.get("/contact", (req, res) => {
  res.render("contact.hbs");
});
app.get("*", (req, res) => {
  res.render("404", {
    errorComponent: "OOPs page couldn't be found"
  });
});
app.listen(8001, () => {
  console.log("listing the port at 8001");
});
