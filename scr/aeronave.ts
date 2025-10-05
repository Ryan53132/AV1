import { Read, Write } from "./FileWriter"
import { TipoAeronave } from "./TiposVariaveis"
export default class Aeronave {
    codigo:string
    modelo:string
    tipo:TipoAeronave
    capacidade:number
    alcance:number
    constructor(codigo:string,modelo:string,tipo:TipoAeronave,capacidade:number,alcance:number) {
        this.codigo = codigo
        this.modelo = modelo
        this.tipo = tipo
        this.capacidade = capacidade
        this.alcance = alcance
    }

    detalhe(){}
    salvar(teste,etapa,peca){
        let conteudo = `{"codigo":"${this.codigo}","modelo":"${this.modelo}","tipo":${this.tipo},"capacidade":${this.capacidade},"alcance":${this.alcance},"teste":${teste},"etapa":${etapa},"peca":${peca}}`
        Write(`./Dados/Aeronave/${this.codigo}.txt`,conteudo)
        if(!Read(`./Dados/Aeronaves.txt`).includes(`${this.codigo}-${this.modelo}`)){
        Write(`./Dados/Aeronaves.txt`,`${Read(`./Dados/Aeronaves.txt`)} ${this.codigo}-${this.modelo}` )}
    }   
}
