// src/components/StyledCard.js
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  padding: '24px',
  background: 'linear-gradient(180deg, #F5F5F5, #FFFFFF)',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  border: '1px solid #E0E0E0',
  transition: 'box-shadow 0.3s ease, padding 0.3s ease',
  marginBottom: '24px',
  '&:hover': {
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
  },
}));

export default StyledCard;
