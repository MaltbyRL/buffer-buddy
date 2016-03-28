'use strict';


app.controller('favoritesCtrl', function($scope, $sce, $http) {

  console.log('favoritesCTRL');
  // Get the modal
  var modal = document.getElementById('myModal');
  // Open/close Modal
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  // open modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  $scope.openIframe = (game) => {
    $scope.getGameByUrl = $sce.trustAsResourceUrl(game.Url);
    console.log(game.Url)
    modal.style.display = "block";
    console.log("game:", $scope.getGameByUrl);
    $scope.frame = true
    $('iframe').css('height', $(window).height() + 'px');

  }

  $scope.updateGameList = () => {
    $http.get("api/git-games/git-games").then((res) => {
      console.log(res.data.games)
      $scope.games = res.data.games
      // $scope.updateDataBase($scope.games);
    });

  }

  $scope.updateDataBase = (data) => {
    // $http.put("api/")
  }

  $scope.games = games

});
