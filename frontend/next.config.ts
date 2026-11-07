import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	typescript: {
    		ignoreBuildErrors: true, // Игнорируем ошибки TS при сборке
  	},
  	eslint: {
    		ignoreDuringBuilds: true, // На всякий случай игнорируем и ошибки ESLint
  	},
};

export default nextConfig;
