interface Doacao{
    id: number;
    titulo: string;
    foto: string;
    contato: string;
    quantidade: number;
    descricao: string;
    validade: string;
    cnpjDoador: string;
    limite: number;
    
}

export default Doacao;