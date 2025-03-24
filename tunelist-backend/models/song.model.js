const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
<<<<<<< HEAD
  title: String,
=======
  track: String,
>>>>>>> 4057706 (Get similar tracks)
  artist: String,
  album: String,
  duration: Number,
});
const song = mongoose.model("song", songSchema);
module.exports = song;
