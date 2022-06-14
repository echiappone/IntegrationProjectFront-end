import React from "react";
import { Carousel } from "react-bootstrap";

function Carrossel() {
  return (
    <>
      <main id="como_funciona">
        <header id="banner_title">
          <h1>Como nós fazemos</h1>
          <h2 id="h2_acontecer">isso <span id="span-borda-fazemos">acontecer?</span></h2>
        </header>
        <section id="banner_img">
          <img src="https://i.imgur.com/PNN4A1e.png" alt="Fazemos" />
        </section>
      </main>
      
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/9090903/pexels-photo-9090903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8061642/pexels-photo-8061642.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8060302/pexels-photo-8060302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Carrossel