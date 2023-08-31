import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Estados} from "./estados";
import {Observable} from "rxjs";
import {Municipios} from "./municipios";

// export class Item {
//   ID: number;
//   Nome: string ;
//   Categoria: string;
//
// }
//
// export class Est{
//   ID: number;
//   Nome: String;
//   Sigla: String;
//
// }

// const itens: Item [] = [{
//   ID: 1,
//   Nome: 'Banana',
//   Categoria: 'Frutas',
// }, {
//   ID: 2,
//   Nome: 'Pepino',
//   Categoria: 'Legumes',
// },{
//   ID : 3 ,
//   Nome : 'Apple' ,
//   Categoria : 'Frutas' ,
// }, {
//   ID : 4 ,
//   Nome : 'Tomate' ,
//   Categoria : 'Legumes' ,
// }, {
//   ID: 5,
//   Nome: 'Damasco',
//   Categoria: 'Frutas',
// }]

@Injectable()
export class CidadeEstadoService {

  // private readonly api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) {
  }

  estadolist(): Observable<Estados[]>{
    return this.http.get<Estados[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

  municipioslist(e): Observable<Municipios[]>{
    return this.http.get<Municipios[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ e +'/municipios')
  }
  // getItens(): Item[]{
  //   return itens;
  // }

}

