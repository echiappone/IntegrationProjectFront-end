import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import CardDoacoes from "../../components/statics/cardDoacoes/CardDoacoes";
import Footer from '../../components/statics/footer/Footer';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';

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
      <CardDoacoes />
      <Footer />
    </>

  )
}

export default Doacoes;