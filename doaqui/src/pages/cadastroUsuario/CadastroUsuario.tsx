import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from "../../services/Service";
import Usuario from "../../models/Usuario";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import './CadastroUsuario.css';

function CadastroUsuario() {

    return (
        <> <main>
            <div className="box">
                <div className="img-box"></div>
                <div className="form-box">
                    <h2>Criar Conta</h2>
                    <p> Já é um membro? <a href="/doaqui/src/pages/LoginByFabricio/login.html"> Login </a> </p>
                    <form action="#">

                        <div className="input-group">
                            <label htmlFor="nome"> Nome Completo</label>
                            <input type="text" id="nome" placeholder="Digite o seu nome completo" />
                            <div id="txtNome"></div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="CNPJ">CNPJ</label>
                            <input type="CNPJ" id="CNPJ" placeholder="Digite o CNPJ da sua empresa" required />
                            <div id="txtCNPJ"></div>
                        </div>


                        <div className="input-group">
                            <label htmlFor="Telefone">Telefone</label>
                            <input type="Telefone" id="Telefone" placeholder="Digite o Telefone" required />
                            <div id="txtTelefone"></div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="Digite o seu email" required />
                            <div id="txtEmail"></div>
                        </div>

                        <div className="input-group w50">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" placeholder="Digite sua senha" required />
                        </div>

                        <div className="input-group w50">
                            <label htmlFor="Confirmarsenha">Confirmar Senha</label>
                            <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required />
                        </div>

                        <div className="input-group">
                            <button>Cadastrar</button>
                        </div>

                    </form>
                </div>
            </div>
        </main>
        </>
    );
}

export default CadastroUsuario;