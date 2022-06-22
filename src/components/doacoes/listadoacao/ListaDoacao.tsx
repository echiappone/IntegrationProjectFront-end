import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { busca, buscaId, post } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography, TextField } from '@material-ui/core';
import './ListaDoacao.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Doacoes from '../../../models/Doacao';
import Usuario from '../../../models/Usuario';
import Solicitacao from '../../../models/Solicitacao';
import CardMedia from '@mui/material/CardMedia';
import SolicitacaoDTO from '../../../models/SolicitacaoDTO';
import Doacao from '../../../models/Doacao';
import { toast } from 'react-toastify';
import HistoricoSolicitacaoDTO from '../../../models/HistoricoSolicitacaoDTO';


function ListaDoacao() {

    let navigate = useNavigate();
    const [posts, setPosts] = useState<Doacoes[]>([]);
    const [token, setToken] = useLocalStorage('token');
    const [idOng, setIdOng] = useLocalStorage('id');

    const [solicitacoes, setSolicitacoes] = useState<HistoricoSolicitacaoDTO[]>([]);

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
        getSolicitacoes();
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
        
        setSolicitacao({
            ...solicitacao,
            idDoacao: id

        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if(solicitacoes.find(sol => sol.doacao.id === solicitacao.idDoacao)){

            toast.error('Você já solicitou essa doação!', {
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
        else{
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
        getSolicitacoes();
    }

    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} >
                        < div className="Card">
                            <form onSubmit={onSubmit}>
                                <Card className='content' variant="outlined">
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={post.foto}
                                        alt="Imagem do produto"
                                    />
                                    <CardContent>

                                        <Typography variant="h5" color="textSecondary" gutterBottom>
                                            {"Produto: " + post.titulo}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            { }
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
                                        <Button type="submit" id='Button' onClick={() => handleSolicitacao(post.id)}>
                                            Quero essa doação
                                        </Button>
                                    </CardActions>
                                </Card>
                            </form>
                        </div>
                    </Box>
                ))
            }

        </>
    )
}

export default ListaDoacao;