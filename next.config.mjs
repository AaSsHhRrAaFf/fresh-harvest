/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config
};

// This doesn't directly work with Tailwind - it's a workaround
// Create a tailwind.config.js file in project root that imports this
const tailwindConfig = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg01": "url('/images/hero/bg01.png')",
        "hero-bg02": "url('/images/hero/bg02.png')",
      },
      colors: {
        green: {
          500: "#7EB942", // Main brand green
        },
        orange: {
          500: "#FF6B35", // Main CTA orange
        },
      },
    },
  },
  plugins: [],
};

// module.exports = nextConfig

export default nextConfig;
