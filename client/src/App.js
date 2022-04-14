import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Details from './components/Details';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route element={<Home/>} path = "/"/>
            <Route element={<Details/>} path = "/product/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

