export interface Municipios{
  id: number;
  nome: string
  microrregiao: {
                id: number;
                nome: string;
                mesorregiao: {
                              id: number;
                              nome: string;
                              UF:{
                                  id: number;
                                  nome: string;
                                  sigla: string
                                  regiao:{
                                          id: number
                                          nome: string;
                                          sigla: string
                                        }
                                  }
                              }
                }

  regiaoimediata:{
                  id: number;
                  nome: string;
                  regiaointermediara:{
                                      id: number;
                                      nome: string;
                                      UF: {
                                          id: number;
                                          nome: string;
                                          sigla: string;
                                      }
                  }

  }
}
