import React from 'react';
import ReactDOM from 'react-dom/client';
import Presentation from './Presentation';
import Skills from './Skills';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="mx-14">
      <Presentation />
      <Skills />
    </div>
  </React.StrictMode>
);