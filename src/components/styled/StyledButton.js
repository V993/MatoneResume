// src/components/StyledButton.js
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledButton = styled(Button)({
  borderRadius: '50px', // Rounded, pill-shaped button
  padding: '8px 24px',  // Padding to make the button larger
  textTransform: 'none', // Prevent all-uppercase text
  fontWeight: 'bold',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    backgroundColor: '#AEC6CF', // Custom hover background color (Pastel Blue)
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)', // Increase shadow on hover
  },
});

export default StyledButton;
