"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileWriter_1 = require("./FileWriter");
var Funcionario = /** @class */ (function () {
    function Funcionario(id, nome, telefone, endereco, usuario, senha, nivelPermicao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this.nivelPermicao = nivelPermicao;
    }
    Funcionario.prototype.autenticar = function (id, senha) {
        if (this.id === id && this.senha === senha) {
            return true;
        }
        return false;
    };
    Funcionario.prototype.salvar = function () {
        (0, FileWriter_1.Write)("./Dados/Funcionario.txt", "".concat((0, FileWriter_1.Read)("./Dados/Funcionario.txt"), ", \"").concat(this.id, "\":{\"id\":\"").concat(this.id, "\",\"nome\":\"").concat(this.nome, "\",\"telefone\": \"").concat(this.telefone, "\",\"endereco\": \"").concat(this.endereco, "\",\"usuario\": \"").concat(this.usuario, "\", \"senha\": \"").concat(this.senha, "\", \"nivel\": \"").concat(this.nivelPermicao, "\"}"));
        (0, FileWriter_1.Write)("./Dados/Funcionarios.txt", "".concat((0, FileWriter_1.Read)("./Dados/Funcionarios.txt"), " \n ").concat(this.id, "-").concat(this.nome));
    };
    Funcionario.prototype.carregar = function () { };
    return Funcionario;
}());
exports.default = Funcionario;
