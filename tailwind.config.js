module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,mdx,md}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        background: "#F4F0E6",
        text: "#4B3A2B",
        accent1: "#C8A974",
        accent2: {
          brick: "#B46B54",
          plum: "#55354E",
        },
        soft: {
          beige: "#D8C7B5",
          sand: "#EAE3D5",
        },
      },
      fontFamily: {
        headline: ["Bodoni Moda", "serif"],
        subtitle: ["Meie Script", "cursive"],
        body: ["Inter", "Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};