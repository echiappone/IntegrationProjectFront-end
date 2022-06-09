import React, { useState } from "react";
import "./NavbarErick.css";
const NavbarErick = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo">DOAQUI</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/home">Home</a>
                <a href="/about">Como Funciona</a>
                <a href="/service">Quero Doar</a>
                <a href="/contact">Nossas Ações</a>
                <a href="/contact">Sobre Nós</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default NavbarErick;