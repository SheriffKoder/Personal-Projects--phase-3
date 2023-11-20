/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            //if going to use the user images from google accounts
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',

          },
        ],
      },

};

module.exports = nextConfig;
