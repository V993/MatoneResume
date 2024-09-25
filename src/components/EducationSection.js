// src/components/EducationSection.js
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import StyledCard from './styled/StyledCard'; // Import the styled card

function EducationSection() {
  const education = [
    {
      institution: 'Graduate Institution',
      degree: "Master's Degree in Field",
    },
    {
      institution: 'Undergraduate Institution',
      degree: "Bachelor's Degree in Field",
    },
    // Add high school if desired
  ];

  return (
    <Box id="education" sx={{ minHeight: '100vh', padding: 4, scrollSnapAlign: 'start', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {education.map((edu, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5">{edu.institution}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {edu.degree}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EducationSection;
