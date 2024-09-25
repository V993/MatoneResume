// src/data/projects.js
export const projects = [
    {
      id: 'project-one',
      title: 'Project One',
      description: 'Short description',
      fullDescription: 'Detailed description of Project One.',
      image: 'project1.png',
    },
    // Add more projects
  ];
  
export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
  