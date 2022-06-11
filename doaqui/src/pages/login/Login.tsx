import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button, InputBase } from '@material-ui/core';
import { borders } from '@material-ui/system';
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
        <>
            <NavbarErick />
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Login</Typography>

                            {/* ****ANTIGO EMAIL****
                            
                            <TextField className="input-group"
                                value={usuario.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                label='email' variant='outlined' name='email' margin='normal' fullWidth />
                            */}

                            {/* ****ANTIGA SENHA****

                            <TextField className="input-group"
                                value={usuario.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                            */}

                            <div className="input-group" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}>
                                <label>E-mail</label>
                                <input type="email" id="email" placeholder="Digite o seu email" />
                                <div id="txtEmail"></div>
                            </div>

                            <div className="input-group w50" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}>
                                <label>Senha</label>
                                <input type="password" id="senha" placeholder="Digite sua senha" />
                            </div>
                            
                            <Box marginTop={2} textAlign='center' className="input-group">
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Box>
                        </form>
                        
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' className='label1'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} className='imagem'></Grid>
            </Grid>
            <Footer />


        {/*
            <NavbarErick />


            <div className="containerPrincipal">

            
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
            <Footer />
            */}
        </>
    );
}
export default Login;
