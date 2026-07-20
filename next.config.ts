import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/`. Netlify publishes that directory
  // directly — see netlify.toml. Every route prerenders, so nothing needs a
  // server at runtime.
  output: "export",
  images: {
    // next/image optimization requires a server; static export needs it off.
    unoptimized: true,
  },
};

export default nextConfig;
