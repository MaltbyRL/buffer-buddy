'use strict';

const express = require('express');
const router = express.Router();
const Game = require("../../../models/User")



router.get("/", function(req, res, next) {
  console.log("hit gameList get :-)", Game.find().schema)
  let games = Game.find()
    .populate('allTheGames')
    .exec((err, data) => {
      res.status(200).send("res", data)
    })
});



router.post("/", function(req, res, next) {
  let newGame = new Game();

  newGame.allTheGames.push({
    Name: req.body.Name,
    GithubURL: req.body.GithubURL,
    Url: req.body.Url,
    Description: req.body.Description
  });

  console.log("hit gameList post :-)", newGame)
  newGame.save((err, savedGame) => {
    console.log(savedGame)
    if (err) return res.status(400).send(err);
    res.send(savedGame);
  });
  res.send("done")
});

module.exports = router;
