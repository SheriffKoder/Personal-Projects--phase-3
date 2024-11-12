/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
      GG_Maps_AP: process.env.GG_Maps_AP,
      GG_Maps_MapId: process.env.GG_Maps_MapId,
      MONGODB_URI : process.env.MONGODB_URI,
      EmailHost: process.env.EmailHost,
      EmailPort : process.env.EmailPort,
      EmailUser : process.env.EmailUser,
      EmailPass : process.env.EmailPass,
      myEmail : process.env.myEmail,
    },
    images: {
        remotePatterns: [
          {
            //if going to use the user images from google accounts
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',

          },
          {
            //if going to use the user images from google accounts
            protocol: 'https',
            hostname: 'res.cloudinary.com',

          },
        ],
      },

};

module.exports = nextConfig;
