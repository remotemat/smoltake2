```javascript
// Validation utility functions for the contact form

// Function to validate email
export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Function to validate name
export function validateName(name) {
  const re = /^[a-zA-Z\s]*$/;
  return re.test(name);
}

// Function to validate message
export function validateMessage(message) {
  return message.length > 0;
}

// Function to validate the entire form
export function validateForm(formData) {
  const { name, email, message } = formData;
  return validateName(name) && validateEmail(email) && validateMessage(message);
}
```