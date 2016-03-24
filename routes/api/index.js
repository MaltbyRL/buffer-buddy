'use strict';
//http://localhost:3000/api/git-games/git-games
var express = require('express');
var gitGames = require('./games');
var router = express.Router();


router.use('/git-games', gitGames);

module.exports = router
