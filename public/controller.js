var app = angular.module('lyricsApp');

app.controller('myCtrl', function($scope, lyricsFactory) {
  console.log("my controller is loaded");


  $scope.setAllLyrics = function() {
    // $scope.lyrics = lyricsFactory.getLyrics();
    lyricsFactory.getLyrics().then(function(){
      $scope.allLyrics = lyricsFactory.display();
      console.log($scope.allLyrics);
      console.log($scope.allLyrics[0].lyric);
      console.log($scope.allLyrics[1].lyric);
      console.log($scope.allLyrics[2].lyric);
      console.log($scope.allLyrics[3].lyric);
      console.log($scope.allLyrics[4].lyric);
    });
  };

  $scope.setRandomLyric = function() {
    lyricsFactory.getRandomLyric().then(function(){
      $scope.randomLyric = lyricsFactory.display();
      console.log($scope.randomLyric);
      console.log($scope.randomLyric.artist);
      console.log($scope.randomLyric.songTitle);
      console.log($scope.randomLyric.lyric);
    });
  };

  // $scope.lyrics = lyricsFactory.getLyrics();
  // console.log($scope.lyrics);



//closure for controller
});
