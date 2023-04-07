import { join } from 'path';
import pkg from './package.json' assert { type: 'json' };

import { withSentryConfig } from '@sentry/nextjs';

const isDev = process.env.NODE_ENV === 'development';

/**
 * If the app is in development mode, return the path to the development tsconfig.json file, otherwise
 * return the path to the production tsconfig.json file
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
    appDir: true,
    esmExternals: 'loose'
  },
  typescript: {
    tsconfigPath: getTsConfigPath()
  },
  transpilePackages: [
    '@mui/system',
    '@mui/material',
    '@mui/icons-material',
    '@mui/styles',
    '@mui/utils'
  ],
  modularizeImports: {
    '@mui/icons-material/?(((\\w*)?/?)*)': {
      transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
    }
  },
  images: {
    domains: ['github.githubassets.com']
  },
  env: {
    // Env variables from package.json
  },
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true
  }
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
const nextSentryConfig = withSentryConfig(
  nextConfig,
  sentryWebpackPluginOptions
);

export default nextSentryConfig;
