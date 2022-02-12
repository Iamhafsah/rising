module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "moving-screen": {
          "0%": { 
            transform: "translateY(0)"
          },
          "100%": { 
            transform:"translateY(-30px)"
          }
        },
        "moving-cards":{
          "0%": { 
            transform: "translate(-63%, 0)"
          },
          "100%": { 
            transform: "translate-x-[(80%, 0)]" 
          }
        }
      },
      animation: {
        "moving-screen": "moving-screen 2s linear alternate infinite",
        "moving-cards": "moving-cards 18s linear alternate infinite"
      },
      colors:{
        "teal1": "#07969E",
        "teal2": "#40BBC3",
        "teal3" : "#A0DDE2",
        "teal4": "#ECFEFE",
        "rise-dark": "#4A5050",
        "rise-black": "#2D2D2D",
        "rise-indigo": "#F6F2FF",
        "rise-orange": "#FFF4F0",
      },
      fontFamily:{
        sans:["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
