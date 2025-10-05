"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileWriter_1 = require("./FileWriter");
var Aeronave = /** @class */ (function () {
    function Aeronave(codigo, modelo, tipo, capacidade, alcance) {
        this.codigo = codigo;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
    }
    Aeronave.prototype.detalhe = function () { };
    Aeronave.prototype.salvar = function (teste, etapa, peca) {
        var conteudo = "{\"codigo\":\"".concat(this.codigo, "\",\"modelo\":\"").concat(this.modelo, "\",\"tipo\":").concat(this.tipo, ",\"capacidade\":").concat(this.capacidade, ",\"alcance\":").concat(this.alcance, ",\"teste\":").concat(teste, ",\"etapa\":").concat(etapa, ",\"peca\":").concat(peca, "}");
        (0, FileWriter_1.Write)("./Dados/Aeronave/".concat(this.codigo, ".txt"), conteudo);
        if (!(0, FileWriter_1.Read)("./Dados/Aeronaves.txt").includes("".concat(this.codigo, "-").concat(this.modelo))) {
            (0, FileWriter_1.Write)("./Dados/Aeronaves.txt", "".concat((0, FileWriter_1.Read)("./Dados/Aeronaves.txt"), " ").concat(this.codigo, "-").concat(this.modelo));
        }
    };
    return Aeronave;
}());
exports.default = Aeronave;
