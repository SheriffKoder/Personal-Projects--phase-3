/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EmailHost: process.env.EmailHost,
        EmailPort : process.env.EmailPort,
        EmailUser : process.env.EmailUser,
        EmailPass : process.env.EmailPass,
        myEmail : process.env.myEmail,
      },
    
};

export default nextConfig;
