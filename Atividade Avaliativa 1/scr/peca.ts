import Aeronave from "./aeronave";
import { TipoPeca,StatusPeca } from "./TiposVariaveis";
export default class peca{
    nome:string
    tipo:TipoPeca
    fornecedor:string
    status:StatusPeca
    constructor(nome:string,tipo:TipoPeca,fornecedor:string,status:StatusPeca){
        this.nome = nome
        this.tipo = tipo
        this.fornecedor = fornecedor
        this.status = status
    }
    atualizarStatus(){}
    salvar(){}
    carregar(){ }
}