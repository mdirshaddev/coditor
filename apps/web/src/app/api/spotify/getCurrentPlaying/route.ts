// Nextjs
import { NextResponse } from 'next/server';

// Sentry
import { captureException } from '@sentry/nextjs';

// Spotify Utility
import { spotifyNowPlaying } from 'src/utilities/api/spotify/spotifyNowPlaying';

/**
 * This TypeScript function retrieves data from the Spotify API and returns a JSON response indicating
 * whether or not a song is currently playing.
 * @returns The `GET()` function is returning a JSON response. If the `spotifyNowPlaying()` function
 * returns a status code of 204 or 400, the response will be a JSON object with the `isPlaying`
 * property set to `false`. Otherwise, the response will be the data returned by the
 * `spotifyNowPlaying()` function.
 */
export async function GET() {
  try {
    const response = await spotifyNowPlaying();
    const status = response?.status;
    const data = response?.data;

    if (status === 204 || status === 400) {
      return NextResponse.json({ isPlaying: false });
    }
    return NextResponse.json(data);
  } catch (e) {
    captureException(e);
  }
}
