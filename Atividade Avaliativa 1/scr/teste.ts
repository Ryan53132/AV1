import { TipoTeste,ResultadoTeste } from "./TiposVariaveis";
import { Write,Read } from "./FileWriter";
export default class teste{
    tipoTeste:TipoTeste
    resultado:ResultadoTeste
    constructor(tipoTeste:TipoTeste,resultado:ResultadoTeste,codigo:string){
        this.tipoTeste = tipoTeste
        this.resultado = resultado
    }
    salvar(){
        let path = `/txts/testes/teste.txt`
        let fileContent = `${Read(path)} 
        --------------------------------
        Tipo de teste: ${this.tipoTeste}
        Resultado: ${this.resultado}
        -------------------------------- \n`
        Write(path,fileContent)
    }
    carregar(){}
}
