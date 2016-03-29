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




});
