'use strict';

const express = require('express');
const router = express.Router();
const Game = require("../../../models/favoriteGamesModel")



router.delete('/favorited-games', (req, res, next) => {
  Game((err, games) => {
    if (err) {
      return next(err);
    }
  });
});

module.exports = router;
