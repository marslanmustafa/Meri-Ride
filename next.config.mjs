/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '204.13.234.54',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
