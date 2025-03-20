const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  duration: Number,
});
const song = mongoose.model("song", songSchema);
module.exports = song;
