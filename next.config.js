/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger overwrites this with standalone. Keep it for local parity.
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
};

module.exports = nextConfig;
