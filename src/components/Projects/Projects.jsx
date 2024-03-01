import React from 'react'
import { projects } from '../data/projects'
import '../Projects/Projects.css'
import ProjectCard from '../ProjectCards/ProjectCards'

const Projects = () => {
  return (
    <div className='Container' id='projects'>
      <div className='Wrapper'>
        <div className='Projects'>Projects</div>
        <div className='Desc'>
          I have worked on a wide range of projects, they are:
        </div>
          <br />
        </div>
        <div className='CardContainer'>
          {projects
          .map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>

  )
}

export default Projects