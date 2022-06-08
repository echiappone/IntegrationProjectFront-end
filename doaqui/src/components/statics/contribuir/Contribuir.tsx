import React from "react";
import './Contribuir.css';

function Contribuir() {
    return (
        <>
            <main id="quero_doar">
                <header>
                    <h1>Adorei! Quero contribuir</h1>
                    <h1 id="passos">Quais são meus proximos passos?</h1>
                </header>
                <section>
                    <article>
                        <img src="https://i.imgur.com/JUCnk5Z.png" alt="Empresa" />
                        <p>
                            Se você é uma EMPRESA ou possui CNPJ e gostaria de fazer uma doação, clique no botão abaixo:
                        </p>
                        <a href="">EMPRESA</a>
                    </article>
                    <article>
                        <img src="https://i.imgur.com/Sfyc4ZH.png" alt="" />
                        <p>
                            Se você é uma ONG e gostaria de poder receber doações, clique no botão abaixo:
                        </p>
                        <a href="">ONG</a>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Contribuir;