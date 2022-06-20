import React from "react";
import './Carrossel.css';
import { Carousel } from "react-bootstrap";
import './Carrossel.css';

function Carrossel() {
  return (
    <>
      <main id="nossas_acoes">
        <header id="h1_acoes">
          <h1>Nossas ações!</h1>
          <h2 id="h2_acoes">Veja algumas imagens das <span id="span-borda">doações recebidas.</span></h2>
        </header>
      </main>
      
      <div id='div-carrossel'>
        <Carousel id='carrossel'>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/9090903/pexels-photo-9090903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>FOME</h3>
              <p>São 14 milhões de pessoas a mais passando fome no país. Os dados são do 2º Inquérito Nacional sobre insegurança alimentar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8061642/pexels-photo-8061642.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>ONGS</h3>
              <p>Uma organização não governamental (ONG) é um tipo de entidade sem fins lucrativos</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8060302/pexels-photo-8060302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="h3_b" >DOE!</h3>
              <p className="p_b"> Doar é um gesto de amor, multiplique! Amor pela vida! Ajude a resgatar e transformar vidas!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carrossel;
