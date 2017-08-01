var app = angular.module('lyricsApp');

app.config(function($routeProvider) {
console.log("My config is loaded");
  $routeProvider
  .when('/all', {
    controller: 'myCtrl',
    templateUrl: 'lyrics.html'
  })
  .when('/random-lyric', {
    controller: 'myCtrl',
    templateUrl: 'random-lyrics.html'
  })
  .otherwise({ redirectTo: '/all' })

});
