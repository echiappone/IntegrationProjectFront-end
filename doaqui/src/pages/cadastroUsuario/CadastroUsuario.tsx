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
            <NavbarErick />
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                            <TextField
                                value={usuario.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />

                            <TextField
                                value={usuario.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='email' label='email' variant='outlined' name='email' margin='normal' type='email' fullWidth />

                            <TextField
                                value={usuario.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />


                            <TextField
                                value={confirmarSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                            <TextField
                                value={usuario.telefone}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='telefone' label='telefone' variant='outlined' name='telefone' margin='normal' fullWidth />


                            <FormControl
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                variant="outlined">
                                <InputLabel htmlFor="outlined-age-native-simple">tipo</InputLabel>
                                <Select
                                    value={usuario.tipo}
                                    native
                                    label="tipo"
                                    inputProps={{
                                        name: 'tipo',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value="NORMAL">NORMAL</option>
                                    <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                </Select>
                            </FormControl>

                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Box marginY={2} textAlign='center'>
                                    <Link to='/login' className='text-decorator-none'>
                                        <Button variant='outlined' className='btnCancelar'>
                                            Cancelar
                                        </Button>
                                    </Link>
                                </Box>
                                <Box marginY={2} textAlign='center'>
                                    <Button type='submit' variant='contained' color='primary'>
                                        Cadastrar
                                    </Button>
                                </Box>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default CadastroUsuario;