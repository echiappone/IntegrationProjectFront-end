import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario"
import './App.css';
import CadastroDoacoes from './pages/cadastroDoacoes/CadastroDoacoes';
import Login from './pages/login/Login';
import Doacoes from './pages/doacoes/Doacoes';
import ListaDoacao from './components/doacoes/listadoacao/ListaDoacao';
import DeletarDoacao from './components/doacoes/deletarDoacao/DeletarDoacao';
import { Provider } from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Perfil from './pages/meuPerfil/Perfil';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<CadastroUsuario />} />
          <Route path='/fazer-doacao' element={<CadastroDoacoes />} />
          <Route path='/login' element={<Login />} />
          <Route path='/doacoes' element={<Doacoes />} />
          <Route path="/listaDoacoes" element={<ListaDoacao />} />
          <Route path="/deletarDoacao/:id" element={<DeletarDoacao />} />
          <Route path='/meuPerfil' element={<Perfil />}/>

        </Routes>
      </Router>
      </Provider>

  );
}

export default App;