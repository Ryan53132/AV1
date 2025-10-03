import { Write } from "./FileWriter"
import { NivelPermicao } from "./TiposVariaveis"

export default class Funcionario{
    id:string
    nome:string
    telefone:string
    endereco:string
    usuario:string
    senha:string
    nivelPermicao:NivelPermicao
    constructor(id:string,nome:string,telefone:string,endereco:string,usuario:string,senha:string,nivelPermicao:NivelPermicao){
        this.id = id
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.usuario = usuario
        this.senha = senha
        this.nivelPermicao = nivelPermicao
    }
    autenticar(){}
    salvar(){}
    carregar(){
        Write("./dados/Funcionarios",``)
    }
}