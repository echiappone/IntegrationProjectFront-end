import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import Usuario from "../../models/Usuario";
import Footer from '../../components/statics/footer/Footer';
import NavbarIndex from '../../components/statics/navbarIndex/NavbarIndex';
import NavbarErick from '../../components/statics/navbarErick/NavbarErick';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import './Login.css';

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [idCriador, setIdCriador] = useLocalStorage('id');

    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            telefone: "",
            endereco: "",
            tipo: "NORMAL"
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        try {

            await login(`/api/Usuarios/logar`, usuario, setToken, setIdCriador);

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    useEffect(() => {

        if (token !== '') {
            navigate('/home');
        }

    }, [token, navigate]);

    return (
        /*tem que adicionar o navbar*/
        <>
        
             <div className="containerPrincipal">
                <div className="box">
                    <div className="img-box">
                        / <img src={'#'} alt="logo" /> aqui nesse campo vai o logo/
                    </div>
                    <div className="form-box">
                        <h2>Login</h2>
                        <form action="#">
                            <div className="input-group">
                                <label>E-mail</label>
                                <input type="email" id="email" placeholder="Digite o seu email" />
                                <div id="txtEmail"></div>
                            </div>
                            <div className="input-group w50">
                                <label>Senha</label>
                                <input type="password" id="senha" placeholder="Digite sua senha" />
                            </div>
                            <div className="input-group">
                                <button>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
