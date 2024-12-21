/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "#2a4a3f",
        "color-9": "#ecebe0",
        darkslateblue: "#2a2c77",
        gold: "#ffe012",
        "color-10": "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-serif": "'IBM Plex Serif'",
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      "30xl-5": "49.5px",
      "21xl": "40px",
      "11xl": "30px",
      "33xl-8": "52.8px",
      "23xl": "42px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "55xl-5": "74.5px",
      "26xl": "45px",
      "41xl": "60px",
      "28xl-8": "47.8px",
      "19xl": "38px",
      "15xl": "34px",
      xl: "20px",
      "8xl": "27px",
      "38xl": "57px",
      inherit: "inherit",
    },
    screens: {
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};