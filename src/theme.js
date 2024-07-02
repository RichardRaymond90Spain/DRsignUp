import { createTheme } from '@mui/material/styles';

// Custom color theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#5D662B', // Your green color
    },
    secondary: {
      main: '#725944', // Your brown color
    },
    background: {
      default: '#D7C59C', // Your beige color
    },
    // Add other colors similarly
  },
});

export default theme;
