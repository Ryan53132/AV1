"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TiposVariaveis_1 = require("./TiposVariaveis");
var Funcionario_1 = __importDefault(require("./Funcionario"));
var FileWriter_1 = require("./FileWriter");
var Etapa = /** @class */ (function () {
    function Etapa(nome, prazo, status, funcionarios) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
        this.funcionarios = Array.isArray(funcionarios) ? funcionarios : [];
    }
    Etapa.prototype.inicia = function () { this.status = TiposVariaveis_1.StatusEtapa.Anadamento; };
    Etapa.prototype.finalizar = function () { this.status = TiposVariaveis_1.StatusEtapa.Concluida; };
    Etapa.prototype.AssociarFuniconario = function (funcID) {
        var json = JSON.parse("".concat((0, FileWriter_1.Read)("./Dados/Funcionario.txt"), "}"))[funcID];
        var funcdas = new Funcionario_1.default(json["id"], json["nome"], json["telefone"], json["endereco"], json["usuario"], json["senha"], json["nivel"]);
        this.funcionarios.push(funcdas);
    };
    Etapa.prototype.listafunncionarios = function () {
        console.log("funcionarios:");
        for (var _i = 0, _a = this.funcionarios; _i < _a.length; _i++) {
            var x = _a[_i];
            console.log("================================================");
            console.log("nome: " + x.nome);
            console.log("telefone: " + x.telefone);
            console.log("endereco: " + x.endereco);
            console.log("usuario: " + x.usuario);
            console.log("senha: " + x.senha);
            console.log("nivel de permicao: " + x.nivelPermicao);
            console.log("================================================");
        }
    };
    return Etapa;
}());
exports.default = Etapa;
