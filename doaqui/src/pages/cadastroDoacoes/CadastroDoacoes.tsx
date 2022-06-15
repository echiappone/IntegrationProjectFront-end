import React from "react";
import { Grid, Typography, Button, TextField, Box } from "@material-ui/core";
import { Link } from "react-router-dom"
import "./CadastroDoacoes.css";
import Footer from '../../components/statics/footer/Footer';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';

function CadastroDoacoes() {

    return (
        <>  <NavbarPages />
            <Grid container direction='row' justifyContent="center" alignItems='center' className='img-box'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box padding={10}>
                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar doação</Typography>
                            <TextField id='título' label='título' variant='outlined' name='título' margin='normal' fullWidth />
                            <TextField id='descrição' label='descrição' variant='outlined' name='descrição' margin='normal' fullWidth />
                            <TextField id='E-mail' label='E-mail' variant='outlined' name='E-mail' margin='normal' fullWidth />
                            <TextField id='Cnpj' label='Cnpj' variant='outlined' name='Cnpj' margin='normal' fullWidth />
                            <TextField id='quantidade' label='quantidade' variant='outlined' name='quantidade' margin='normal' fullWidth />
                            <TextField id='validade' label='validade' variant='outlined' name='validade' margin='normal' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/home' className='text-decorator-none'>
                                    <Button type='submit' variant='contained' color='secondary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>

                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default CadastroDoacoes;