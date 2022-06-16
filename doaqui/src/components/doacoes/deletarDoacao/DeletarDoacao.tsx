import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarDoacao.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Doacao from '../../../models/Doacao';
import { buscaId, deleteId } from '../../../services/Service';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarDoacao() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [doacao, setDoacoes] = useState<Doacao>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/api/Doacoes/id/${id}`, setDoacoes, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/doacoes')
        deleteId(`/api/Doacoes/deletar/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Doacao deletada com sucesso');
    }

    function nao() {
        navigate('/doacoes')
    }
    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Doacao:
                            </Typography>
                            <Typography color="textSecondary" >
                                {doacao?.descricaoDoacao}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarDoacao;