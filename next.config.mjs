/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'meriride.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
