import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Home from "./pages/home/Home"
import './App.css';


function App() {
<<<<<<< HEAD
  return(
    <Router>
      <Navbar />

        <Routes> // Antigo Switch
=======
  return (
    <main id='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
>>>>>>> ab2f69e0d18b02b371f4d44f5a98c596a1550f48
          
        </Routes>
<<<<<<< HEAD

      <Footer />
    </Router>
=======
      </Router>
      <img id='background' src="https://i.imgur.com/vcW2lYW.png" alt="Back" />
    </main>
>>>>>>> ab2f69e0d18b02b371f4d44f5a98c596a1550f48
  );
}

export default App;