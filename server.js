const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser")
const app = express();
const User = require("./models/user");
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ggusers", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}),
() => {
  console.log("Mongoose is connected")
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "/",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

app.post("/api/login", passport.authenticate("local", {successRedirect: "/welcome", failureRedirect: '/login', failureFlash: true}), (req, res) => {
  res.send("success")
});

app.post("/api/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get("/api/user", (req, res) => {
  res.send(req.user);
});
app.get("/api/budget", (req, res) => {
  User.findOne({username: req.user.username})
  .then(budget => res.json(budget));
});

app.get("/api/:user", (req, res) => {
  User.findOne({username: req.params.user})
  .then(user => res.json(user))
})

app.put("/api/:user", function(req, res){
  User.findOneAndUpdate({username: req.params.user}, req.body)
  .then(dbBudget => res.json(dbBudget))
})
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
