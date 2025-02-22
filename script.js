import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("start.ejs");
  });

  app.get("/login", (req, res) => {
    res.render("login.ejs");
  });

  app.get("/register", (req, res) => {
    res.render("register.ejs");
  });

  app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

  app.get("/planner", (req, res) => {
    res.render("planner.ejs");
  });

  app.get("/insights", (req, res) => {
    res.render("insights.ejs");
  });

  app.get("/profile", (req, res) => {
    res.render("profile.ejs");
  });

  app.get("/contact", (req, res) => {
    res.render("contact.ejs");
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port},http://localhost:3000/`);
  }); 
