import { StatusEtapa } from "./TiposVariaveis"
import Funcionario from "./Funcionario"
import { Read } from "./FileWriter"
export default class Etapa{
    nome:string
    prazo:string
    status:StatusEtapa
    funcionarios:Funcionario[]
    constructor(nome:string,prazo:string,status:StatusEtapa,funcionarios:Funcionario[]){
        this.nome = nome
        this.prazo = prazo
        this.status = status
        this.funcionarios = Array.isArray(funcionarios) ? funcionarios : []
    }
    inicia(){this.status = StatusEtapa.Anadamento}
    finalizar(){this.status = StatusEtapa.Concluida}
    AssociarFuniconario(funcID){
        const json = JSON.parse(`${Read(`./Dados/Funcionario.txt`)}}`)[funcID]
        const funcdas = new Funcionario(json["id"],json["nome"],json["telefone"],json["endereco"],json["usuario"],json["senha"],json["nivel"])
        this.funcionarios.push(funcdas)
    }
    listafunncionarios(){console.log("funcionarios:")
        for(let x of this.funcionarios){
            console.log("================================================")
            console.log("nome: " + x.nome)
            console.log("telefone: " + x.telefone)
            console.log("endereco: " + x.endereco)
            console.log("usuario: " + x.usuario)
            console.log("senha: " + x.senha)
            console.log("nivel de permicao: " + x.nivelPermicao)
            console.log("================================================")
        }
    }
}