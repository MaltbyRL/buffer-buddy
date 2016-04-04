"use strict";
(function() {
  const mongoose = require("mongoose");
  const bcrypt = require("bcrypt");
  const jwt = require("jwt-simple");
  const moment = require("moment");


  const JWT_SECRET = process.env.JWT_SECRET;


  let userSchema = mongoose.Schema({
    user: {
      type: String,
      ref: "User",
      required: false
    },
    userName: {
      type: String,
      required: false
    },
    favoritedGames: {
      type: String,
      required: false
    },
    allTheGames: {
      type: Array,
      required: false
    },
    status: {
      type: String,
      default: "Unfavorited"
    }, //Between "Favorited", "Unfavorited"
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    tempPassword: {
      type: String
    }
  });



  userSchema.statics.login = function(req, res, next) {
    console.log(req.body);
    let userLogin = req.body.email ? {
      email: req.body.email
    } : {
      username: req.body.username.toLowerCase()
    };
    let loginType = req.body.email ? "E-Mail" : "Username";
    User.findOne(userLogin, (err, user) => {
      if (err || !user) return res.status(400).send(`No user found with this ${loginType}`);
      console.log(`Found user: ${user}`);
      bcrypt.compare(req.body.password, user.password, (err, correctPass) => {
        if (err) return res.status(400).send(err);
        if (correctPass) {
          console.log(`${user.username} signed in`);
          let authData = {};
          authData.timestamp = Date.now();
          authData.username = user.username;
          authData.email = user.email.toLowerCase();
          authData._id = user._id;
          let authToken = jwt.encode(authData, JWT_SECRET);
          if (user.tempPassword) {
            user.tempPassword = null;
            user.save((err, savedUser) => {
              if (err) return res.status(400).send();
              console.log(savedUser)
            });
          }
          res.cookie("authToken", authToken);
          next();
        } else if (user.tempPassword) {
          res.cookie("originalUrl", "/users/password/change");
          bcrypt.compare(req.body.password, user.tempPassword, (err, correctPass) => {
            if (err) return res.status(400).send(err);
            if (correctPass) {
              let authData = {};
              authData.timestamp = Date.now();
              authData.username = user.username;
              authData.email = user.email;
              authData._id = user._id;
              let authToken = jwt.encode(authData, JWT_SECRET);
              res.cookie("authToken", authToken);
              next();
            } else {
              return res.status(400).send("Incorrect Password.");
            }
          });
        } else {
          return res.status(400).send("Incorrect Password.");
        }
      });
    });
  };

  userSchema.statics.register = function(req, res, next) {
    User.findOne({
      email: req.body.email.toLowerCase()
    }, (err, foundUser) => {
      if (err) return res.status(400).send(err);
      if (foundUser) return res.status(400).send("E-Mail is already in use.");

      User.findOne({
        username: req.body.username.toLowerCase()
      }, (err, foundUser) => {
        if (err) return res.status(400).send(err);
        if (foundUser) return res.status(400).send("Username is already in use.");

        bcrypt.hash(req.body.password, 14, (err, hash) => {
          var newUser = new User();
          newUser.email = req.body.email.toLowerCase();
          newUser.username = req.body.username.toLowerCase();
          newUser.styledUsername = req.body.username;
          newUser.password = hash;
          newUser.save((err, savedUser) => {
            if (err) return res.status(400).send(err);
            next();
          });
        });
      });
    });
  };

  userSchema.statics.isLoggedIn = function(req, res, next) {
    let decodedToken, method = req.method;
    if (method === "POST") {
      console.log("POOOOOOOOOOOOOOOOOOOOOOOOOST");
    }
    console.log(req.cookies.authToken);
    try {
      decodedToken = jwt.decode(req.cookies.authToken, JWT_SECRET);
    } catch (err) {
      res.cookie("originalUrl", req.originalUrl);
      return method === "POST" ? res.status(400).send("Please sign in to continue.") : res.status(400).redirect("/users/login");
    }
    console.log("Decoded Token:");
    console.log(decodedToken);
    User.findById(decodedToken._id, (err, foundUser) => {
      if (err) return res.status(400).send(err);
      req.user = decodedToken;
      next();
    });
  };

  userSchema.methods.changePassword = function(passwords, cb) {
    console.log("passwords:", passwords);
    if (!passwords.new) {
      return cb("Must set new password");
    }
    if (passwords.new != passwords.verify) {
      return cb("Passwords must match");
    }
    bcrypt.compare(passwords.old, this.password, (err, correctPass) => {
      if (err) return cb(err);
      if (correctPass) {
        bcrypt.hash(passwords.new, 14, (err, hash) => {
          if (err) return cb(err);
          this.password = hash;
          this.tempPassword = null;
          this.save((err, savedThis) => {
            if (err) return cb(err);

          });
        });
      } else if (this.tempPassword) {
        bcrypt.compare(passwords.old, this.tempPassword, (err, correctPass) => {
          if (err) return cb(err);
          if (correctPass) {
            bcrypt.hash(passwords.new, 14, (err, hash) => {
              if (err) return cb(err);
              this.tempPassword = null;
              this.password = hash;
              this.save((err, savedThis) => {
                if (err) return cb(err);
                cb(null, "Successfully changed password!\n\nThe temporary password has been removed.");
              });
            });
          } else {
            return cb("Current password incorrect");
          }
        });
      } else {
        return cb("Current password incorrect");
      }
    });
  };

  userSchema.statics.forgotPassword = function(userInfo, cb) {
    let email, login = userInfo.login;
    if (userInfo.login.includes("@")) {
      email = userInfo.login;
      sendMessage();
    } else {
      console.log(`Finding ${userInfo.login}...`);
      User.findOne({
        "username": userInfo.login
      }, (err, foundUser) => {
        if (err) return cb(err);
        if (!foundUser) return cb("Account not found.");
        email = foundUser.email;
        sendMessage();
      });
    }

    function sendMessage() {
      let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let tempPass = "";
      for (let i = 0; i < 32; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];
        tempPass += randomChar;
      }
      bcrypt.hash(tempPass, 14, (err, hash) => {
        if (err) return cb(err);
        User.findOne({
          email: email
        }, (err, foundUser) => {
          if (err) return cb(err);
          foundUser.tempPassword = hash;
          foundUser.save((err, savedUser) => {
            console.log(savedUser)

              
          });
        });
      });
    }
  };

  var User = mongoose.model("User", userSchema);

  module.exports = User;
}());
