"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Funcionario.prototype.autenticar = function () { };
    Funcionario.prototype.salvar = function () { };
    Funcionario.prototype.carregar = function () { };
    return Funcionario;
}());
exports.default = Funcionario;
