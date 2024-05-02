/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    //the server that the movie database uses for the images
    //defined here to allow next.js to fetch the images 
    images: {
        domains: ["image.tmdb.org"]
    }
}

module.exports = nextConfig
