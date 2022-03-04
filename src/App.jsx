import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/add" element={<AddProduct/>}></Route>
          <Route path="/update" element={<UpdateProduct/>}></Route>
          <Route path="/register" element={<Register/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
