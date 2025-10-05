"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aeronave_1 = __importDefault(require("./aeronave"));
var etapa_1 = __importDefault(require("./etapa"));
var FileWriter_1 = require("./FileWriter");
var Funcionario_1 = __importDefault(require("./Funcionario"));
var peca_1 = __importDefault(require("./peca"));
var relatorio_1 = __importDefault(require("./relatorio"));
var teste_1 = __importDefault(require("./teste"));
var TiposVariaveis_1 = require("./TiposVariaveis");
console.log("Bem vindo ao sistema de gerenciamento de produção de aeronaves");
console.log("digite seu codigo de usuario:");
var usuario = (0, FileWriter_1.ReadLine)();
console.log("digite sua senha:");
var senha = (0, FileWriter_1.ReadLine)();
var Jfunc = JSON.parse("".concat((0, FileWriter_1.Read)("./Dados/Funcionario.txt"), "}"));
if (!Jfunc[usuario]) {
    console.log("usuario incorreto, Desligando ...");
}
else {
    if (Jfunc[usuario]["senha"] != senha) {
        console.log("senha incorreta, Desligando ...");
    }
    else {
        while (true) {
            console.log("1 - Escolha a Aeronave 2 - Crie Aeronave 3 - Listar Aeronaves 4 - sair\n    Cetifique-se de Criar uma aeronave antes de escolher ou listar, o mesmo processo se aplica com etapas, pe\u00E7as e testes,\n    Este \u00E9 um sistema e somente operavel com Numeros, Obrigado pela paciencia.");
            var res = (0, FileWriter_1.ReadLine)();
            var Aero = new aeronave_1.default("", "", TiposVariaveis_1.TipoAeronave.Comercial, 0, 0);
            var pass = 0;
            //====================================================================================================================
            if (res == "1") {
                console.log("digite o codigo:");
                for (var _i = 0, _a = (0, FileWriter_1.Read)("./Dados/Aeronaves.txt").split(" "); _i < _a.length; _i++) {
                    var x = _a[_i];
                    console.log(x);
                }
                res = (0, FileWriter_1.ReadLine)();
                if ((0, FileWriter_1.Read)("./Dados/Aeronave/".concat(res, ".txt")) == "") {
                    console.log("nao existe, Desligando ...");
                    break;
                }
                else {
                    var dado = (0, FileWriter_1.Read)("./Dados/Aeronave/".concat(res, ".txt"));
                    var dados = JSON.parse(dado);
                    Aero = new aeronave_1.default(String(dados["codigo"]), String(dados["modelo"]), dados["tipo"], dados["capacidade"], dados["alcance"]);
                    pass = 1;
                }
            }
            else if (res == "2") {
                console.log("Codigo:");
                var codigo = (0, FileWriter_1.ReadLine)();
                console.log("Modelo:");
                var modelo = (0, FileWriter_1.ReadLine)();
                console.log("tipo: 0 - Comercial 1 - Militar");
                var tipo = (0, FileWriter_1.ReadLine)();
                if (tipo == "0") {
                    tipo = TiposVariaveis_1.TipoAeronave.Comercial;
                }
                else if (tipo == "1") {
                    tipo = TiposVariaveis_1.TipoAeronave.Militar;
                }
                else {
                    console.log("erro: nao identificado, Desligando");
                    break;
                }
                console.log("capacidade:");
                var capacidade = (0, FileWriter_1.ReadLine)();
                console.log("alcance:");
                var alcance = (0, FileWriter_1.ReadLine)();
                Aero = new aeronave_1.default(codigo, modelo, tipo, capacidade, alcance);
                Aero.salvar("", "", "");
                pass = 1;
            }
            else if (res == "3") {
                console.log((0, FileWriter_1.Read)("./Dados/Aeronaves.txt"));
            }
            else {
                console.log("Saindo");
                break;
            }
            //===================================================================================================================
            if (pass == 1) {
                var etapaa = JSON.parse("".concat((0, FileWriter_1.Read)("./Dados/Aeronave/".concat(Aero.codigo, ".txt"))))["etapa"] || [];
                var pecaa = JSON.parse("".concat((0, FileWriter_1.Read)("./Dados/Aeronave/".concat(Aero.codigo, ".txt"))))["peca"] || [];
                var testea = JSON.parse("".concat((0, FileWriter_1.Read)("./Dados/Aeronave/".concat(Aero.codigo, ".txt"))))["teste"] || [];
                while (true) {
                    var Etp = new etapa_1.default("", "", TiposVariaveis_1.StatusEtapa.Pendente, []);
                    var Pec = new peca_1.default("", TiposVariaveis_1.TipoPeca.Nacional, "", TiposVariaveis_1.StatusPeca.Em_Producao);
                    var Tes;
                    var rel = new relatorio_1.default();
                    console.log("1 - etapa 2 - peca 3 - teste 4 - relatorio 5 - sair");
                    res = (0, FileWriter_1.ReadLine)();
                    if (res == "1") {
                        while (true) {
                            var passE = 0;
                            console.log("1 - Criar etapa 2 - escolher etapa 3 - listar etapas 4 - Criar Funcionario 5 - sair");
                            res = (0, FileWriter_1.ReadLine)();
                            if (res == "1") {
                                console.log("Nome:");
                                var nome = (0, FileWriter_1.ReadLine)();
                                console.log("prazo:");
                                var prazo = (0, FileWriter_1.ReadLine)();
                                console.log("Status");
                                var status_1 = TiposVariaveis_1.StatusEtapa.Pendente;
                                Etp = new etapa_1.default(nome, prazo, status_1, []);
                                etapaa.push(Etp);
                                passE = 1;
                            }
                            else if (res == "2") {
                                for (var x in etapaa) {
                                    console.log(x);
                                }
                                console.log("coloque o numero da etapa:");
                                var etapaId = (0, FileWriter_1.ReadLine)();
                                Etp = new etapa_1.default(etapaa[etapaId]["nome"], etapaa[etapaId]["prazo"], etapaa[etapaId]["status"], etapaa[etapaId]["funcionarios"]);
                                passE = 1;
                            }
                            else if (res == "3") {
                                console.log(etapaa);
                            }
                            else if (res == "5") {
                                break;
                            }
                            else if (res == "4") {
                                console.log("nome:");
                                var nome = (0, FileWriter_1.ReadLine)();
                                console.log("telefone:");
                                var telefone = (0, FileWriter_1.ReadLine)();
                                console.log("endereco:");
                                var endereco = (0, FileWriter_1.ReadLine)();
                                console.log("usuario:");
                                var usuario_1 = (0, FileWriter_1.ReadLine)();
                                console.log("senha:");
                                var senha_1 = (0, FileWriter_1.ReadLine)();
                                console.log("nivel de permicao: 0 - operador 1 - engenheiro 2 - Administrador");
                                var nvl = (0, FileWriter_1.ReadLine)();
                                if (nvl == "0") {
                                    nvl = TiposVariaveis_1.NivelPermicao.Operador;
                                }
                                else if (nvl == "1") {
                                    nvl = TiposVariaveis_1.NivelPermicao.Engenheiro;
                                }
                                else if (nvl == "2") {
                                    nvl = TiposVariaveis_1.NivelPermicao.Administrador;
                                }
                                var id = String((0, FileWriter_1.Read)("./Dados/Funcionarios.txt").split(" ").length);
                                var FuncObj = new Funcionario_1.default(id, nome, telefone, endereco, usuario_1, senha_1, nvl);
                                FuncObj.salvar();
                            }
                            if (passE == 1) {
                                while (true) {
                                    console.log("1 - iniciar etapa 2 - finalizar etapa 3 - associar funcionario 4 - listar funcionarios 5 - sair");
                                    res = (0, FileWriter_1.ReadLine)();
                                    if (res == "1") {
                                        Etp.inicia();
                                    }
                                    else if (res == "2") {
                                        Etp.finalizar();
                                    }
                                    else if (res == "3") {
                                        var funcL = (0, FileWriter_1.Read)("./Dados/Funcionarios.txt");
                                        var funcArray = funcL.split(" ");
                                        for (var _b = 0, funcArray_1 = funcArray; _b < funcArray_1.length; _b++) {
                                            var x = funcArray_1[_b];
                                            console.log(x);
                                        }
                                        console.log("coloque o numero do funcionario:");
                                        var funcId = (0, FileWriter_1.ReadLine)();
                                        Etp.funcionarios.push(new Funcionario_1.default(Jfunc[funcId]["id"], Jfunc[funcId]["nome"], Jfunc[funcId]["telefone"], Jfunc[funcId]["endereco"], Jfunc[funcId]["usuario"], Jfunc[funcId]["senha"], Jfunc[funcId]["nivel"]));
                                    }
                                    else if (res == "4") {
                                        Etp.listafunncionarios();
                                    }
                                    else if (res == "5") {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    else if (res == "2") {
                        while (true) {
                            console.log("1 - Criar peca 2 - escolher peca 3 - listar pecas 4 - sair");
                            res = (0, FileWriter_1.ReadLine)();
                            var passP = 0;
                            if (res == "1") {
                                console.log("nome:");
                                var nome = (0, FileWriter_1.ReadLine)();
                                console.log("tipo: 0 - Importada 1 - Nacional");
                                var tipo = (0, FileWriter_1.ReadLine)();
                                if (tipo == "0") {
                                    tipo = TiposVariaveis_1.TipoPeca.Importada;
                                }
                                else if (tipo == "1") {
                                    tipo = TiposVariaveis_1.TipoPeca.Nacional;
                                }
                                else {
                                    console.log("erro: nao identificado, Desligando");
                                    break;
                                }
                                console.log("fornecedor:");
                                var fornecedor = (0, FileWriter_1.ReadLine)();
                                console.log("status: 0 - Em producao 1 - Em transporte 2 - Pronta");
                                var status_2 = (0, FileWriter_1.ReadLine)();
                                if (status_2 == "0") {
                                    status_2 = TiposVariaveis_1.StatusPeca.Em_Producao;
                                }
                                else if (status_2 == "1") {
                                    status_2 = TiposVariaveis_1.StatusPeca.Em_transporte;
                                }
                                else if (status_2 == "2") {
                                    status_2 = TiposVariaveis_1.StatusPeca.Pronta;
                                }
                                else {
                                    console.log("erro: nao identificado, Desligando");
                                    break;
                                }
                                pecaa.push(new peca_1.default(nome, tipo, fornecedor, status_2));
                                passP = 1;
                            }
                            else if (res == "2") {
                                console.log("digite a peca:");
                                var peca_2 = (0, FileWriter_1.ReadLine)();
                                for (var x in peca_2) {
                                    console.log(x);
                                }
                                console.log("coloque o numero da peca:");
                                var pecaId = (0, FileWriter_1.ReadLine)();
                                Pec = new peca_2(peca_2[pecaId]["nome"], peca_2[pecaId]["tipo"], peca_2[pecaId]["fornecedor"], peca_2[pecaId]["status"]);
                            }
                            else if (res == "3") {
                                console.log(pecaa);
                            }
                            else if (res == "4") {
                                break;
                            }
                            if (passP == 1) {
                                while (true) {
                                    console.log("1 - atualizar status 2 - sair");
                                    res = (0, FileWriter_1.ReadLine)();
                                    if (res == "1") {
                                        Pec.atualizarStatus();
                                    }
                                    else if (res == "2") {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    else if (res == "3") {
                        while (true) {
                            console.log("1 - Criar teste 2 - escolher teste 3 - listar testes 4 - sair");
                            res = (0, FileWriter_1.ReadLine)();
                            if (res == "1") {
                                console.log("nome:");
                                var nome = (0, FileWriter_1.ReadLine)();
                                console.log("tipo: 0 - Aerodinamico 1 - Hidraulico 2 - Eletrico");
                                var tipo = (0, FileWriter_1.ReadLine)();
                                if (tipo == "0") {
                                    tipo = TiposVariaveis_1.TipoTeste.Aerodinaminco;
                                }
                                else if (tipo == "1") {
                                    tipo = TiposVariaveis_1.TipoTeste.Hidraulico;
                                }
                                else if (tipo == "2") {
                                    tipo = TiposVariaveis_1.TipoTeste.Eletrico;
                                }
                                else {
                                    console.log("erro: nao identificado, Desligando");
                                    break;
                                }
                                console.log("resultado: 0 - Aprovado 1 - Reprovado");
                                var resultado = (0, FileWriter_1.ReadLine)();
                                if (resultado == "0") {
                                    resultado = TiposVariaveis_1.ResultadoTeste.Aprovado;
                                }
                                else if (resultado == "1") {
                                    resultado = TiposVariaveis_1.ResultadoTeste.Reprovado;
                                }
                                else {
                                    console.log("erro: nao identificado, Desligando");
                                    break;
                                }
                                Tes = new teste_1.default(tipo, resultado, nome);
                                testea.push(Tes);
                            }
                            else if (res == "2") {
                                console.log("digite o teste:");
                                var teste_2 = (0, FileWriter_1.ReadLine)();
                                for (var x in testea) {
                                    console.log(x);
                                }
                                console.log("coloque o numero do teste:");
                                var testeId = (0, FileWriter_1.ReadLine)();
                                Tes = new teste_2(teste_2[testeId]["tipo"], teste_2[testeId]["resultado"], teste_2[testeId]["nome"]);
                            }
                            else if (res == "3") {
                                console.log(testea);
                            }
                            else if (res == "4") {
                                break;
                            }
                        }
                    }
                    else if (res == "4") {
                        while (true) {
                            console.log("1 - relatorio 2 - sair");
                            res = (0, FileWriter_1.ReadLine)();
                            if (res == "1") {
                                rel.gerarRelatorio(Aero, JSON.stringify(testea), JSON.stringify(etapaa), JSON.stringify(pecaa));
                                rel.salvarEmArquivo(Aero);
                            }
                            else if (res == "2") {
                                break;
                            }
                        }
                    }
                    else if (res == "5") {
                        Aero.salvar(JSON.stringify(testea), JSON.stringify(etapaa), JSON.stringify(pecaa));
                        break;
                    }
                }
            }
        }
    }
}
