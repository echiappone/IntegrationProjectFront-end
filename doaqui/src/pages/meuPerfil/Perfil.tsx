import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState, ChangeEvent } from "react";
import Footer from "../../components/statics/footer/Footer";
import { AppBar, Button, Tab, Tabs } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Perfil.css";
import NavbarLogado from "../../components/statics/navbarLogado/NavbarLogado";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { buscaId, put } from "../../services/Service";
import { toast } from "react-toastify";
import AtualizarUsuarioDTO from "../../models/AtualizarUsuarioDTO";
import AtualizarSenhaUsuarioDTO from "../../models/AtualizarSenhaUsuarioDTO";
import { Search } from "@material-ui/icons";
import { TabContext, TabPanel } from '@material-ui/lab';
import AutenticarUsuarioSenhaDTO from "../../models/AutenticarUsuarioSenhaDTO";
import HistoricoDoacao from "../../components/doacoes/historicoDoacao/HistoricoDoacao";


function Perfil() {

  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token');

  const [idOng, setIdOng] = useLocalStorage('id');
  const [value, setValue] = useState('1')

  // DTO para manipulação e update de dados do usuário
  const [usuario, setUsuario] = useState<AtualizarUsuarioDTO>({
    id: 0,
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    cnpj: "",
    foto: ""
  });

  // DTO para update de senha do usuário
  const [usuarioSenha, setUsuarioSenha] = useState<AtualizarSenhaUsuarioDTO>({
    id: 0,
    senhaAntiga: "",
    senhaNova: ""
  })

  // DTO para manipulação e autenticação de senha
  const [usuarioConfirmaSenha, setUsuarioConfirmaSenha] = useState<AutenticarUsuarioSenhaDTO>({
    senhaAntiga: "",
    senhaNova: "",
    confirmarSenhaNova: ""
  })

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

  function updatedModelSenha(e: ChangeEvent<HTMLInputElement>) {

    setUsuarioConfirmaSenha({
        ...usuarioConfirmaSenha,
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
    if(usuario.cnpj !== "" && usuario.email !== "" && usuario.nome !== "" && usuario.telefone !== "" && usuario.endereco !== "")
    {
        await put(`/api/Usuarios/usuario`, usuario, setUsuario, 
        {
          headers:{
            'Authorization': token
          }
        })
        toast.success('Usuario atualizado com sucesso', {
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
        toast.error('Dados inconsistentes. Favor verificar as informações inseridas.', {
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

async function onSubmitSenha(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  if(usuarioConfirmaSenha.senhaNova !== "" && usuarioConfirmaSenha.senhaNova === usuarioConfirmaSenha.confirmarSenhaNova && usuarioConfirmaSenha.senhaAntiga !== "")
  { 
      usuarioSenha.id = usuario.id;
      usuarioSenha.senhaAntiga = usuarioConfirmaSenha.senhaAntiga;
      usuarioSenha.senhaNova = usuarioConfirmaSenha.senhaNova;

      try{
        await put(`/api/Usuarios/senha`, usuarioSenha, setUsuarioSenha, 
        {
          headers:{
            'Authorization': token
          }
        });
        toast.success('Usuario atualizado com sucesso', {
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
      catch(exception){
        toast.error('Senha antiga incorreta.', {
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
    else
    {
      toast.error('Dados inconsistentes. Favor verificar as informações inseridas.', {
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

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
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
          <div id="perfil-container-left-bottom">
          <div className='largura'>
                <TabContext value={value}>
                  <Box display="flex" flexWrap="wrap" justifyContent="center">
                  <HistoricoDoacao />
                  </Box>
                </TabContext>
            </div>
          </div>
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
                  name="cnpj"
                  value={usuario.cnpj}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
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
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
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
            <form onSubmit={onSubmitSenha}>

              <div className="input-group-perfil">
                <label> Senha Atual </label>
                <input
                  type="password"
                  id="senhaAntiga"
                  placeholder="Digite sua senha atual"
                  name="senhaAntiga"
                  value={usuarioConfirmaSenha.senhaAntiga}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModelSenha(e)}
                />
                <div id="txtSenha"></div>
              </div>

              <div className="input-group-perfil">
                <label>Senha</label>
                <input
                  type="password"
                  id="senhaNova"
                  name="senhaNova"
                  placeholder="Digite sua nova senha"
                  value={usuarioConfirmaSenha.senhaNova}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModelSenha(e)}
                />
                <div id="txtNovaSenha"></div>
              </div>

              <div className="input-group-perfil">
                <label> Confirmar senha</label>
                <input
                  type="password"
                  id="confirmarSenhaNova"
                  name="confirmarSenhaNova"
                  placeholder="Confirme sua nova senha"
                  value={usuarioConfirmaSenha.confirmarSenhaNova}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModelSenha(e)}
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
