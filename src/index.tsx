import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SchemaJSON from './pages/SchemaJSON';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/curl-to-anything" element={<App />} />
        <Route path="/schema-json" element={<SchemaJSON />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
