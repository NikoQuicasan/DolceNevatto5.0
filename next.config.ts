// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
        pathname: '**', 
      },
    ],
  },
  /* otras opciones de configuración aquí */
};

export default nextConfig;