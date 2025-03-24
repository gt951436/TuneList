const qs = require("qs");

const getSpotifyToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const tokenUrl = "https://accounts.spotify.com/api/token";
  const data = qs.stringify({ grant_type: "client_credentials" });
  const authHeader  = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );
  try {
    const response = await axios.post(tokenUrl, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authHeader }`,
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Eroor fetching Spotify token", error);
  }
};
