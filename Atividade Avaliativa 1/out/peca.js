"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var peca = /** @class */ (function () {
    function peca(nome, tipo, fornecedor, status) {
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }
    peca.prototype.atualizarStatus = function () { };
    peca.prototype.salvar = function () { };
    peca.prototype.carregar = function () { };
    return peca;
}());
exports.default = peca;
