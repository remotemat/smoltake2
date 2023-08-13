```javascript
import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <div className="bio">
                <p>Hi, I'm [Your Name]. I'm a web developer with a passion for creating sleek, funky, and cool websites. I specialize in React and have experience with various modern web technologies.</p>
                <img src="path-to-your-photo" alt="Your Name" />
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <div className="skill">
                    <p>React</p>
                    <div className="progress-bar">
                        <div className="progress" style={{width: '90%'}}></div>
                    </div>
                </div>
                {/* Add more skills as needed */}
            </div>
        </div>
    );
};

export default AboutMe;
```