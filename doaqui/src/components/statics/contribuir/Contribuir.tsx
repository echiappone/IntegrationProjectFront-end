import React from "react";
import './Contribuir.css';

function Contribuir() {
    return (
        <>
            <main id="quero_doar">
                <header>
                    <h1>Adorei! Quero contribuir.</h1>
                    <h2 id="h2_passos">Quais são meus <span id="span-borda-contribuir">próximos passos?</span></h2>
                </header>
                <section>
                    <article>
                        <img src="https://i.imgur.com/JUCnk5Z.png" alt="Empresa" />
                        <p>
                            Se você é uma EMPRESA ou possui CNPJ e gostaria de fazer uma doação, clique no botão abaixo:
                        </p>
                        <a href="/fazer-doacao">EMPRESA</a>
                    </article>
                    <article>
                        <img src="https://i.imgur.com/Sfyc4ZH.png" alt="Ong" />
                        <p>
                            Se você é uma ONG e gostaria de poder receber doações, clique no botão abaixo:
                        </p>
                        <a href="/cadastro">ONG</a>
                        
                    </article>
                </section>
            </main>
        </>
    );
}

export default Contribuir;