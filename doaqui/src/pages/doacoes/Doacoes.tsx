import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import DeletarDoacao from "../../components/doacoes/deletarDoacao/DeletarDoacao";
import ListaDoacao from "../../components/doacoes/listadoacao/ListaDoacao";
import ModalDoacao from "../../components/doacoes/modalDoacao/ModalDoacao";
import TabDoacao from "../../components/doacoes/tabdoacao/TabDoacao";
import CardDoacoes from "../../components/statics/cardDoacoes/CardDoacoes";
import Footer from '../../components/statics/footer/Footer';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import BarraPesquisa from "../../components/statics/barraPesquisa/BarraPesquisa";
import './Doacoes.css';



function Doacoes() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if (token === '') {
        navigate('/login')
    }
}, [token])

  return (
    <>
      <NavbarPages />
      <TabDoacao />
      <Footer />
    </>

  )
}

export default Doacoes;