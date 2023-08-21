import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.js';
import Favoritos from './pages/Favoritos.js';
import Login from './pages/Login.js';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
// import Header from './components/header/header.js';

// BrowserRouter, que encapsulará as rotas, permitindo a criação delas
// Routes, que anuncia a presença de rotas
// Route, a rota propriamente dita

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;    
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
