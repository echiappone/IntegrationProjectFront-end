import Avatar from "@mui/material/Avatar";
import React from "react";
import Footer from '../../components/statics/footer/Footer';
import NavbarIndex from '../../components/statics/navbarIndex/NavbarIndex';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import NavbarErick from '../../components/statics/navbarErick/NavbarErick';
import {TextField, Box, Button} from '@material-ui/core';
import './Perfil.css';

function Perfil() {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <>
            <NavbarErick />
            <div id="perfil-container">
                <div id="perfil-container-left">
                    <div id="perfil-container-left-top">
                        <Avatar id="perfil-avatar"
                            alt="Imagem Usuario"
                            src="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png"
                            variant="circular"
                        />
                        <h1>Nome da ONG</h1>
                    </div>
                    <div id="perfil-container-left-bottom">

                    </div>
                </div>
                <div id="perfil-container-right">
                    <div id="perfil-container-right-top">
                        <h1 className='h1-cima'>Informações</h1>
                        <h1 className='h1-baixo'>Dados ONG</h1>
                        <form>
                            <TextField id='nome' label='Nome da ONG' variant='outlined' name='nome' margin='normal' fullWidth/>
                            <TextField id='cnpj' label='CNPJ' variant='outlined' name='cnpj' margin='normal' fullWidth/>
                            <TextField id='nomePresidente' label='Nome do(a) presidente da ONG' variant='outlined' name='presidente' margin='normal' fullWidth/>
                            <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth/>
                            <TextField id='telefone' label='Telefone' variant='outlined' name='telefone' margin='normal' fullWidth/>
                            <TextField id='endereco' label='Endereço' variant='outlined' name='endereco' margin='normal' fullWidth />
                            <Box id='box-botao-atualizar-dados'>
                                <Button id='botao-atualizar-dados' type='submit'>
                                    <p>Atualizar Dados</p>
                                </Button>
                            </Box>
                        </form>
                        
                    </div>
                    <div id="perfil-container-right-bottom">

                    <h1 className='h1-cima'>Segurança</h1>
                        <h1 className='h1-baixo'>Alterar senha</h1>
                        <form>
                            <TextField id='senhaAtual' label='Senha atual' variant='outlined' name='senhaAtual' margin='normal' fullWidth/>
                            <TextField id='novaSenha' label='Nova senha' variant='outlined' name='novaSenha' margin='normal' fullWidth/>
                            <TextField id='confirmaSenha' label='Confirme a nova senha' variant='outlined' name='confirmaSenha' margin='normal' fullWidth/>
                            <Box id='box-botao-atualizar-senha'>
                                <Button id='botao-atualizar-senha' type='submit'>
                                    <p>Atualizar senha</p>
                                </Button>
                            </Box>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Perfil;
