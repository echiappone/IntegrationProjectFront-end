import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastroDoacao } from "../../services/Service";
import Doacao from "../../models/Doacao";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import Footer from '../../components/statics/footer/Footer';
import NavbarPages from '../../components/statics/navbarPages/NavbarPages';
import './CadastroDoacoes.css';
import { toast } from 'react-toastify';



function CadastroDoacoes() {

    let navigate = useNavigate();

    const [doacao, setDoacao] = useState<Doacao>(
        {
            id: 0,
            titulo: "",
            contato: "",
            quantidade: "",
            descricao: "",
            validade: "",
            cnpj_Doador: ""
        }
    );

    const [doacaoResultado, setDoacaoResultado] = useState<Doacao>(
        {
            id: 1,
            titulo: "",
            contato: "",
            quantidade: "",
            descricao: "",
            validade: "",
            cnpj_Doador: ""
        }
    );
    
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setDoacao({
            ...doacao,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        cadastroDoacao(`/api/Doacao`, doacao, setDoacaoResultado)
        toast.success('Doação cadastrada com sucesso', {
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

    return (
        
        <>
        <NavbarPages />
                <div id="containerPrincipal">
                    <div id="img-box"> 
                        <img src="https://i.imgur.com/JeIA6aN.png" alt="logo" />
                    </div>
                    <div id="form-box">
                        <h1>DOAQUI</h1>
                        <form onSubmit={onSubmit}>

                            <div className="input-group-doacao">
                                <label htmlFor="titulo"> Titulo da doação </label>
                                <input value={doacao.titulo} type="text" id="titulo" name="titulo" placeholder="Digite o titulo da sua doação" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                                <div id="txtTitulo"></div>
                            </div>

                            <div className="input-group-doacao">
                                <label htmlFor="cnpj"> CNPJ </label>
                                <input value={doacao.cnpj_Doador} type="text" id="cnpj_Doador" name="cnpj_Doador" placeholder="Digite o CNPJ da sua empresa" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                                <div id="txtCPNJ"></div>
                            </div>


                            <div className="input-group-doacao">
                                <label htmlFor="telefone"> Contato</label>
                                <input value={doacao.contato} type="text" id="contato" name="contato" placeholder="Digite o Telefone" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                                <div id="txtTelefone"></div>
                            </div>

                            <div className="input-group-doacao">
                                <label htmlFor="quantidade">Quantidade</label>
                                <input value={doacao.quantidade} type="text" id="quantidade" name="quantidade" placeholder="Digite a quantidade do produto" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                                <div id="txtQuantidade"></div>
                            </div>


                            <div className="input-group-doacao">
                                <label htmlFor="validade"> Validade</label>
                                <input value={doacao.validade} type="date" id="validade" name="validade" placeholder="Digite a validade dessa doação" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                                <div id="txtValidade"></div>
                            </div>

                            <div className="input-group-doacao">
                                <label htmlFor="descricao"> Descrição</label>
                                <input value={doacao.descricao} type="text" id="descricao" name="descricao" placeholder="Digite uma descrição" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                            </div>

                            <div className="input-group-doacao">
                                <button type="submit">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer />
        </> 
    );
}

export default CadastroDoacoes;