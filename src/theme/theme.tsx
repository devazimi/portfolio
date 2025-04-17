import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      first: string;
      second: string;
      third: string;
      forth: string;
      fifth: string;
      sixth: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      first: string;
      second: string;
      third: string;
      forth: string;
      fifth: string;
      sixth: string;
    };
  }
}

const theme = createTheme({
  palette: {
    custom: {
      first: "rgb(255, 255, 255)",
      second: "rgb(44, 44, 44)",
      third: "rgb(0, 0, 0)",
      forth: "rgb(208, 208, 208)",
      fifth: "rgb(88, 88, 88)",
      sixth: 'rgb(11, 100, 208)'
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1900px", // Change this value to your desired width
        },
      },
    },
  },
});

export default theme;
