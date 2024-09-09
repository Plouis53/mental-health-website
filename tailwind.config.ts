module.exports = {
  theme: {
    extend: {
      fontFamily: {
        default: ["EB Garamond", "system-ui", "sans-serif"],
        primary: ["EB Garamond", "serif"],
        secondary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#212529",
        "primary-light": "#26282c",
        "primary-dark": "#0b0c0e",
        secondary: "#596d80",
        "secondary-light": "#8498aa",
        "secondary-dark": "#404f5c",
        blue: "#0d6efd",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#f3268c",
        red: "#df1529",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#059652",
        teal: "#20c997",
        cyan: "#0dcaf0",
        white: "#ffffff",
        gray: "#6c757d",
        black: "#000000",
      },
    },
  },
  plugins: [],
};

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
