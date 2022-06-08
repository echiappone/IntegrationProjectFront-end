import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import CadastroDoacoes from './pages/cadastroDoacoes/CadastroDoacoes';
import Doacoes from './pages/doacoes/Doacoes';
import Login from './pages/login/Login';
import Home from "./pages/home/Home"
import './App.css';

import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';



function App() {
  return(
    <Router>
      <Navbar />

        <Routes> // Antigo Switch
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doacoes" element={<Doacoes />} />
          
          <Route path="/cadastroDoacoes" element={<CadastroDoacoes />} />

          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          

        </Routes>

      <Footer />
    </Router>
  );
}

export default App;