import Avatar from "@mui/material/Avatar";
import React from "react";
import Footer from "../../components/statics/footer/Footer";
import { Box, Button } from "@material-ui/core";
import "./Perfil.css";
import NavbarLogado from "../../components/statics/navbarLogado/NavbarLogado";

function Perfil() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <NavbarLogado />
      <div id="perfil-container">
        <div id="perfil-container-left">
          <div id="perfil-container-left-top">
            <Avatar
              id="perfil-avatar"
              alt="Imagem Usuario"
              src="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png"
              variant="circular"
            />
            <h1>Nome da ONG</h1>
          </div>
          <div id="perfil-container-left-bottom"></div>
        </div>
        <div id="perfil-container-right">
          <div id="perfil-container-right-top">
            <h1 className="h1-cima">Informações</h1>
            <h1 className="h1-baixo">Dados ONG</h1>
            <form>
              <div className="input-group-perfil">
                <label> Nome da ONG </label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite o seu nome completo"
                />
                <div id="txtNome"></div>
              </div>

              <div className="input-group-perfil">
                <label>CNPJ</label>
                <input
                  type="CNPJ"
                  id="CNPJ"
                  placeholder="Digite o CNPJ da sua empresa"
                />
                <div id="txtCNPJ"></div>
              </div>

              <div className="input-group-perfil">
                <label> Telefone</label>
                <input
                  type="Telefone"
                  id="Telefone"
                  placeholder="Digite o Telefone"
                />
                <div id="txtTelefone"></div>
              </div>

              <div className="input-group-perfil">
                <label>E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite o seu email"
                />
                <div id="txtEmail"></div>
              </div>

              <div className="input-group-perfil">
                <label>Endereço</label>
                <input
                  type="text"
                  id="Endereco"
                  placeholder="Digite o Endereço"
                />
                <div id="txtEndereco"></div>
              </div>

              <Box id="box-botao-atualizar-dados">
                <Button id="botao-atualizar-dados" type="submit">
                  <p>Atualizar Dados</p>
                </Button>
              </Box>
            </form>
          </div>
          <div id="perfil-container-right-bottom">
            <h1 className="h1-cima">Segurança</h1>
            <h1 className="h1-baixo">Alterar senha</h1>
            <form>

              <div className="input-group-perfil">
                <label> Senha Atual </label>
                <input
                  type="text"
                  id="senhaAtual"
                  placeholder="Digite sua senha atual"
                />
                <div id="txtSenha"></div>
              </div>

              <div className="input-group-perfil">
                <label>Senha</label>
                <input
                  type="Senha"
                  id="novaSenha"
                  placeholder="Digite sua nova senha"
                />
                <div id="txtNovaSenha"></div>
              </div>

              <div className="input-group-perfil">
                <label> Confirmar senha</label>
                <input
                  type="Senha"
                  id="confirmaSenha"
                  placeholder="Confirme sua nova senha"
                />
                <div id="txtConfirmaSenha"></div>
              </div>

              <Box id="box-botao-atualizar-senha">
                <Button id="botao-atualizar-senha" type="submit">
                  <p>Atualizar senha</p>
                </Button>
              </Box>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Perfil;
