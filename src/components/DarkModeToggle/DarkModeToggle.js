```javascript
import React, { useContext } from 'react';
import { ThemeContext } from '../../App.js';
import './DarkModeToggle.scss';

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode-toggle">
            <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;
```