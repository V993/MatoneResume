// src/components/SectionCard.js
import { Typography, CardContent, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import StyledCard from './styled/StyledCard'; // Import the styled card

const SectionCard = ({ title, subtitle, timeframe, bullets, children }) => (
  <StyledCard> {/* Use StyledCard instead of using styles from useCardStyles */}
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
      {timeframe && (
        <Typography variant="subtitle2" color="text.secondary">
          {timeframe}
        </Typography>
      )}
      {bullets && (
        <List dense>
          {bullets.map((bullet, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={`• ${bullet}`} />
            </ListItem>
          ))}
        </List>
      )}
      {children}
    </CardContent>
  </StyledCard>
);

export default SectionCard;
