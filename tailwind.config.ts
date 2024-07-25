import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          "yellow" : "#E6C651",
          "gray" : "#D9D9D9",
          "gray2" : "#F5F3F1"
        },
      },

    },
  },
  plugins: [],
};
export default config;
