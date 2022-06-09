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
      
    </main>
  );
}

export default App;