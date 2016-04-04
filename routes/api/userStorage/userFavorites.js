'use strict';

const express = require('express');
const router = express.Router();
const Game = require("../../../models/User")



router.post("/favorited-games", function(req, res, next) {
  "use strict";
  let newGame = new Game();
  newGame.Name = Game.Name
  newGame.GithubURL = Game.GithubURL
  newGame.Url = Game.Url
  newGame.Description = Game.Description

  newGame.save((err, savedRequest) => {
    if (err) return res.status(400).send(err);

    res.send(savedRequest);
  });


});
module.exports = router;
