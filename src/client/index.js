//src/client/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import { BrowserRouter } from 'react-router-dom';
import App from './App.js'; // Add the file extension .js

// Use createRoot instead of render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
