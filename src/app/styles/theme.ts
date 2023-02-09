import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "Poppins"].join(","),
    subtitle1: {
      fontSize: 18,
      fontFamily: "Poppins",
      fontWeight: "medium",
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: "Poppins",
    },
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
    speaking: {
      light: "#fff9c4",
      main: "#fbc02d",
      dark: "#c49000",
    },
    pronunciation: {
      light: "#FBE5C9",
      main: "#ED9526",
      dark: "#7F4C0A",
    },
    vocabulary: {
      light: "#C5F2C7",
      main: "#2AB930",
      dark: "#155D18",
    },
    grammar: {
      light: "#C5DCFA",
      main: "#1672EC",
      dark: "#0A3977",
    },
    reading: {
      light: "#c5cae9",
      main: "#3f51b5",
      dark: "#002984",
    },
    listening: {
      light: "#ECB9F9",
      main: "#9A0FBF",
      dark: "#4D085F",
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
    grammar: LessonPaletteColor;
    vocabulary: LessonPaletteColor;
    speaking: LessonPaletteColor;
    pronunciation: LessonPaletteColor;
    reading: LessonPaletteColor;
    listening: LessonPaletteColor;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    grammar: LessonColorOptions;
    vocabulary: LessonColorOptions;
    speaking: LessonColorOptions;
    pronunciation: LessonColorOptions;
    reading: LessonColorOptions;
    listening: LessonColorOptions;
  }

  interface LessonColorOptions {
    light: string;
    main: string;
    dark: string;
  }

  interface LessonPaletteColor {
    light: string;
    main: string;
    dark: string;
  }
}

// Update the Button's color prop options
declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    neutral: true;
  }
}

export default theme;
