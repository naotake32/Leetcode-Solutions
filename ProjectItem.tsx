import React from 'react';

interface ProjectProps {
    index: number
    title: string
    description: string
}

const ProjectItem: React.FC<ProjectProps> = ({index, title, description})  => {
    return (
        <li key={index}>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

export default ProjectItem;