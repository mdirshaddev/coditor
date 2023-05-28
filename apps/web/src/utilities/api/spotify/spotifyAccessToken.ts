// Axios
import axios from 'axios';

// Sentry
import { captureException } from '@sentry/nextjs';

const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: refresh_token,
  NEXT_PUBLIC_SPOTIFY_TOKEN_URL: token_url
} = process.env;

/**
 * This line of code is encoding the Spotify client ID and client secret as a base64 string and storing
 * it in the `token` constant. This encoded string is used as the value for the `Authorization` header
 * when making a request to the Spotify API to retrieve an access token.
 */
const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

/**
 * This function retrieves a Spotify access token using a refresh token and returns it as a Promise.
 * @returns The function `spotifyAccessToken` returns a Promise that resolves to a string representing
 * the access token for the Spotify API. If there is an error, the function logs the error using the
 * `captureException` function and returns `undefined`.
 */
export const spotifyAccessToken = async (): Promise<string | undefined> => {
  try {
    const res = await axios.post<{ access_token: string }>(
      token_url,
      new URLSearchParams([
        ['grant_type', 'refresh_token'],
        ['refresh_token', refresh_token]
      ]).toString(),
      {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    return res.data.access_token;
  } catch (e) {
    captureException(e);
  }
};
