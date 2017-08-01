var app = angular.module('lyricsApp');

app.factory('lyricsFactory', function ($http) {
console.log("My Service is Loaded");

  var lyrics = [];

  return {
    getRandomLyric: getRandomLyric,
    getLyrics: getLyrics,
    display: display
  };

  function getLyrics() {
    var p = $http ({
      method: 'GET',
      url: '/lyrics/all'
    }).then(function(response) {
      lyrics = response.data;
      console.log(lyrics);
    });
    return p;
  };

  function getRandomLyric() {
    var p = $http ({
      method: 'GET',
      url: '/lyrics/random-lyric'
    }).then(function(response) {
      lyrics = response.data;
      console.log(lyrics);
    });
    return p;
  };
  function display() {
    return lyrics;
  }


//closure for factory
});

// setLyrics?
// lyrics = response.data
// getLyrics?
// return lyrics
