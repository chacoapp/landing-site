module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        "theme-primary": "#FFFFFF",
        "theme-secondary": "#F4F4F4",
        "theme-tertiary": "#E4E4E4",
        "text-primary": "#070707",
        "text-secondary": "#565656",
        "text-tertiary": "#171717",
        "green-primary": "#4B8848",
        "green-secondary": "#65B461",
        "green-tertiary": "#223422",
        "alert-red": "#D55353",
        "gold": "#FFBF00",
        "gray-custom": "#494949",
        "light-gray": "#5B5B5B",
        "black": "#070707",
        "white": "#FFFFFF",
        "transparent": "transparent",
      },
    },
  },
  plugins: [],
};
