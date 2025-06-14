"use client";
import { createTheme, darken } from "@mui/material";
const finalTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6F2C6F",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#6F2C6F",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#6F2C6F",
      secondary: "#252428",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
      color: "#6F2C6F",
    },
    h4: {
      fontWeight: 600,
      color: "#252428",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  shape: {
    borderRadius: "16px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "46px",
          height: "64px",
        },
        containedPrimary: {
          backgroundColor: "#6F2C6F",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: darken("#6F2C6F", 0.1),
          },
        },
        outlined: {
          borderColor: "#E5E7EB",
          color: "#6F2C6F",
          "&:hover": {
            borderColor: "#D1D5DB",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#6F2C6F",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#6F2C6F",
          fontWeight: 600,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#252428",
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 36,
          },
        },
      },
    },
  },
});

export default finalTheme;
