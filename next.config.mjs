/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "8000",
                pathname: "/**",
            }, {
                protocol:"https",
                hostname: "picsum.photos",
                
            }
        ],
    },
};

export default nextConfig;
