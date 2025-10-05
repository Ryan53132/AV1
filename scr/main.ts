import Aeronave from "./aeronave"
import Etapa from "./etapa"
import { ReadLine,Read } from "./FileWriter"
import Funcionario from "./Funcionario"
import peca from "./peca"
import relatorio from "./relatorio"
import teste from "./teste"
import { NivelPermicao, ResultadoTeste, StatusEtapa, StatusPeca, TipoAeronave, TipoPeca, TipoTeste } from "./TiposVariaveis"

console.log("Bem vindo ao sistema de gerenciamento de produção de aeronaves")
console.log("digite seu codigo de usuario:")
let usuario = ReadLine()
console.log("digite sua senha:")
let senha = ReadLine()
let Jfunc = JSON.parse(`${Read(`./Dados/Funcionario.txt`)}}`)
if(!Jfunc[usuario]){
    console.log("usuario incorreto, Desligando ...")
}else{
if(Jfunc[usuario]["senha"] != senha){
    console.log("senha incorreta, Desligando ...")
}else{
while(true){
    console.log(`1 - Escolha a Aeronave 2 - Crie Aeronave 3 - Listar Aeronaves 4 - sair
    Cetifique-se de Criar uma aeronave antes de escolher ou listar, o mesmo processo se aplica com etapas, peças e testes,
    Este é um sistema e somente operavel com Numeros, Obrigado pela paciencia.`)
    let res = ReadLine()
    let Aero:Aeronave = new Aeronave("","",TipoAeronave.Comercial,0,0)
    let pass = 0    
    //====================================================================================================================
    if(res == "1"){
        console.log("digite o codigo:")
        for(let x of Read("./Dados/Aeronaves.txt").split(" ")){
            console.log(x)
        }
        res = ReadLine()
        if(Read(`./Dados/Aeronave/${res}.txt`) == ""){
            console.log("nao existe, Desligando ...")
            break
        }else{
            let dado = Read(`./Dados/Aeronave/${res}.txt`)
            let dados = JSON.parse(dado)
            Aero = new Aeronave(String(dados["codigo"]),String(dados["modelo"]),dados["tipo"],dados["capacidade"],dados["alcance"])
            pass = 1 
        }
    } else if (res == "2"){
        console.log("Codigo:")
        let codigo = ReadLine()
        console.log("Modelo:")
        let modelo = ReadLine()
        console.log("tipo: 0 - Comercial 1 - Militar")
        let tipo = ReadLine()
        if(tipo == "0"){tipo = TipoAeronave.Comercial}
        else if(tipo == "1"){tipo = TipoAeronave.Militar}
        else{console.log("erro: nao identificado, Desligando");break}
        console.log("capacidade:")
        let capacidade = ReadLine()
        console.log("alcance:")
        let alcance = ReadLine()
        Aero = new Aeronave(codigo,modelo,tipo,capacidade,alcance)
        Aero.salvar("","","")
        pass = 1
    }else if(res == "3"){
        console.log(Read("./Dados/Aeronaves.txt"))
    }else{console.log("Saindo");break}
    //===================================================================================================================

    if(pass == 1){
        var etapaa:Etapa[] =  JSON.parse(`${Read(`./Dados/Aeronave/${Aero.codigo}.txt`)}`)["etapa"] || []
        var pecaa:peca[] = JSON.parse(`${Read(`./Dados/Aeronave/${Aero.codigo}.txt`)}`)["peca"] || []
        var testea:teste[] = JSON.parse(`${Read(`./Dados/Aeronave/${Aero.codigo}.txt`)}`)["teste"] || []
        while(true){
            var Etp:Etapa = new Etapa("","",StatusEtapa.Pendente,[])
            var Pec:peca = new peca("",TipoPeca.Nacional,"",StatusPeca.Em_Producao)
            var Tes:teste
            var rel:relatorio = new relatorio()
            console.log("1 - etapa 2 - peca 3 - teste 4 - relatorio 5 - sair")
            res = ReadLine()
            if(res == "1"){
                while(true){
                let passE = 0
                console.log("1 - Criar etapa 2 - escolher etapa 3 - listar etapas 4 - Criar Funcionario 5 - sair")
                res = ReadLine()
                if(res == "1"){
                    console.log("Nome:")
                    let nome = ReadLine()
                    console.log("prazo:")
                    let prazo = ReadLine()
                    console.log("Status")
                    let status = StatusEtapa.Pendente
                    Etp = new Etapa(nome,prazo,status,[])
                    etapaa.push(Etp)
                    passE = 1 
                }else if (res == "2"){
                    for(let x in etapaa){
                        console.log(x)
                    }
                    console.log("coloque o numero da etapa:")
                    let etapaId = ReadLine()
                    Etp = new Etapa(etapaa[etapaId]["nome"],etapaa[etapaId]["prazo"],etapaa[etapaId]["status"],etapaa[etapaId]["funcionarios"])
                    passE = 1 
                }else if(res == "3"){
                    console.log(etapaa)
                }else if(res == "5"){
                    break
                }
                else if(res == "4"){
                    console.log("nome:")
                    let nome = ReadLine()
                    console.log("telefone:")
                    let telefone = ReadLine()
                    console.log("endereco:")
                    let endereco = ReadLine()
                    console.log("usuario:")
                    let usuario = ReadLine()
                    console.log("senha:")
                    let senha = ReadLine()
                    console.log("nivel de permicao: 0 - operador 1 - engenheiro 2 - Administrador")
                    let nvl = ReadLine()
                    if(nvl == "0"){nvl = NivelPermicao.Operador}
                    else if(nvl == "1"){nvl = NivelPermicao.Engenheiro}
                    else if(nvl == "2"){nvl = NivelPermicao.Administrador}
                    let id = String(Read("./Dados/Funcionarios.txt").split(" ").length)
                    let FuncObj = new Funcionario(id,nome,telefone,endereco,usuario,senha,nvl)
                    FuncObj.salvar()
                }
                if(passE == 1){
                    while(true){
                    console.log("1 - iniciar etapa 2 - finalizar etapa 3 - associar funcionario 4 - listar funcionarios 5 - sair")
                    res = ReadLine()
                    if(res == "1" ){
                        Etp.inicia()
                    }else if(res == "2"){
                        Etp.finalizar()
                    }else if(res == "3"){
                        let funcL = Read("./Dados/Funcionarios.txt")
                        let funcArray = funcL.split(" ")
                        for(let x of funcArray){
                            console.log(x)
                        }
                        console.log("coloque o numero do funcionario:")
                        let funcId = ReadLine()
                        Etp.funcionarios.push(new Funcionario(Jfunc[funcId]["id"],Jfunc[funcId]["nome"],Jfunc[funcId]["telefone"],Jfunc[funcId]["endereco"],Jfunc[funcId]["usuario"],Jfunc[funcId]["senha"],Jfunc[funcId]["nivel"]))
                    }else if(res == "4"){
                        Etp.listafunncionarios()
                        }else if(res == "5"){
                            break
                        }
                    }}
                }
            }else if(res == "2"){
                while(true){
                    console.log("1 - Criar peca 2 - escolher peca 3 - listar pecas 4 - sair")
                    res = ReadLine()
                    let passP = 0
                    if(res == "1"){
                        console.log("nome:")
                        let nome = ReadLine()
                        console.log("tipo: 0 - Importada 1 - Nacional")
                        let tipo = ReadLine()
                        if(tipo == "0"){tipo = TipoPeca.Importada}
                        else if(tipo == "1"){tipo = TipoPeca.Nacional}
                        else{console.log("erro: nao identificado, Desligando");break}
                        console.log("fornecedor:")
                        let fornecedor = ReadLine()
                        console.log("status: 0 - Em producao 1 - Em transporte 2 - Pronta")
                        let status = ReadLine()
                        if(status == "0"){status = StatusPeca.Em_Producao}
                        else if(status == "1"){status = StatusPeca.Em_transporte}
                        else if(status == "2"){status = StatusPeca.Pronta}
                        else{console.log("erro: nao identificado, Desligando");break}
                        pecaa.push(new peca(nome,tipo,fornecedor,status))
                        passP = 1
                    }else if(res == "2"){
                        console.log("digite a peca:")
                        let peca = ReadLine()
                        for(let x in peca){
                            console.log(x)
                        }
                        console.log("coloque o numero da peca:")
                        let pecaId = ReadLine()
                        Pec = new peca(peca[pecaId]["nome"],peca[pecaId]["tipo"],peca[pecaId]["fornecedor"],peca[pecaId]["status"])
                    }else if(res == "3"){
                        console.log(pecaa)
                    }else if(res == "4"){
                        break
                    }
                    if(passP == 1){
                        while(true){
                            console.log("1 - atualizar status 2 - sair")
                            res = ReadLine()
                            if(res == "1"){
                                Pec.atualizarStatus()
                            }else if(res == "2"){
                                break
                            }
                        }
                    }
                }
            }else if(res == "3"){
                while(true){
                    console.log("1 - Criar teste 2 - escolher teste 3 - listar testes 4 - sair")
                    res = ReadLine()
                    if(res == "1"){
                        console.log("nome:")
                        let nome = ReadLine()
                        console.log("tipo: 0 - Aerodinamico 1 - Hidraulico 2 - Eletrico")
                        let tipo = ReadLine()
                        if(tipo == "0"){tipo = TipoTeste.Aerodinaminco}
                        else if(tipo == "1"){tipo = TipoTeste.Hidraulico}
                        else if(tipo == "2"){tipo = TipoTeste.Eletrico}
                        else{console.log("erro: nao identificado, Desligando");break}
                        console.log("resultado: 0 - Aprovado 1 - Reprovado")
                        let resultado = ReadLine()
                        if(resultado == "0"){resultado = ResultadoTeste.Aprovado}
                        else if(resultado == "1"){resultado = ResultadoTeste.Reprovado}
                        else{console.log("erro: nao identificado, Desligando");break}
                        Tes = new teste(tipo,resultado,nome)
                        testea.push(Tes)
                    }else if(res == "2"){
                        console.log("digite o teste:")
                        let teste = ReadLine()
                        for(let x in testea){
                            console.log(x)
                        }
                        console.log("coloque o numero do teste:")
                        let testeId = ReadLine()
                        Tes = new teste(teste[testeId]["tipo"],teste[testeId]["resultado"],teste[testeId]["nome"])
                    }else if(res == "3"){
                        console.log(testea)
                    }else if(res == "4"){
                        break
                    }
                }
        }else if(res == "4"){
            while(true){
                console.log("1 - relatorio 2 - sair")
                res = ReadLine()
                if(res == "1"){
                    rel.gerarRelatorio(Aero,JSON.stringify(testea),JSON.stringify(etapaa),JSON.stringify(pecaa))
                    rel.salvarEmArquivo(Aero)
                }else if(res == "2"){
                    break
                }
            }
        }else if(res == "5"){
            Aero.salvar(JSON.stringify(testea),JSON.stringify(etapaa),JSON.stringify(pecaa))
            break
        }
    }
}}}}