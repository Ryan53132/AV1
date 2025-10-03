"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var etapa = /** @class */ (function () {
    function etapa(nome, prazo, status, funcionarios) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
        this.funcionarios = funcionarios;
    }
    etapa.prototype.inicia = function () { };
    etapa.prototype.finalizar = function () { };
    etapa.prototype.AssociarFuniconario = function () { };
    etapa.prototype.listafunncionarios = function () { };
    return etapa;
}());
exports.default = etapa;
