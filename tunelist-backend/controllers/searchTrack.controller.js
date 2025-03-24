const searchSpotifyTrack = async (trackName, token) => {
  const url = `https://api.spotify.com/v1/search?q=${trackName}&type=track&limit=1`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tracks.items[0];
  } catch (error) {
    console.log("Error searching Spotify track..", error);
  }
};
