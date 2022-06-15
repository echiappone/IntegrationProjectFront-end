import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaDoacao.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import { TokenState } from '../../../store/tokens/tokensReducer';
import Doacao from '../../../models/Doacao';
import { toast } from 'react-toastify';

function ListaDoacao() {
    
    const [posts, setPosts] = useState<Doacao[]>([]);
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    async function getPost() {
        await busca("/api/Doacao/todas", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
        
            {
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Doação de:
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Produto: "+ post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Descrição: "+ post.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Validade: "+ post.validade}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Quantidade: "+ post.quantidade}
                                </Typography>
                                
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="inherit" >
                                                Mais informações
                                            </Button>
                                        </Box>

            
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="primary">
                                                Quero essa doação
                                            </Button>
                                        </Box>

                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }

        </>
    )
}

export default ListaDoacao;