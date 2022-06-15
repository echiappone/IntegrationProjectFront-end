import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button, InputBase } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import Usuario from "../../models/Usuario";
import Footer from '../../components/statics/footer/Footer';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import './Login.css';
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from 'react-toastify';
import AutenticarDTO from "../../models/AutenticarDTO";


function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [idOng, setIdOng] = useLocalStorage('id');
    const [cnpjOng, setCnpjOng] = useLocalStorage('cnpj');

    const [dto, setDTO] = useState<AutenticarDTO>(
        {
            email: "",
            senha: ""
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setDTO({
            ...dto,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (token !== '') {
            navigate('/doacoes')
            toast.success('Você já esta logado', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();
        try {
            await login(`/api/Autenticacao`, dto, setToken, setIdOng, setCnpjOng)
            toast.success('Usuário logado com sucesso!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

            navigate("/doacoes")

        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "bottom-right",
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
            <Grid container direction='row' justifyContent='center' alignItems='center' className="gridprincipal">
                <Grid alignItems='center' xs={6}>
                    <Box className="containerPrincipal" paddingX={20} >
                        <form className="form-box" onSubmit={onSubmit}>
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

                            <div className="input-group-login">
                                <label htmlFor="email">E-mail</label>
                                <input value={dto.email} type="email" id="email" name="email" placeholder="Digite o seu email" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                                <div id="txtEmail"></div>
                            </div>

                            <div className="input-group-login">
                                <label htmlFor="senha">Senha</label>
                                <input value={dto.senha} type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                            </div>

                            <Box marginTop={2} textAlign='center' className="input-group-login">
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Box>

                            <Box display='flex' justifyContent='center' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' gutterBottom align='center' className='label1'>Não tem uma conta?</Typography>
                                </Box>
                                <Link to='/cadastro'>
                                    <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                                </Link>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid xs={6} className='imagem'></Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default Login;
