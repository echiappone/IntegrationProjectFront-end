interface Doacao {
    id: number;
    contato: string| null;
    quantidade: string| null;
    descricao: string| null;
    validade: string| null;
    cnpj_Doador?: string| null;
}

export default Doacao;