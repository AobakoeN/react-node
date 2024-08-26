import React from 'react'

const Projects = () => {
  return (
    <div className="projects">
    <div className="project">
      <div className="project-image">
        <img src="/path/to/project-image.jpg" alt="Project 1" />
      </div>
      <div className="project-details">
        <h2>Project Title</h2>
        <p>This is a brief description of the project, highlighting key features and what it aims to accomplish.</p>
        <a href="/path/to/project.pdf" target="_blank" rel="noopener noreferrer" className="read-more">
          Read More
        </a>
      </div>
    </div>
    {/* Repeat .project block for additional projects */}
  </div>
  )
}

export default Projects

