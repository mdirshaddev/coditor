import { join } from 'path';

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
  images: {
    domains: ['github.githubassets.com']
  },
  env: {
    // Env variables from package.json
  }
};

export default nextConfig;
