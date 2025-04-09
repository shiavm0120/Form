// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import HOAFeedbackForm from './HOAFeedbackForm';  // Adjust the path if needed

// Render the HOAFeedbackForm component to the root element
ReactDOM.render(
  <React.StrictMode>
    <HOAFeedbackForm /> {/* This is where your form component is rendered */}
  </React.StrictMode>,
  document.getElementById('root') // 'root' is the div where React will render the form
);
