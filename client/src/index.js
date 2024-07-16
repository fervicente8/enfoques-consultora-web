import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from '../src/pages/Inicio'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
        <Inicio />
    </React.StrictMode>
  </div>
);

