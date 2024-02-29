import React from 'react'
import '../Cards/ProjectCards.css'
import {Card, Image} from 'react-bootstrap'

const ProjectCards = ({project}) => {
    return (
        <Card className='Card'>
            <Image className='Image' src={project.image}/>
            <div className='Tags'>
                {project.tags.map((tag, index) => (
                <div className='Tag'>{tag}</div>
                ))}
            </div>
            <div className='Details'>
                <div className='Title'>{project.title}</div>
                <div className='Description'>{project.description}</div>
            </div>
            {/* <button className='Project'>View Project</button> */}
        </Card>
    )
}

export default ProjectCards