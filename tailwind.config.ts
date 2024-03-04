import type { Config } from "tailwindcss";

const pxToRem = (px: number) => `${px / 16}rem`;
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    mobile: "360px",
    tablet: "768px",
    desktop: "1024px",
    "wide-screen": "1740px",
    "under-desktop": { max: "1023px" },
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
    extend: {
      spacing: {
        ...Array.from({ length: 100 }, (_, index) => index + 1).reduce(
          (acc, px) => {
            acc[`${px}pxr`] = pxToRem(px);
            return acc;
          },
          {} as any
        ),
      },
    },
  },
  plugins: [],
};
export default config;
