const isGitHubPages = process.env.NODE_ENV === "production";

const repositoryName = "Portfolio-web-site";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /* config options here */
  output: "export", // Required to generate a static export
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // basePath: "/Portfolio-web-site",
  // assetPrefix: "/Portfolio-web-site",
  // trailingSlash: true, // Optional: Add trailing slashes to paths
};
// module.exports = {
//   output: "next export",
//   // basePath: '/Portfolio-web-site',
// };
export default nextConfig;
