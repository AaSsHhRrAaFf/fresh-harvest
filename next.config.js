/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["i.ibb.co", "i.ibb.co.com", "upload.wikimedia.org"],
  },
  // Your existing next config
};

const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#7EB942", // Main brand green
        orange: "#FF6B35", // Main CTA orange
      },
    },
  },
  plugins: [],
};

module.exports = {
  ...nextConfig,
  ...tailwindConfig,
};
