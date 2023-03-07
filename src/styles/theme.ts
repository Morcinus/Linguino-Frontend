import { createTheme } from "@mui/material/styles";

import componentOverrides from "./componentOverrides";

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
      fontWeight: "medium",
    },
    h5: {
      fontSize: 22,
      fontFamily: "Poppins",
      fontWeight: "bold",
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
      background: "#FFF4E3",
      onMain: "#ffffff",
    },
    pronunciation: {
      light: "#FBE5C9",
      main: "#ED9526",
      dark: "#7F4C0A",
      background: "#FFEDD8",
      onMain: "#ffffff",
    },
    vocabulary: {
      light: "#C5F2C7",
      main: "#2AB930",
      dark: "#155D18",
      background: "#E9FFE0",
      onMain: "#ffffff",
    },
    grammar: {
      light: "#C5DCFA",
      main: "#1672EC",
      dark: "#0A3977",
      background: "#E9F6FF",
      onMain: "#ffffff",
    },
    reading: {
      light: "#c5cae9",
      main: "#3f51b5",
      dark: "#002984",
      background: "#DFDDFF",
      onMain: "#ffffff",
    },
    listening: {
      light: "#ECB9F9",
      main: "#9A0FBF",
      dark: "#4D085F",
      background: "#FAE9FF",
      onMain: "#ffffff",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: componentOverrides,
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

  interface LessonPaletteColor {
    light: string;
    main: string;
    dark: string;
    background: string;
    onMain: string;
  }

  interface LessonColorOptions extends LessonPaletteColor {}
}

// Update the Button's color prop options
declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    neutral: true;
    grammar: true;
    vocabulary: true;
    speaking: true;
    pronunciation: true;
    reading: true;
    listening: true;
  }
}

declare module "@mui/material/Fab" {
  interface FabPropsColorOverrides {
    grammar: true;
    vocabulary: true;
    speaking: true;
    pronunciation: true;
    reading: true;
    listening: true;
  }
}

export default theme;
