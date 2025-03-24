const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
<<<<<<< HEAD
=======
const { getSimilarTracks } = require("./controllers/similarTracks.controller.js");
>>>>>>> 4057706 (Get similar tracks)
require("dotenv").config();

const dbURI = process.env.MONGODB_URI;
mongoose
<<<<<<< HEAD
  .connect(dbURI, {})
  .then(() => console.log(`Connected to MongoDB Atlas..`))
  .catch((error) => console.log(`Error connecting to MongoDB Atlas :`, error));
=======
  .connect(dbURI, {})
  .then(() => console.log("Connected to MongoDB Atlas.."))
  .catch((error) => console.log("Error connecting to MongoDB Atlas:", error));
>>>>>>> 4057706 (Get similar tracks)

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
=======
const router = express.Router();

router.get("/recommend/:song", getSimilarTracks);

app.use("/api", router);

>>>>>>> 4057706 (Get similar tracks)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
<<<<<<< HEAD

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
=======
>>>>>>> 4057706 (Get similar tracks)
