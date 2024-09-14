

export interface LoteriasResult {
    loteria: string;
    concurso: string;
    data: string;
    dezenas: string[];
    trevos: string[];
    acumulou: boolean;
  }
  
  export interface LoteriasProps {
    resultado: LoteriasResult;
    // exibirPremio?: boolean; // opcional
  }
  