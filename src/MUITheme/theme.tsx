import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: '#FFCF4B',
      light: '#FFC422',
    },
    secondary: {
      main: '#FFBB00',
      light: '#CEC6C6',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#263238',
      secondary: '#65624C',
    },
  },
  typography: {
    h1: {
      fontSize: 58,
      fontFamily: 'Inter',
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#263238"
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#263238"
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#263238"
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#263238"
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.1,
      color: "#263238"
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#263238"
    },
    subtitle1: {
      fontSize: 20,
    },
    body1: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.1,
    },
  },
});