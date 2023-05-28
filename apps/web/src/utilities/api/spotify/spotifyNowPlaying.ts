// Axios
import axios from 'axios';

// Spotify Utility
import { spotifyAccessToken } from 'src/utilities/api/spotify/spotifyAccessToken';

/**
 * This TypeScript function retrieves the currently playing song on Spotify using an access token and
 * returns the data in a type-safe manner.
 * @returns The function `spotifyNowPlaying` is returning a Promise that resolves to an Axios response
 * object. The response object contains data from a GET request to the Spotify Now Playing API
 * endpoint, which requires an access token to be passed in the Authorization header. The data returned
 * is expected to be an object, but there is no specific interface defined for it. If there is an
 * error, it will be caught and
 */
export const spotifyNowPlaying = async () => {
  try {
    const accessToken = await spotifyAccessToken();
    // TODO: Need an interface here to make sure data is typesafe
    return axios.get<{}>(process.env.NEXT_PUBLIC_SPOTIFY_NOW_PLAYING, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  } catch (e) {
    console.error('Spotify Now playing: ', e);
  }
};
