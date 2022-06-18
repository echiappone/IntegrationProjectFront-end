import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState, ChangeEvent } from "react";
import Footer from "../../components/statics/footer/Footer";
import { Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Perfil.css";
import NavbarLogado from "../../components/statics/navbarLogado/NavbarLogado";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { buscaId, put } from "../../services/Service";
import { toast } from "react-toastify";
//import base64 from 'react-native-base64'

function Perfil() {

  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token');

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


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
  }

  async function getProfile() {
    await buscaId(`/api/Usuarios/id/${idOng}`, setUsuario, {
      headers:{
        'Authorization': token
      }
    } )
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if(usuario.foto !== "" && usuario.telefone !== "" && usuario.endereco !== "" && usuario.nome !== "")
    {
        await put(`/api/Usuarios`, usuario, setUsuario, 
        {
          header:{
            'Authorization': token
          }
        })
        toast.success('Usuario cadastrado com sucesso', {
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
    else
    {
        toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
              src={usuario.foto}
              variant="circular"
            />
            <h1>{usuario.nome}</h1>
          </div>
          <div id="perfil-container-left-bottom"></div>
        </div>
        <div id="perfil-container-right">
          <div id="perfil-container-right-top">
            <h1 className="h1-cima">Informações</h1>
            <h1 className="h1-baixo">Dados ONG</h1>
            <form onSubmit={onSubmit}>
            <div className="input-group-perfil">
                <label>CNPJ</label>
                <input
                  type="text"
                  id="cnpj"
                  value={usuario.cnpj}
                  disabled={true}
                />
                <div id="txtCNPJ"></div>
              </div>

            <div className="input-group-perfil">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={usuario.email}
                  disabled={true}
                />
                <div id="txtEmail"></div>
              </div>

              

              <div className="input-group-perfil">
                <label htmlFor="nome"> Nome da ONG </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite o seu nome completo"
                  value={usuario.nome}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}

                />
                <div id="txtNome"></div>
              </div>



              <div className="input-group-perfil">
                <label htmlFor="telefone"> Telefone</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  placeholder="Digite o Telefone"
                  value={usuario.telefone}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                />
                <div id="txtTelefone"></div>
              </div>

              

              <div className="input-group-perfil">
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="Digite o Endereço"
                  value={usuario.endereco}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}

                />
                <div id="txtEndereco"></div>
              </div>

              <div className="input-group-perfil">
                <label htmlFor="foto">Foto</label>
                <input
                  type="text"
                  id="foto"
                  name="foto"
                  placeholder="Digite a URL da imagem"
                  value={usuario.foto}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}

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
