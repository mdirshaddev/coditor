import { join } from 'path';
import { withSentryConfig } from '@sentry/nextjs';

const isDev = process.env.NODE_ENV === 'development';

/**
 * If the app is in development mode, return the path to the development tsconfig.json file, otherwise
 * return the path to the productsion tsconfig.json file
 * @returns The path to the tsconfig file.
 */
function getTsConfigPath() {
  const env = isDev ? 'dev' : 'prod';
  return join('./tsconfig.' + env + '.json');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: 'loose'
  },
  typescript: {
    tsconfigPath: getTsConfigPath()
  },
  images: {
    domains: [
      'avatars.githubusercontent.com', // GitHub Avatars
      'github.githubassets.com', // Github Assets
      'i.scdn.co' // Spotify Asset CDN
    ]
  }
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
const nextSentryConfig = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    authToken: process.env.SENTRY_AUTH_TOKEN,
    project: process.env.SENTRY_PROJECT
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true
  }
);

export default nextSentryConfig;
