import Doacao from "./Doacao";
import Usuario from "./Usuario";

interface SolicitacaoDTO {
    id: number;
    doacao: Doacao;
    ong: Usuario;
}

export default SolicitacaoDTO;