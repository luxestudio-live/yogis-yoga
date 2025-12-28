/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'yogis-yoga'; // Change if your repo name is different

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // assetPrefix and basePath removed for custom domain root deployment
  trailingSlash: true,
}

export default nextConfig
