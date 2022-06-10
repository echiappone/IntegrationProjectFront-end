import Avatar from "@mui/material/Avatar";
import React, { ChangeEvent, useEffect, useState } from "react";
import Footer from '../../components/statics/footer/Footer';
import NavbarIndex from '../../components/statics/navbarIndex/NavbarIndex';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import NavbarErick from '../../components/statics/navbarErick/NavbarErick';
import {TextField, Grid, Box, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Perfil.css';

function Perfil() {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <>
            
            <div id="perfil-container">
                <div id="perfil-container-left">
                    <div id="perfil-container-left-top">
                        <Avatar id="perfil-avatar"
                            alt="Imagem Usuario"
                            src=""
                        />
                        <h1>Nome da ONG</h1>
                    </div>
                    <div id="perfil-container-left-bottom">

                    </div>
                </div>
                <div id="perfil-container-right">
                    <div id="perfil-container-right-top">
                        <h1>Informações</h1>
                        <h1>Dados ONG</h1>
                        <form>
                            <TextField id='nome' label='Nome da ONG' variant='outlined' name='nome' margin='normal' fullWidth/>
                            <TextField id='cnpj' label='CNPJ' variant='outlined' name='cnpj' margin='normal' fullWidth/>
                            <TextField id='nomePresidente' label='Nome do(a) presidente da ONG' variant='outlined' name='presidente' margin='normal' fullWidth/>
                            <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth/>
                            <TextField id='telefone' label='Telefone' variant='outlined' name='telefone' margin='normal' fullWidth/>
                            <TextField id='endereco' label='Endereço' variant='outlined' name='endereco' margin='normal' fullWidth />
                            <Box>
                                <Button id='buttonUpdate' type='submit'>
                                    Atualizar
                                </Button>
                            </Box>
                        </form>
                        
                    </div>
                    <div id="perfil-container-right-bottom">

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Perfil;
