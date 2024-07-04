import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import App from './App';
import { ApiProvider } from 'context/apiContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </ApiProvider>
  </React.StrictMode>
);
