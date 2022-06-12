import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from "../../services/Service";
import Usuario from "../../models/Usuario";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import Footer from '../../components/statics/footer/Footer';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

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
        e.preventDefault()
        if(confirmarSenha == usuario.senha){
        cadastroUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResultado)
        toast.success('Usuario cadastrado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        }
    }

    return (
        <>  
            <NavbarPages />
            <div id="containerPrincipal">
                <div id="img-box"> 
                    <img src="https://i.imgur.com/JeIA6aN.png" alt="logo" />
                </div>
                <div id="form-box">
                    <h1>Criar Conta</h1>
                    <p> Já é um membro? <a href="/login"> Login </a> </p>
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


                        <div className="input-group">
                            <label> Endereço</label>
                            <input type="Endereco" id="Endereco" placeholder="Digite o Endereço" />
                            <div id="txtEndereco"></div>
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
            <Footer />
        </>
    );
}

export default CadastroUsuario;