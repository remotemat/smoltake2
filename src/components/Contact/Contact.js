```javascript
import React, { useState } from 'react';
import './Contact.scss';
import { validateEmail, validateName, validateMessage } from '../../utils/validation';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (event, validationFunc, setterFunc) => {
    const { value } = event.target;
    setterFunc(value);
    setErrors({ ...errors, [event.target.name]: validationFunc(value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.name && !errors.email && !errors.message) {
      // Submit form
    }
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleInputChange(e, validateName, setName)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e, validateEmail, setEmail)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => handleInputChange(e, validateMessage, setMessage)}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
```