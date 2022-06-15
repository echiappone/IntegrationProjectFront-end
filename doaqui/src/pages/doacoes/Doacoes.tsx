import React from "react";
import Footer from '../../components/statics/footer/Footer';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import BarraPesquisa from "../../components/statics/barraPesquisa/BarraPesquisa";
import './Doacoes.css';



function Doacoes() {
  return (
    <>
      <NavbarPages />
      <div className="container">
        <BarraPesquisa />
      </div>
      <Footer />
    </>

  )
}

export default Doacoes;