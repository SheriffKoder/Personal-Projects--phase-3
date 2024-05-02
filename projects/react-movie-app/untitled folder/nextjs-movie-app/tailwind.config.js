/** @type {import('tailwindcss').Config} */
module.exports = {
  //path to our pages, specify the files we want
  //in the pages folder and the sub-folder to that folder
  content: ["./pages/**/*.{js,ts,jsx,tsx", "./components/**/*.{js,ts,jsx,tsx"],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"]
    }
  },
  plugins: [],
}

