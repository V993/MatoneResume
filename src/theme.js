// src/theme.js
import { createTheme } from '@mui/material/styles';
import { teal, amber } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
          main: '#AEC6CF', // Pastel Blue
        },
        secondary: {
          main: '#FDFD96', // Pastel Yellow
        },
        background: {
          default: '#F5F5F5', // Light background
        },
        text: {
          primary: '#333333',
        },
      },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    // Use the new variants
    MuiButton: {
      defaultProps: {
        variant: 'contained', // Use the 'contained' variant as default
      },
    },
  },
});

export default theme;
