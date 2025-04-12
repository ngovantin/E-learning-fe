/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'https://e-learning-be-axf3.onrender.com/v1/:path*'
      }
    ];
  }
};

export default nextConfig;
