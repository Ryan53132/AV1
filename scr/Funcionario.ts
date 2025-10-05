import { Read, Write } from "./FileWriter"
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
    autenticar(id:string, senha: string){
        if(this.id === id && this.senha === senha){
            return true
        }
        return false
    }
    salvar(){
        Write(`./Dados/Funcionario.txt`,`${Read("./Dados/Funcionario.txt")}, "${this.id}":{"id":"${this.id}","nome":"${this.nome}","telefone": "${this.telefone}","endereco": "${this.endereco}","usuario": "${this.usuario}", "senha": "${this.senha}", "nivel": "${this.nivelPermicao}"}`)
        Write(`./Dados/Funcionarios.txt`,`${Read("./Dados/Funcionarios.txt")} \n ${this.id}-${this.nome}` )
    }
    carregar(){}
}