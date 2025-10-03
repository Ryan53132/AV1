"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoTeste = exports.TipoTeste = exports.NivelPermicao = exports.StatusEtapa = exports.StatusPeca = exports.TipoPeca = exports.TipoAeronave = void 0;
var TipoAeronave;
(function (TipoAeronave) {
    TipoAeronave[TipoAeronave["Comercial"] = 0] = "Comercial";
    TipoAeronave[TipoAeronave["Militar"] = 1] = "Militar";
})(TipoAeronave || (exports.TipoAeronave = TipoAeronave = {}));
var TipoPeca;
(function (TipoPeca) {
    TipoPeca[TipoPeca["Nacional"] = 0] = "Nacional";
    TipoPeca[TipoPeca["Importada"] = 1] = "Importada";
})(TipoPeca || (exports.TipoPeca = TipoPeca = {}));
var StatusPeca;
(function (StatusPeca) {
    StatusPeca[StatusPeca["Em_Producao"] = 0] = "Em_Producao";
    StatusPeca[StatusPeca["Em_transporte"] = 1] = "Em_transporte";
    StatusPeca[StatusPeca["Pronta"] = 2] = "Pronta";
})(StatusPeca || (exports.StatusPeca = StatusPeca = {}));
var StatusEtapa;
(function (StatusEtapa) {
    StatusEtapa[StatusEtapa["Pendente"] = 0] = "Pendente";
    StatusEtapa[StatusEtapa["Anadamento"] = 1] = "Anadamento";
    StatusEtapa[StatusEtapa["Concluida"] = 2] = "Concluida";
})(StatusEtapa || (exports.StatusEtapa = StatusEtapa = {}));
var NivelPermicao;
(function (NivelPermicao) {
    NivelPermicao[NivelPermicao["Administrador"] = 0] = "Administrador";
    NivelPermicao[NivelPermicao["Engenheiro"] = 1] = "Engenheiro";
    NivelPermicao[NivelPermicao["Operador"] = 2] = "Operador";
})(NivelPermicao || (exports.NivelPermicao = NivelPermicao = {}));
var TipoTeste;
(function (TipoTeste) {
    TipoTeste[TipoTeste["Eletrico"] = 0] = "Eletrico";
    TipoTeste[TipoTeste["Hidraulico"] = 1] = "Hidraulico";
    TipoTeste[TipoTeste["Aerodinaminco"] = 2] = "Aerodinaminco";
})(TipoTeste || (exports.TipoTeste = TipoTeste = {}));
var ResultadoTeste;
(function (ResultadoTeste) {
    ResultadoTeste[ResultadoTeste["Aprovado"] = 0] = "Aprovado";
    ResultadoTeste[ResultadoTeste["Reprovado"] = 1] = "Reprovado";
})(ResultadoTeste || (exports.ResultadoTeste = ResultadoTeste = {}));
