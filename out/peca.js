"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileWriter_1 = require("./FileWriter");
var TiposVariaveis_1 = require("./TiposVariaveis");
var peca = /** @class */ (function () {
    function peca(nome, tipo, fornecedor, status) {
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }
    peca.prototype.atualizarStatus = function () {
        console.log("1 - Em producao 2 - em transporte 3 - pronta");
        var res = (0, FileWriter_1.ReadLine)();
        if (res = "1") {
            this.status = TiposVariaveis_1.StatusPeca.Em_Producao;
        }
        else if (res = "2") {
            this.status = TiposVariaveis_1.StatusPeca.Em_transporte;
        }
        else if (res = "3") {
            this.status = TiposVariaveis_1.StatusPeca.Pronta;
        }
        else {
            console.log("Opcao nao indentificada");
        }
    };
    peca.prototype.salvar = function () { (0, FileWriter_1.Write)("./dados/Peca".concat(this.nome, ".txt"), "".concat(this.nome, " ").concat(this.tipo, " ").concat(this.fornecedor, " ").concat(this.status)); };
    peca.prototype.carregar = function () { (0, FileWriter_1.Read)("./dados/peca".concat(this.nome, ".txt")); };
    return peca;
}());
exports.default = peca;
