'use strict';

var express = require('express');

var favoritedGames = require('')

var router = express.Router();



// GET /api/top-movies
router.get('/favorited-games', (req, res, next) => {
  favoritedGames((err, games) => {
    if (err) {
      return next(err);
    }

    res.json({ games: games });
  });
});

//POST /api/top-movies
router.post('/', (req, res, next) => {
  res.json({ hello: 'world'});
});

module.exports = router;
