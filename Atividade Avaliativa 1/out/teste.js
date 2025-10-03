"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileWriter_1 = require("./FileWriter");
var teste = /** @class */ (function () {
    function teste(tipoTeste, resultado, codigo) {
        this.tipoTeste = tipoTeste;
        this.resultado = resultado;
    }
    teste.prototype.salvar = function () {
        var path = "/txts/testes/teste.txt";
        var fileContent = "".concat((0, FileWriter_1.Read)(path), " \n        --------------------------------\n        Tipo de teste: ").concat(this.tipoTeste, "\n        Resultado: ").concat(this.resultado, "\n        -------------------------------- \n");
        (0, FileWriter_1.Write)(path, fileContent);
    };
    teste.prototype.carregar = function () { };
    return teste;
}());
exports.default = teste;
