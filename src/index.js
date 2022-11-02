const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set('views', path.join(__dirname, '../views'));

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

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
    errorComponent: " oops couldn't find this page "
  });
});

app.listen(8000, () => {
  console.log("listing the port at 8000");
});
