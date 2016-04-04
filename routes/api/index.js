'use strict';
//http://localhost:3000/api/git-games/git-games
var express = require('express');
var gitGames = require('./games');
var userStorage = require('./userStorage');
var router = express.Router();


router.use('/git-games', gitGames);
router.use('/user-storage', userStorage);

module.exports = router
