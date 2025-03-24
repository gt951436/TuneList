const axios = require("axios");

// fetch similar songs controller
const getSimilarTracks = async (req, res) => {
  const { track, artist } = req.query;

  // Validate that both track and artist are provided
  if (!track || !artist) {
    return res.status(400).json({ error: "Please provide both 'track' and 'artist' query parameters." });
  }

  // Encode parameters to handle spaces and special characters
  const encodedTrack = encodeURIComponent(track);
  const encodedArtist = encodeURIComponent(artist);
  
  const url = `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${encodedArtist}&track=${encodedTrack}&api_key=${process.env.LASTFM_API_KEY}&format=json`;

  try {
    const response = await axios.get(url);
    // Safely access similar tracks from the response
    const similarTracks = response.data.similartracks && response.data.similartracks.track
      ? response.data.similartracks.track
      : [];
    res.json(similarTracks);
  } catch (error) {
    console.error("Error fetching similar tracks:", error);
    res.status(500).json({ error: "Error fetching similar tracks" });
  }
};

module.exports = { getSimilarTracks };
