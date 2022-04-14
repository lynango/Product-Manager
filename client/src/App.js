import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Details from './components/Details';
import Update from './components/Update';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route element={<Home/>} path = "/"/>
            <Route element={<Details/>} path = "/product/:id"/>
            <Route element={<Update/>} path = "/product/edit/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

