'use strict';
var cheerio = require('cheerio');
var request = require('request');

const GIT_URL = "https://github.com/leereilly/games"
function topMovies(callback) {
  request(GIT_URL, (err, resp, body) => {
    var games = [];
    if (err) {
      return callback(err);
    }
    if (resp.statusCode === 200) {
      var $ = cheerio.load(body);
    $('ul li').each(function(index, element) {
      var gameString = $(this).html();
      if(gameString.search(/\Play it now!/g) !== -1){
      var game = {};
      var gitURL = $(this).html().match(/(.*?)(?=\">)/)[0].split('="')
      console.log('gitURL: ', gitURL[1])
      var gameName = $(this).html().match(/(.*?)(?=\<\/a)/)[0].split('">')
      console.log("gameName: ", gameName[1])
      var gameURL = $(this).html().match(/(.*?)(?=\">P)/)[0].split(' <a href="')
      console.log("gameURL: ", gameURL[1])
      var gameDescription = $(this).html().match(/(.*?)(?=\s\<a)/)[0].split(' - ')
      console.log("gameDescription: ", gameDescription)
        game.Name = gameName[1]
        game.GithubURL = gitURL[1]
        game.Url = gameURL[1]
        game.Description = gameDescription[1]
        // console.log("I AM DOING SOMETHING!!! : ",   $(this).html())
        games.push(game)
       }
       });
    }

    callback(null, games);

  });
}

module.exports = topMovies
