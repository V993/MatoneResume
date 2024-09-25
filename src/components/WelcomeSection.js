// src/components/WelcomeSection.js
import React from 'react';
import { Box, Grid, Typography, Chip, Avatar } from '@mui/material';
import id_picture from '../assets/id-picture.jpg'; 
import hf_badge from '../assets/hf.png'
import tulane_badge from '../assets/tulane.png'

function WelcomeSection() {
  const skills = ['Python', 'PyTorch', 'AWS Toolkit', 'C++', 'bash', 'SQL', 'Slurm']; // Add more skills
  const roles = ['Software Developer', 'Research Assistant', "Master's Student"];
  const affiliations = [
    { name: 'Healthfirst', src: hf_badge },
    { name: 'Tulane University', src: tulane_badge },
  ];

  return (
    <Box
      id="welcome"
      sx={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        scrollSnapAlign: 'start'
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Hello, I'm <span style={{ color: '#4CAF50' }}>Leonardo Matone</span>
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to my personal website! 
          </Typography>
          <Typography variant="h5" gutterBottom>
            Technical Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Box>
          <Box sx={{ mt: 2 }}>
            {roles.map((role) => (
              <Chip key={role} label={role} color="secondary" sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            {affiliations.map((affiliation) => (
              <Avatar
                key={affiliation.name}
                alt={affiliation.name}
                src={affiliation.src}
                sx={{ width: 56, height: 56 }}
              />
            ))}
          </Box>
        </Grid>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              alt="Leonardo Matone"
              src={id_picture}
              sx={{ width: 250, height: 250, margin: '0 auto' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WelcomeSection;
