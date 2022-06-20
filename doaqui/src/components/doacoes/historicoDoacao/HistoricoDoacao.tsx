import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { busca, buscaId, post } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './HistoricoDoacao.css';
import useLocalStorage from 'react-use-localstorage';
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import { TokenState } from '../../../store/tokens/tokensReducer';
import Doacao from '../../../models/Doacao';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';
import Solicitacao from '../../../models/Solicitacao';
import CardMedia from '@mui/material/CardMedia';
import Doacoes from '../../../models/DoacoesDTO';
import HistoricoSolicitacaoDTO from '../../../models/HistoricoSolicitacaoDTO';


function HistoricoDoacao() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    const [idOng, setIdOng] = useLocalStorage('id');
    const [solicitacoes, setSolicitacoes] = useState<HistoricoSolicitacaoDTO[]>([]);
    
    const [doacao, setDoacao] = useState<Doacao>(
        {
            id: 0,
            titulo: "",
            descricao: "",
            contato: "",
            quantidade: 0,
            validade: "",
            foto: "",
            cnpjDoador: "",
            limite: 0
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

        getSolicitacoes()

    }, [solicitacoes.length])


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
        
        return(
            <>
                {
                    solicitacoes.map(solicitacoes => (
                        <Box m={2} >
                            <div id="Cardsd">
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={solicitacoes.doacao.foto}
                                    alt="Imagem do produto"
                                />
                               
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                    {"Produto: "+ solicitacoes.doacao.titulo}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {"Descrição: "+ solicitacoes.doacao.descricao}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {"Validade: "+ solicitacoes.doacao.validade}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {"Quantidade: "+ solicitacoes.doacao.quantidade}
                                    </Typography>
                                    
                                </CardContent>
                            </div>
                        </Box>
                    ))
                }
            </>
        )
}


export default HistoricoDoacao;