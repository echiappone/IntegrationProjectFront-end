import React, { useState } from "react";
import useLocalStorage from 'react-use-localstorage';
import "./NavbarErick.css";


const NavbarErick = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <a href="/" className="nav-logo"></a>

            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/home">Home</a>
                <a className="transicao" href="#como_funciona">Como Funciona</a>
                <a href="#nossas_acoes">Nossas Ações</a>
                <a href="#sobre_nos">Sobre Nós</a>
                <a href="/fazer-doacao">Quero Doar</a>
            </div>
            <div className={`nav-items2 ${isOpen && "open"}`}>
                    <a href="/login">Login</a>
                    <a href="/cadastro">Cadastre-se</a>
            </div>
            <div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>

        </div>
    );
};

export default NavbarErick;