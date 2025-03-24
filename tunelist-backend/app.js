const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI, {})
  .then(() => console.log("Connected to MongoDB Atlas.."))
  .catch((error) => console.log("Error connecting to MongoDB Atlas:", error));


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// end pt. to fetch similar songs --> GET
app.get("/recommend/:song", async (req, res) => {
  const song = req.params.song;
  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&track=${song}&api_key=${process.env.LASTFM_API_KEY}&format=json`
    );
    res.json(response.data.similartracks.track);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recommendations!" });
  }
});
