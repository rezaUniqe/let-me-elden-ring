import type { NextConfig } from "next";
import {fileURLToPath} from "node:url";
import {join, dirname} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const nextConfig: NextConfig = {
    transpilePackages: ["@workspace/ui"],
    outputFileTracingRoot: join(__dirname, '../../'),
};

export default nextConfig;


