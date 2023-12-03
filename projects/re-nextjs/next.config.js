/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
      GG_Maps_AP: process.env.GG_Maps_AP,
      GG_Maps_MapId: process.env.GG_Maps_MapId,
    },
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
