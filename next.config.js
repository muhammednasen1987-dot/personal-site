const HTML_CACHE_CONTROL = "public, max-age=0, s-maxage=60, must-revalidate";
const STATIC_CACHE_CONTROL = "public, max-age=31536000, immutable";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger overwrites this with standalone. Keep it for local parity.
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  // Keep ISR stale-while-revalidate from defaulting to ~1 year.
  expireTime: 60,
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: STATIC_CACHE_CONTROL }],
      },
      {
        source: "/((?!_next/static).*)",
        headers: [{ key: "Cache-Control", value: HTML_CACHE_CONTROL }],
      },
    ];
  },
};

module.exports = nextConfig;
