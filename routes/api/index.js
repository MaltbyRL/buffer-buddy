'use strict';
//http://localhost:3000/api/git-games/git-games
var express = require('express');
var gitGames = require('./games');
var favoriteGames = require('./favoriteGames');
var router = express.Router();


router.use('/git-games', gitGames);
router.use('//favorited-games', favoriteGames);

module.exports = router
