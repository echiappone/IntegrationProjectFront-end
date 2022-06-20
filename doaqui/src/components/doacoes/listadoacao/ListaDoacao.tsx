import { useState, useEffect } from 'react';
import { busca, buscaId } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaDoacao.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Doacoes from '../../../models/Doacao';
import Usuario from '../../../models/Usuario';
import CardMedia from '@mui/material/CardMedia';


function ListaDoacao() {
  
    const [posts, setPosts] = useState<Doacoes[]>([]);
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    const [idOng, setIdOng] = useLocalStorage('id');

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

    return (
        <>
            
            {
                
                posts.map(post => (
                    <Box m={2} >
                        < div className = "Card">
                        <CardMedia
                            component="img"
                            height="140"
                            image= {post.foto}
                        
                            />
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Descricao: "+ post.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Quantidade: "+ post.quantidade}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Validade: "+ post.validade}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Contato: "+ post.contato}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {"Cnpj: "+ post.cnpjDoador}
                                </Typography>
                                
                            </CardContent>
                            <CardActions>
                               
                                        
                                        <div><Button id='Button'>Solicitar doação</Button>
                                        </div>
                                        
                            </CardActions>
                            </div>
                    </Box>
                ))
            }

        </>
    )
}

export default ListaDoacao;