import Doacao from "./Doacao";
import Usuario from "./Usuario";

interface HistoricoSolicitacaoDTO {
    id: number,
    doacao: Doacao,
    ong: Usuario
}

export default HistoricoSolicitacaoDTO;