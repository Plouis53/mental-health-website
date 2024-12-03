/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false, // Disable source maps in production

  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL_USER: process.env.EMAIL_USER,
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   productionBrowserSourceMaps: false, // Disable source maps in production
// };

// export default nextConfig;
