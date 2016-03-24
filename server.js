'use strict';
var express = require('express');
var api = require('./routes/api');
var path = require("path");

var app = express();


app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/api",  api);
app.use("/*", function(req, res, next) {
    res.render("popup", { title: "bufferBuddy" });
  });





app.listen(process.env.PORT || 3000)
console.log("listening")
