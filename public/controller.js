var app = angular.module('lyricsApp');

app.controller('myCtrl', function($scope, lyricsFactory) {
  console.log("my controller is loaded");


  $scope.allLyrics = function() {
    $scope.lyrics = lyricsFactory.getLyrics();
    lyricsFactory.getLyrics(lyrics).then(function(){
      $scope.allLyrics = lyricsFactory.getLyrics();
      console.log($scope.allLyrics);
    });
  };

  $scope.randomLyric = function() {
    lyricsFactory.getRandomLyric(lyrics).then(function(){
      $scope.randomLyric = lyricsFactory.getRandomLyric();
      console.log($scope.randomLyric);
    });
  };

  // $scope.lyrics = lyricsFactory.getLyrics();
  // console.log($scope.lyrics);



//closure for controller
});
