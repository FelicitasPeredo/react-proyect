module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: ["garden", "pastel"],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
}
