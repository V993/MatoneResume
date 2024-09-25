// src/components/ProjectsSection.js
import { Box, Typography, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SectionCard from './SectionCard';
import StyledButton from './styled/StyledButton';

function ProjectsSection() {
  const projects = [
    {
      id: 'project-one',
      title: 'Project One',
      description: 'Description of Project One.',
    },
    {
      id: 'project-two',
      title: 'Project Two',
      description: 'Description of Project Two.',
    },
  ];

  return (
    <Box id="projects" sx={{ minHeight: '100vh', padding: 4, scrollSnapAlign: 'start', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} sx={{ width: '70%' }}> {/* Single column, 70% width */}
          {projects.map((project, index) => (
            <SectionCard
              key={index}
              title={project.title}
              subtitle={null}
              timeframe={null}
              bullets={null}
            >
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <StyledButton component={RouterLink} to={`/projects/${project.id}`}>
                View Project
              </StyledButton>
            </SectionCard>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectsSection;
