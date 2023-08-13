```javascript
import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1 className="headline">Hello, I'm [Your Name]</h1>
                <p className="subheadline">I'm a full-stack developer specialized in React.</p>
                <div className="cta-buttons">
                    <button className="cta-about">About Me</button>
                    <button className="cta-portfolio">My Portfolio</button>
                </div>
            </section>
            <section className="intro">
                <img src="/public/images/your-photo.jpg" alt="Your Name" className="intro-photo" />
                <p className="intro-text">I have been working in the tech industry for over X years. I love creating sleek, funky, and cool websites that stand out from the norm.</p>
            </section>
        </div>
    );
}

export default Home;
```