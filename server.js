'use strict';
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();


// const mongoose = require("mongoose");
// mongoose.connect('')

app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", require('./routes/api'));
app.use("/*", function(req, res, next) {
    res.render("popup", { title: "bufferBuddy" });
  });





app.listen(process.env.PORT || 3000)
console.log("listening")
