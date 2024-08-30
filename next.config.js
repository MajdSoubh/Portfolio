/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  //   reactStrictMode: true,
  //   basePath: "/my-portfolio", // Replace with your GitHub repository name
  images: { unoptimized: true },
};

module.exports = nextConfig;
