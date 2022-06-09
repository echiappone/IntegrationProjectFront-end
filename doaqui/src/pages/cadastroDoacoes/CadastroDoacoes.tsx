import React from "react";
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom"
import "./CadastroDoacoes.css";

function CadastroDoacoes() {
    return (
        <div className="box">
            <div className="img-box">
                
            </div>
            <div className="form-box">
                <h2>Cadastrar doação</h2>

                <form action="#">

                    <div className="input-group">
                        <label htmlFor="título"> Título</label>
                        <input type="text" id="título" placeholder="Título do produto" />
                        <div id="txtTítulo"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="descricao">Descrição</label>
                        <input type="descricao" id="descricao" placeholder="Descrição do produto" />
                        <div id="txtDescricao"></div>
                    </div>


                    <div className="input-group">
                        <label htmlFor="Cnpj">Cnpj</label>
                        <input type="Cnpj" id="Cnpj" placeholder="Informe seu Cnpj" />
                        <div id="txtCnpj"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite o seu email" required />
                        <div id="txtEmail"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="Quantidade">Quantidade</label>
                        <input type="txtQuantidade" id="Quantidade" placeholder="Informe a quantidade de produtos" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Validade">Validade</label>
                        <input type="txtValidade" id="Validade" placeholder="Informe a validade do produto" required />
                    </div>

                    <div className="btnCancelar">
                        <Link to='/home' className='text-decorator-none'>
                            <Button type='submit' variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                        </Link>
                        <Button type='submit' variant='contained' color='primary'>
                            Cadastrar
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CadastroDoacoes;