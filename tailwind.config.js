/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: { xs: "450px" },
      fontFamily: {
        arabic: ["Noto Kufi Arabic", "sans-serif"],
        monospace: "monospace",
      },
      colors: {
        // testbg: "linear-gradient(to bottom right, #9bface, #b26cfc)",
        // hpbg: "radial-gradient(#b8f5d9, #ffffff)",

        //  #cbf7f2 and #b2ebf9
        // #9bface and #9af6f9
        // #9bface and #b26cfc

        // #CC99FF
        // #6599FF
        // #336699
        // #129793
        // #FF7260 red

        t: "#334155",
        dt: "#d1d5db",
        pc: "#336699", // Primary Color and could be the Actions background and Links text color #1677ff
        sc: "#6599FF", // Secondary Color
        bg: "#fafafa",
        cbg: "#ffffff", // Card Background color
        dbg: "#000000",
        dcbg: "#262626", // Dark Card Background color

        bg1: "#fde3c2",
        bg2: "#f7c8f7",
        bg3: "#ff9898",
        bg4: "#ffc2ac",
        bg5: "#d7e8fb",
        bg6: "#b8f5d9",
        bg7: "#fcdcdc",
        bg8: "#A9A9A9",
        bg9: "#ac9ffc",

        // "ico-bg": "#9bface", // Icon & Button Background
        // "ico-c": "#121212", // Icon & Button Color

        // red: "#ff6446",
        // green: "#14d263",
        // blue: "#4696ff",
        // orange: "#ffa500",
        // blur: "#00000066",
      },
      zIndex: {
        auto: "auto",
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
