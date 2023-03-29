declare module NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SENTRY_DSN: string;
    NEXT_PUBLIC_GITHUB_CLIENT_ID: string;
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
  }
}
