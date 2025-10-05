import Aeronave from "./aeronave"
import { Write } from "./FileWriter"


export default class relatorio{
    conteudo:string = ""
    gerarRelatorio(Aero:Aeronave,peca,etapa,teste){
        let conteudo = `==============================
        RELATÓRIO DE PRODUÇÃO
        ==============================    
        AERONAVE:
        Código: ${Aero.codigo}
        Modelo: ${Aero.modelo}
        Tipo: ${Aero.tipo}
        Capacidade: ${Aero.capacidade}
        Alcance: ${Aero.alcance}
        
        --- Peças ---
        ${peca}
        
        --- Etapas ---
        ${etapa}
        
        --- Testes ---
        ${teste}
        `
        this.conteudo = conteudo
        console.log(conteudo)
    
    }
    salvarEmArquivo(Aero:Aeronave){Write(`./Dados/Relatorios/relatorio${Aero.codigo}.txt`,this.conteudo)}
}