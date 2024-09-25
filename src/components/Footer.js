// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#388E3C', color: '#FFFFFF', py: 2, mt: 4 }}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
