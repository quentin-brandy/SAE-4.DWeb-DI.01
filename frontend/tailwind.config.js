/** @type {import('tailwindcss').Config} */
export default {
  content: [    
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background)/<alpha-value>)",
        textgrey: "hsl(var(--text-grey)/<alpha-value>)",
        textgreen: "hsl(var(--text-green)/<alpha-value>)",
        textwhite: "hsl(var(--text-white)/<alpha-value>)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      backgroundImage: {
        button: "var(--button)",    
        buttonrv: "var(--buttonrv)",
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      boxShadow: {
        'card':  'inset 0px -63px 46px -14px rgba(0,0,0,0.1)',
        'arrow': ' inset 68px 4px 50px -6px rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [],
}

