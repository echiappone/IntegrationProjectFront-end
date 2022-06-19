import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { busca, buscaId, post } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
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
    
    const [posts, setPosts] = useState<Doacoes[]>([]);
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    const [idOng, setIdOng] = useLocalStorage('id');
    const [solicitacoes, setSolicitacoes] = useState<SolicitacaoDTO[]>([]);
    
    const [doacao, setDoacao] = useState<Doacao>(
        {
            id: 0,
            titulo: "",
            descricao: "",
            contato: "",
            quantidade: 0,
            validade: "",
            foto: "",
            cnpjDoador: ""
        }
    );

    const [solicitacao, setSolicitacao] = useState<Solicitacao>({
        id: 0,
        idONG: 0,
        idDoacao: 0
    });

    const [fazerSolicitacao, setFazerSolicitacao] = useState<Solicitacao>({
        id: 1,
        idONG: 0,
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
      }, [token])

    useEffect(() => {

        getPost()

    }, [posts.length])

    useEffect(() => {

        getSolicitacoes()

    }, [solicitacoes.length])

    async function getPost() {
        await busca("/api/Doacoes/todas", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getProfile() {
        await buscaId(`/api/Usuarios/id/${idOng}`, setUsuario, {
          headers:{
            'Authorization': token
          }
        } )
      }

    async function getSolicitacoes() {
        await buscaId(`/api/Solicitacoes/id/${idOng}`, setSolicitacoes, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function handleSolicitacao(postagem: Doacoes) {
            getSolicitacoes();
            setSolicitacao({
                ...solicitacao,
                idDoacao: postagem.id,
                idONG: parseInt(idOng)
            }) 

            if(solicitacoes.find(sol => sol.doacao.id === postagem.id)){
                
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
                try{

                    await post("/api/Solicitacoes", solicitacao, setFazerSolicitacao, {
                        headers:{
                            'Authorization': token
                        }
                    });
                    toast.success('Solicitação concluida com sucesso!', {
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
                catch(error){
                    toast.error('Não foi possivel concluir sua solicitação, tente novamente!', {
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
      }

    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} >
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
                                            <Button variant="contained" size='small' color="primary" onClick={() => handleSolicitacao(post)}>
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