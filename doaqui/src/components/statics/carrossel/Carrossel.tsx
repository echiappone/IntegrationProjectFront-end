import React from "react";
import './Carrossel.css';
import { Carousel } from "react-bootstrap";


function Carrossel() {
  return (
    <>
      <div>
        <div id="banner_title">
          <h1>Nossas ações!</h1>
          <h2 id="h2_doações_recebidas">Veja algumas imagens das <span id="span-borda-fazemos">doações recebidas.</span></h2>
        </div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/9090903/pexels-photo-9090903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8061642/pexels-photo-8061642.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8060302/pexels-photo-8060302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carrossel