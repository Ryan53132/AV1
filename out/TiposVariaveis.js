"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoTeste = exports.TipoTeste = exports.NivelPermicao = exports.StatusEtapa = exports.StatusPeca = exports.TipoPeca = exports.TipoAeronave = void 0;
var TipoAeronave;
(function (TipoAeronave) {
    TipoAeronave["Comercial"] = "Comercial";
    TipoAeronave["Militar"] = "Militar";
})(TipoAeronave || (exports.TipoAeronave = TipoAeronave = {}));
var TipoPeca;
(function (TipoPeca) {
    TipoPeca["Nacional"] = "Nacional";
    TipoPeca["Importada"] = "Importada";
})(TipoPeca || (exports.TipoPeca = TipoPeca = {}));
var StatusPeca;
(function (StatusPeca) {
    StatusPeca["Em_Producao"] = "Em Produ\u00E7\u00E3o";
    StatusPeca["Em_transporte"] = "Em Transporte";
    StatusPeca["Pronta"] = "Pronta";
})(StatusPeca || (exports.StatusPeca = StatusPeca = {}));
var StatusEtapa;
(function (StatusEtapa) {
    StatusEtapa["Pendente"] = "Pendente";
    StatusEtapa["Anadamento"] = "Anadamento";
    StatusEtapa["Concluida"] = "Conclu\u00EDda";
})(StatusEtapa || (exports.StatusEtapa = StatusEtapa = {}));
var NivelPermicao;
(function (NivelPermicao) {
    NivelPermicao["Administrador"] = "Administrador";
    NivelPermicao["Engenheiro"] = "Engenheiro";
    NivelPermicao["Operador"] = "Operador";
})(NivelPermicao || (exports.NivelPermicao = NivelPermicao = {}));
var TipoTeste;
(function (TipoTeste) {
    TipoTeste["Eletrico"] = "El\u00E9trico";
    TipoTeste["Hidraulico"] = "Hidr\u00E1ulico";
    TipoTeste["Aerodinaminco"] = "Aerodin\u00E2mico";
})(TipoTeste || (exports.TipoTeste = TipoTeste = {}));
var ResultadoTeste;
(function (ResultadoTeste) {
    ResultadoTeste["Aprovado"] = "Aprovado";
    ResultadoTeste["Reprovado"] = "Reprovado";
})(ResultadoTeste || (exports.ResultadoTeste = ResultadoTeste = {}));
