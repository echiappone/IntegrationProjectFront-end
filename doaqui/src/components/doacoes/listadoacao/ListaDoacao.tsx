import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { busca, buscaId, post } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography, TextField } from '@material-ui/core';
import './ListaDoacao.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import { TokenState } from '../../../store/tokens/tokensReducer';
import Doacoes from '../../../models/Doacao';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';
import Solicitacao from '../../../models/Solicitacao';
import CardMedia from '@mui/material/CardMedia';
import SolicitacaoDTO from '../../../models/SolicitacaoDTO';
import Doacao from '../../../models/Doacao';


function ListaDoacao() {

    let navigate = useNavigate();
    const [posts, setPosts] = useState<Doacoes[]>([]);
    const [token, setToken] = useLocalStorage('token');
    const [idOng, setIdOng] = useLocalStorage('id');

    const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);

    const [solicitacao, setSolicitacao] = useState<SolicitacaoDTO>({
        idONG: parseInt(idOng),
        idDoacao: 0
    });

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        endereco: "",
        cnpj: "",
        tipo: "ONG",
        foto: "",
    });

    useEffect(() => {
        if (token === '') {
            navigate('/login')
        }
        getProfile();
        getPost();
    }, [token])

    async function getPost() {
        await busca("/api/Doacoes/todas", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getProfile() {
        await buscaId(`/api/Usuarios/id/${idOng}`, setUsuario, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getSolicitacoes() {
        await buscaId(`/api/Solicitacoes/id/${idOng}`, setSolicitacoes, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function handleSolicitacao(id: number) {
        console.log(id)
        getSolicitacoes();
        setSolicitacao({
            ...solicitacao,
            idDoacao: id

        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await post('/api/Solicitacoes', solicitacao, setSolicitacao, {
                headers: {
                    'Authorization': token
                }
            });
            
            getPost();

            toast.success('Solicitação concluida com sucesso!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })

        } catch (error) {
            toast.error('Não foi possivel concluir sua soliciatação, tente novamente!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
        }
    }

    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} >
                        <form onSubmit={onSubmit}>
                            <Card variant="outlined">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.foto}
                                    alt="Imagem do produto"
                                />
                                <CardContent>
                                    
                                    <Typography color="textSecondary" gutterBottom>
                                        Doação de:
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        { }
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {"Produto: " + post.titulo}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {"Descrição: " + post.descricao}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {"Validade: " + post.validade}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {"Quantidade: " + post.quantidade}
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
                                            <Button type="submit" variant="contained" size='small' color="primary" onClick={() => handleSolicitacao(post.id)}>
                                                Quero essa doação
                                            </Button>
                                        </Box>
                                    </Box>
                                </CardActions>
                            </Card>
                        </form>
                    </Box>
                ))
            }

        </>
    )
}

export default ListaDoacao;