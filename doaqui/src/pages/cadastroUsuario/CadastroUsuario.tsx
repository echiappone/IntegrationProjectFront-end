import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from "../../services/Service";
import Usuario from "../../models/Usuario";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import Footer from '../../components/statics/footer/Footer';
import NavbarIndex from '../../components/statics/navbarIndex/NavbarIndex';
import NavbarErick from '../../components/statics/navbarErick/NavbarErick';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            telefone: "",
            endereco: "",
            cnpj: 0,
            tipo: ""
        }
    );

    const [usuarioResultado, setUsuarioResultado] = useState<Usuario>(
        {
            id: 1,
            nome: "",
            email: "",
            senha: "",
            telefone: "",
            endereco: "",
            cnpj: 0,
            tipo: ""
        }
    );

    useEffect(() => {

        if (usuarioResultado.id === 0) {
            navigate('/login');
        }

    }, [usuarioResultado, navigate]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        if (confirmarSenha === usuario.senha) {
            try {
                await cadastroUsuario(`/api/Usuarios/cadastrar`, usuario, setUsuarioResultado)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert('Usuario já cadastrado, tente outro email!')
            }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <>
            <div className="containerPrincipal">
                <div className="img-box"> /*tem que adicionar o logo */
                </div>
                <div className="form-box">
                    <h2>Criar Conta</h2>
                    <p> Já é um membro? <a href="Login/login.html"> Login </a> </p>
                    <form action="#">

                        <div className="input-group">
                            <label> Nome da ONG </label>
                            <input type="text" id="nome" placeholder="Digite o seu nome completo" />
                            <div id="txtNome"></div>
                        </div>

                        <div className="input-group">
                            <label>CNPJ</label>
                            <input type="CNPJ" id="CNPJ" placeholder="Digite o CNPJ da sua empresa" />
                            <div id="txtCNPJ"></div>
                        </div>


                        <div className="input-group">
                            <label> Telefone</label>
                            <input type="Telefone" id="Telefone" placeholder="Digite o Telefone" />
                            <div id="txtTelefone"></div>
                        </div>

                        <div className="input-group">
                            <label>E-mail</label>
                            <input type="email" id="email" placeholder="Digite o seu email" />
                            <div id="txtEmail"></div>
                        </div>

                        <div className="input-group w50">
                            <label> Senha</label>
                            <input type="password" id="senha" placeholder="Digite sua senha" />
                        </div>

                        <div className="input-group w50">
                            <label> Confirmar Senha</label>
                            <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" />
                        </div>

                        <div className="input-group">
                            <button>Cadastrar</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    );
}

export default CadastroUsuario;