"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileWriter_1 = require("./FileWriter");
var relatorio = /** @class */ (function () {
    function relatorio() {
        this.conteudo = "";
    }
    relatorio.prototype.gerarRelatorio = function (Aero, peca, etapa, teste) {
        var conteudo = "==============================\n        RELAT\u00D3RIO DE PRODU\u00C7\u00C3O\n        ==============================    \n        AERONAVE:\n        C\u00F3digo: ".concat(Aero.codigo, "\n        Modelo: ").concat(Aero.modelo, "\n        Tipo: ").concat(Aero.tipo, "\n        Capacidade: ").concat(Aero.capacidade, "\n        Alcance: ").concat(Aero.alcance, "\n        \n        --- Pe\u00E7as ---\n        ").concat(peca, "\n        \n        --- Etapas ---\n        ").concat(etapa, "\n        \n        --- Testes ---\n        ").concat(teste, "\n        ");
        this.conteudo = conteudo;
        console.log(conteudo);
    };
    relatorio.prototype.salvarEmArquivo = function (Aero) { (0, FileWriter_1.Write)("./Dados/Relatorios/relatorio".concat(Aero.codigo, ".txt"), this.conteudo); };
    return relatorio;
}());
exports.default = relatorio;
