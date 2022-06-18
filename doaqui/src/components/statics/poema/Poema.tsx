import React from "react";
import './Poema.css';

function Poema() {
    return (
        <div className="container">
            <div className="aspas">
                <img src="https://www.pensador.com/img/quote.png" alt="Foto do poema"></img>
            </div>
            <div className="Poema">
                <p>Vi ontem um bicho</p>
                <p>Na imundície do pátio<p />
                    <p>Catando comida entre os detritos.</p>
                    <p>Quando achava alguma coisa,</p>
                    <p>Não examinava nem cheirava:</p>
                    <p>Engolia com voracidade.</p>
                    <p>O bicho não era um cão,</p>
                    <p>Não era um gato,</p>
                    <p>Não era um rato.</p>
                    <p> O bicho, meu Deus, era um homem.</p>
                    <h5 className="Autor e título">O Bicho, de Manuel Bandeira.</h5>
                </p>
            </div>
            <div className="Img">
                <img src="https://4.bp.blogspot.com/-PPd-Tq9hQXM/WLvyH9_1-DI/AAAAAAAAU0M/KdxUX4wrvw0ExRl8l6Bc0gUFRpphYTkzgCLcB/s1600/Homem.jpg" alt="Foto do poema"></img>
            </div>
        </div>
    );
}

export default Poema