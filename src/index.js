import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/index" element={<App2/>} />
    </Routes>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
