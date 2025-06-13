// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      backgroundImage: {
        rainbow:
          "linear-gradient(270deg, #ff0080, #ff8c00, #ffff00, #00ff00, #00ffff, #0080ff, #ff00ff, #ff0080)",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradientMove: "gradientMove 2s ease infinite", // 🔥 Faster speed
      },
    },
  },
  plugins: [],
};
