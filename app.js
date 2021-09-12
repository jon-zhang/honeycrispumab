const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Hello")
});

app.get("/potassium", function(req, res) {
    res.send("Potassium")
});

app.get("/how-it-works", function(req, res) {
    res.send("Hello")
});

app.get("/savings-support", function(req, res) {
    res.send("Hello")
});

app.get("/hcp", function(req, res) {
    res.send("Hello")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started'));