import React, {useState, useEffect} from 'react';
import {ProjectItem} from './Components/ProjectItem';

interface Project {
    title: string;
    description: string;
}

const App: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([
        {title: 'Project 1', description: 'テストプロジェクト１'},
        {title: 'Project 2', description: 'テストプロジェクト２'},
        {title: 'Project 3', description: 'テストプロジェクト3'},
    ]);

    useEffect(() => {
        projects.forEach((project) => {
            if(project.description.length > 200) {
                console.log('Invalid because description is too long');
            }else if (project.description.length < 10) {
                console.log('Invalid because description is too short');
            }
    }, []));

    return (
        <div>
            <h1>Project List</h1>
            <ul>
                {projects.map((project,index) => (
                    <ProjectItem key={index} title={project.title} description={project.description} />
                ))}
            </ul>
        </div>
    )
}

export default App;
