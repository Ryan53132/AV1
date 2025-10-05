import Aeronave from "./aeronave";
import { Read, ReadLine, Write } from "./FileWriter";
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
    atualizarStatus(){
        console.log("1 - Em producao 2 - em transporte 3 - pronta")
        let res = ReadLine()
        if(res = "1"){this.status = StatusPeca.Em_Producao}
        else if(res = "2"){this.status = StatusPeca.Em_transporte}
        else if(res = "3"){this.status = StatusPeca.Pronta}
        else{console.log("Opcao nao indentificada")}
    }
    salvar(){Write(`./dados/Peca${this.nome}.txt`,`${this.nome} ${this.tipo} ${this.fornecedor} ${this.status}`)}
    carregar(){Read(`./dados/peca${this.nome}.txt`)}
}