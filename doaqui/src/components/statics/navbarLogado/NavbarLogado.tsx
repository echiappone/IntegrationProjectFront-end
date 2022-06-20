import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from 'react-use-localstorage';
import "./NavbarLogado.css";


const NavbarLogado = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [token, setToken] = useLocalStorage('token');
    const [id, setId] = useLocalStorage('id');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        setId('')
        toast.info('Logout realizado com sucesso!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate('/home')
    }

    return (
        <div className="Navbar">
            <a href="/" className="nav-logo"></a>

            <div className={'nav-items'}>
                <a href="/perfil">Perfil</a>
                <a href="/doacoes">Doações</a>
            </div>
            <div className={'nav-items2'} onClick={goLogout}>
                <a>Logout</a>
            </div>

        </div>
    );
};

export default NavbarLogado;