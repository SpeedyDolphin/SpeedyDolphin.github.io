import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/Placeholder/App';
import HomePage from './Pages/HomePage/HomePage';
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <HashRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/Home"   element={<HomePage/>} />
        <Route path="/temp"   element={<App/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
