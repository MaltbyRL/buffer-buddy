'use strict';

var express = require('express');

var githubGames = require('../../../lib/scrapers/git-games')

var router = express.Router();



// GET /api/top-movies
router.get('/git-games', (req, res, next) => {
  githubGames((err, games) => {
    if (err) {
      return next(err);
    }
    res.json({ games: games });
  });
});


module.exports = router;
