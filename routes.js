var express = require("express")
var router = express.Router()

var lyrics = [
  {
  artist: "Beyonce",
  songTitle: "Diva",
  lyric: "Diva is a female version of a Hustler."
 },
 {
  artist: "Beyonce",
  songTitle: "Ego",
  lyric: "Some call it Arrogant, I call it Confident."
 },
 {
  artist: "Beyonce",
  songTitle: "Halo",
  lyric: "I swore I'd never fall again, but this don't even feel like falling."
  },
  {
  artist: "Beyonce",
  songTitle: "Hold Up",
  lyric: "What's wrose lookin' Jealous or Crazy? Jealous or Crazy?"
  },
  {
  artist: "Beyonce",
  songTitle: "Run The World (Girls)",
  lyric: "Who run the world? Girls!"
}];

router.get("/", function (req, res) {
  res.send('Cool Lyrics!');
});

router.get("/random-lyric", function (req, res) {
  randomLyric = lyrics[Math.floor(Math.random()*lyrics.length)];
  res.json(randomLyric);
});

router.get("/all", function (req, res) {
  res.json(lyrics);
  console.log(lyrics);
});

module.exports = router;
