import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Put any other imports below so that CSS from your components takes precedence over default styles.
// import './assets/css/style.css';
// import './assets_website/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);