/**
 * Hostinger's OS image is glibc 2.28 or older. Next.js native SWC
 * binaries need GLIBC_2.29, so loading them aborts the build and also
 * blocks compiling any generated next.config.ts wrapper.
 * Remove the linux native packages so Next.js uses @next/swc-wasm-nodejs.
 */
const fs = require("fs");
const path = require("path");

const packages = [
  "@next/swc-linux-x64-gnu",
  "@next/swc-linux-x64-musl",
  "@next/swc-linux-arm64-gnu",
  "@next/swc-linux-arm64-musl",
];

for (const name of packages) {
  const dir = path.join(__dirname, "..", "node_modules", name);
  fs.rmSync(dir, { recursive: true, force: true });
}
