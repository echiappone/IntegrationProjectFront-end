interface Usuario {
    id: number;
    nome?: string| null;
    email?: string| null;
    senha?: string| null;
    telefone?: string| null;
    endereco?: string| null;
    cnpj?: number;
    tipo?: string| null;
}

export default Usuario;
