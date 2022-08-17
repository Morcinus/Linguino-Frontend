import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
  palette: {
    primary: {
      main: "#62B048",
      light: "#94e277",
      dark: "#2f8019",
      contrastText: "#000000",
    },
    secondary: {
      main: "#f29800",
      light: "#ffc947",
      dark: "#ba6a00",
      contrastText: "#000000",
    },
    neutral: {
      main: "#ffffff",
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
    borderRadius: 24,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "0px 1px 3px 2px rgba(0, 0, 0, .06)" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "0px 1px 3px 2px rgba(0, 0, 0, .1)" },
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

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    neutral: true;
  }
}

export default theme;
