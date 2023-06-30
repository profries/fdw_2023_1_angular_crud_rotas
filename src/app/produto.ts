export class Produto {
    id?: number;
    nome?: string;
    preco?: number;
    marca?: string;
    validade: Date = new Date();
}
