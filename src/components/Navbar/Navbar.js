```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <NavLink to="/">My Portfolio</NavLink>
                </div>
                <div className="navbar__menu">
                    <NavLink to="/aboutme" activeClassName="navbar__link--active">About Me</NavLink>
                    <NavLink to="/portfolio" activeClassName="navbar__link--active">Portfolio</NavLink>
                    <NavLink to="/blog" activeClassName="navbar__link--active">Blog</NavLink>
                    <NavLink to="/contact" activeClassName="navbar__link--active">Contact</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
```