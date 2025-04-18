/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'https://api.ngovantin.id.vn/v1/:path*'
      }
    ];
  }
};

export default nextConfig;
