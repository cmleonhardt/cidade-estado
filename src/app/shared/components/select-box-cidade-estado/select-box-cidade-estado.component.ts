import {Component, EventEmitter, NgModule, OnInit, Output} from "@angular/core";
import {Estado} from "../../../model/estado";
import {Municipio} from "../../../model/municipio";
import {CidadeEstadoService} from "../../services/cidade-estado.service";
import {CommonModule} from "@angular/common";
import {DxSelectBoxModule, DxTemplateModule, DxTextBoxModule} from "devextreme-angular";
import ArrayStore from 'devextreme/data/array_store';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "../../../app.module";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'select-box-cidade-estado',
  templateUrl: './select-box-cidade-estado.component.html',
  styleUrls: ['./select-box-cidade-estado.component.scss'],
  providers: [CidadeEstadoService],
})

export class SelectBoxCidadeEstadoComponent implements OnInit{



  public estadoArray: Estado[];
  public municipioArray: Municipio[];
  public data: any;
  dropDownOptions = { height:150 }

  @Output()
  municipioSelecionado: EventEmitter<string> = new EventEmitter<string>();
  // municipioSelecionado: string;


  @Output()
  estadoSelecionado: EventEmitter<string> = new EventEmitter<string>();
  // estadoSelecionado: string;

  constructor(
    private mainService: CidadeEstadoService) {
         this.data = new ArrayStore({
           data: this.estadoArray,
           key: 'id',
         }) ;
  }

  ngOnInit(): void{
    this.mainService.estadolist().subscribe(res => { this.estadoArray = res;});
  }

  getMainService(): any { return this.mainService; }

  onValueChanged(e){
    this.getMainService().municipioslist(e.value.id).subscribe(mun => { this.municipioArray = mun;});

    console.log(e.value.id);
    console.log(e.value.nome);
    // console.log((e.value))
  }

  onValueChangedMunicipio(e){
    console.log(e.value.nome)
  }

}

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    BrowserModule,
    DxTextBoxModule,
    DxTemplateModule
  ],
  declarations: [ SelectBoxCidadeEstadoComponent ],
  exports: [ SelectBoxCidadeEstadoComponent ]
})
export class SelectBoxCidadeEstadoModule { }

