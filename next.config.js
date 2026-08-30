/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger injects standalone output. Declaring it here is harmless
  // (they overwrite `output`) and keeps local production builds aligned.
  output: "standalone",
  // Hostinger checkouts sit under a domain folder that may have another
  // lockfile. Pin tracing to this app so `.next/standalone` stays correct.
  outputFileTracingRoot: process.cwd(),
};

module.exports = nextConfig;
