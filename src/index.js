import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';

// Get the root element from your HTML
const rootElement = document.getElementById("root");

// Create a root and render your app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
