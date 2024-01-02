import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import App from './App.jsx'
import './index.css';
import {
  saveCustomPackageToLocalStorage,
  saveItemsToLocalStorage,
  saveProductsToLocalStorage,
} from './data/index.js';

saveProductsToLocalStorage();
saveItemsToLocalStorage();
saveCustomPackageToLocalStorage();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
