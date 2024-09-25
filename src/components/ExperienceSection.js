// src/components/ExperienceSection.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  CardContent,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionCard from './SectionCard';

function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currentJobs = [
    {
      title: 'Backend Developer',
      subtitle: 'Company XYZ',
      timeframe: 'June 2019 - Present',
      bullets: ['Developed RESTful APIs', 'Managed databases', '...'],
    },
    {
      title: 'Research Assistant',
      subtitle: 'University ABC',
      timeframe: 'September 2020 - Present',
      bullets: ['Conducted experiments', 'Published papers', '...'],
    },
  ];

  const pastJobs = ['Intern at Company 123', 'Teaching Assistant at University DEF'];

  return (
    <Box id="experience" sx={{ minHeight: '100vh', padding: 4, scrollSnapAlign: 'start', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} sx={{ width: '70%' }}> {/* Single column, 70% width */}
          {currentJobs.map((job, index) => (
            <SectionCard
              key={index}
              title={job.title}
              subtitle={job.subtitle}
              timeframe={job.timeframe}
              bullets={job.bullets}
            />
          ))}
          <SectionCard
            title="History"
            subtitle={null}
            timeframe={null}
            bullets={null}
          >
            <IconButton
              onClick={handleExpandClick}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List dense>
                {pastJobs.map((job, idx) => (
                  <ListItem key={idx}>
                    <ListItemText primary={`• ${job}`} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </SectionCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExperienceSection;
