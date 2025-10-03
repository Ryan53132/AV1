import { StatusEtapa } from "./TiposVariaveis"
import Funcionario from "./Funcionario"
export default class etapa{
    nome:string
    prazo:string
    status:StatusEtapa
    funcionarios:Funcionario[]
    constructor(nome:string,prazo:string,status:StatusEtapa,funcionarios:Funcionario[]){
        this.nome = nome
        this.prazo = prazo
        this.status = status
        this.funcionarios = funcionarios
    }
    inicia(){}
    finalizar(){}
    AssociarFuniconario(){}
    listafunncionarios(){}
}