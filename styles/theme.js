import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
  palette: {
    primary: {
      main: "#252526",
      light: "#62727b",
      dark: "#102027",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7cad3e",
      light: "#aedf6d",
      dark: "#4a6c2f",
      contrastText: "#000000",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
    error: {
      light: "#ff4d4d",
      main: "#ff1a1a",
      dark: "#e60000",
      contrastText: "#fff",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "0px 1px 3px 2px rgba(0, 0, 0, .06)" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#eeeeee",
          },
        },
      },
    },
  },
});

export default theme;
