```javascript
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <p className="footer__copy">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                    <div className="footer__links">
                        <a href="/about" className="footer__link">About</a>
                        <a href="/portfolio" className="footer__link">Portfolio</a>
                        <a href="/contact" className="footer__link">Contact</a>
                    </div>
                </div>
                <div className="footer__animation">
                    {/* Add your funky animation here */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
```