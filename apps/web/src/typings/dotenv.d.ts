declare module NodeJS {
  interface ProcessEnv {
    // Sentry
    /**
     * Sentry organization name
     */
    SENTRY_ORG: string;
    /**
     * Sentry project name
     */
    SENTRY_PROJECT: string;
    /**
     * Sentry Auth token
     */
    SENTRY_AUTH_TOKEN: string;
    /**
     * Sentry DSN URL
     */
    NEXT_PUBLIC_SENTRY_DSN: string;

    // GitHub
    /**
     * GitHub Repo ID for giscus
     */
    NEXT_PUBLIC_REPO_ID: string;
    /**
     * GitHub client id
     */
    NEXT_PUBLIC_GITHUB_CLIENT_ID: string;
    /**
     * GitHub client secret
     */
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET: string;
    /**
     * GitHub GraphQL URL
     */
    NEXT_PUBLIC_GITHUB_GRAPHQL_URL: string;
    /**
     * GitHub personal access token
     */
    NEXT_PUBLIC_GITHUB_TOKEN: string;
    /**
     * GitHub Repository name
     */
    NEXT_PUBLIC_REPONAME: string;
    /**
     * GitHub username
     */
    NEXT_PUBLIC_GITHUB_USERNAME: string;

    // Google
    /**
     * Google refresh token
     */
    NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN: string;
    /**
     * Google client id
     */
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    /**
     * Google client secret
     */
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string;

    // Spotify
    /**
     * Spotify refresh token
     */
    NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: string;
    /**
     * Spotify client id
     */
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: string;
    /**
     * Spotify client secret
     */
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: string;
    /**
     * Spotify Now playing endpoint
     */
    NEXT_PUBLIC_SPOTIFY_NOW_PLAYING: string;
    /**
     * Spotify token URL
     */
		NEXT_PUBLIC_SPOTIFY_TOKEN_URL: string;

    // Open Weather
    /**
     * Open weather API URL
     */
    NEXT_PUBLIC_WEATHER_API_URL: string;
    /**
     * Open weather API key
     */
    NEXT_PUBLIC_WEATHER_API_KEY: string;
    /**
     * Open weather icon URL
     */
    NEXT_PUBLIC_WEATHER_ICON_URL: string;

    // Unsplash
    /**
     * Unsplash access key
     */
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: string;
    /**
     * Unsplash secret key
     */
    NEXT_PUBLIC_UNSPLASH_SECRET_KEY: string;
    /**
     * Unsplash URL
     */
    NEXT_PUBLIC_UNSPLASH_URL: string;

    // Terraform
    /**
     * Terraform Cloud API Token
     */
    TFC_API_TOKEN: string;

    // VERCEL
    /**
     * Vercel token
     */
    VERCEL_TOKEN: string;
  }
}
