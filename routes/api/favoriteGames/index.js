'use strict';

var express = require('express');
var getGames = require('')
var router = express.Router();

var FavoriteGames = require("../../../models/favoriteGamesModel")


// GET /api/top-movies
router.get('/favorited-games', (req, res, next) => {
  getGames((err, games) => {
    if (err) {
      return next(err);
    }
    res.json({
      games: games
    });
  });
});

router.put('/favorited-games', (req, res, next) => {
  favoritedGames((err, games) => {
    if (err) {
      return next(err);
    }
    res.json({
      games: games
    });
  });
});


router.post('/favorited-games', (req, res, next) => {
  favoritedGames((err, games) => {
    if (err) {
      return next(err);
    }
    res.json({
      hello: 'world'
    });
  });
});


router.delete('/favorited-games', (req, res, next) => {
  favoritedGames((err, games) => {
    if (err) {
      return next(err);
    }
    res.json({
      hello: 'world'
    });
  });
});

module.exports = router;
