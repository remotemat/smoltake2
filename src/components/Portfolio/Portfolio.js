```javascript
import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is a brief description of Project 1.',
            image: '/public/images/project1.jpg',
            link: '#'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is a brief description of Project 2.',
            image: '/public/images/project2.jpg',
            link: '#'
        },
        // Add more projects as needed
    ];

    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link">Learn More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
```