import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/vendor/normalize.css';
import '../src/vendor/fonts/font.css'
import App from '../src/components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);