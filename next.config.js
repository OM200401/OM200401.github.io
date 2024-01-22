/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    exportPathMap: function () {
        return {
          '/': { page: '/' },
          // Add other pages as needed
        };
      },
}

module.exports = nextConfig
