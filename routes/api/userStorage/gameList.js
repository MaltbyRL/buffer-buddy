'use strict';

const express = require('express');
const router = express.Router();
const Game = require("../../../models/favoriteGamesModel")



router.get("/", function(req, res, next) {
  console.log("hit gameList get :-)", Game)

  let newGame = new Game();

  res.status(200).send("res", newGame)
});



router.post("/", function(req, res, next) {
  let newGame = new Game();

  let buildGame = {}
  buildGame.Name = req.body.Name
  buildGame.GithubURL = req.body.GithubURL
  buildGame.Url = req.body.Url
  buildGame.Description = req.body.Description

  newGame.allTheGames.push(buildGame)
  console.log("hit gameList post :-)", newGame)
  Game.save((err, savedGame) => {
    console.log(savedGame)
      if(err) return res.status(400).send(err);
        res.send(savedGame);
      });
});

module.exports = router;
