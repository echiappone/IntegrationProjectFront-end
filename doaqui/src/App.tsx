import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Home from "./pages/home/Home"
import './App.css';


function App() {
  return (
    <main id='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      </Router>
      <img id='background' src="https://i.imgur.com/vcW2lYW.png" alt="Back" />
    </main>
  );
}

export default App;