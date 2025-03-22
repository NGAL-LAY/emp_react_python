import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import wallpaper from './assets/images/wallpaper.jpg';

// Get the root element from your HTML
const rootElement = document.getElementById("root");

rootElement.style.background = `url(${wallpaper}) no-repeat center center/cover`;

// Create a root and render your app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
