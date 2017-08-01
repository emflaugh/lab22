var app = angular.module('lyricsApp');

app.config(function($routeProvider) {
console.log("My config is loaded");
  $routeProvider
  .when('/all', {
    templateUrl: 'lyrics.html'
  })
  .when('/random-lyric', {
    templateUrl: 'random-lyrics.html'
  })
  .otherwise({ redirectTo: '/all' })

});
