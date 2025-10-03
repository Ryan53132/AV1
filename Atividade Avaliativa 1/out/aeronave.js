"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aeronave = /** @class */ (function () {
    function Aeronave(codigo, modelo, tipo, capacidade, alcance) {
        this.codigo = codigo;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
    }
    Aeronave.prototype.detalhe = function () { };
    Aeronave.prototype.salvar = function () { };
    Aeronave.prototype.carregar = function () { };
    return Aeronave;
}());
exports.default = Aeronave;
