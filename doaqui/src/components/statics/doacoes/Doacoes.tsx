import React from "react";
import './Doacoes.css';

function Estilo () {
    
}

function Doacoes() {
    
    return (
        <>
            <div className="container">

                <h3 className="title"> Doações </h3>

                <div className="carrosel-imagem">
                </div>

                <div className="products-container">

                    <div className="product" data-name="p-1">
                        <img src="images/1.png" alt=""></img>
                            <h3>Morangos</h3>
                    </div>

                    <div className="product" data-name="p-2">
                        <img src="images/2.png" alt=""></img>
                            <h3>Cebolas</h3>
                    </div>

                    <div className="product" data-name="p-3">
                        <img src="images/3.png" alt=""></img>
                            <h3>Tomates</h3>
                    </div>

                    <div className="product" data-name="p-4">
                        <img src="images/4.png" alt=""></img>
                            <h3>Berinjela</h3>
                    </div>

                    <div className="product" data-name="p-5">
                        <img src="images/5.png" alt=""></img>
                            <h3>Brocolis</h3>
                    </div>

                    <div className="product" data-name="p-6">
                        <img src="images/6.png" alt=""></img>
                            <h3>Batatas</h3>

                    </div>

                </div>

            </div>

            <div className="products-preview">

                <div className="preview" data-target="p-1">
                    <i className="fas fa-times"></i>
                    <img src="images/1.png" alt=""></img>
                        <h3>Morangos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                        <div className="buttons">
                            <a href="#" className="buy">Eu quero</a>

                        </div>
                </div>

                <div className="preview" data-target="p-2">
                    <i className="fas fa-times"></i>
                    <img src="images/2.png" alt=""></img>
                        <h3>Cebolas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                        <div className="buttons">
                            <a href="#" className="buy">Eu quero</a>
                        </div>
                </div>

                <div className="preview" data-target="p-3">
                    <i className="fas fa-times"></i>
                    <img src="images/3.png" alt=""></img>
                        <h3>Tomates</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                        <div className="buttons">
                            <a href="#" className="buy">Eu quero</a>
                        </div>
                </div>

                <div className="preview" data-target="p-4">
                    <i className="fas fa-times"></i>
                    <img src="images/4.png" alt=""></img>
                        <h3>Berinjela</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                        <div className="buttons">
                            <a href="#" className="buy">Eu quero</a>
                        </div>
                </div>

                <div className="preview" data-target="p-5">
                    <i className="fas fa-times"></i>
                    <img src="images/5.png" alt=""></img>
                        <h3>Brocolis</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                        <div className="buttons">
                            <a href="#" className="buy">Eu quero</a>
                        </div>
                </div>

                <div className="preview" data-target="p-6">
                    <i className="fas fa-times"></i>
                    <img src="images/6.png" alt=""></img>
                        <h3>Batatas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                        <div className="buttons">
                            <a href="#" className="buy">Eu quero</a>
                        </div>
                </div>

            </div>
        </>
    );
}

export default Doacoes;