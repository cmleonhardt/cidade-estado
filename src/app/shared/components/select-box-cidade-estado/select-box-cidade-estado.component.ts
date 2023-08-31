import {Component, NgModule, OnInit} from "@angular/core";
import {Estados} from "../../services/estados";
import {Municipios} from "../../services/municipios";
import {CidadeEstadoService} from "../../services/cidade-estado.service";
import {CommonModule} from "@angular/common";
import {DxSelectBoxModule} from "devextreme-angular";

@Component({
  selector: 'select-box-cidade-estado',
  templateUrl: './select-box-cidade-estado.component.html',
  styleUrls: ['./select-box-cidade-estado.component.scss']
})

export class SelectBoxCidadeEstadoComponent implements OnInit{

  dropDownOptions = { height:150 }

  public estadoArray: Estados[];
  public municipioArray: Municipios[];

  constructor(
    private mainService: CidadeEstadoService) {

  }

  ngOnInit(): void{
    this.mainService.estadolist().subscribe(res => { this.estadoArray = res;});

  }

  getMainService(): any { return this.mainService; }

  onValueChanged(e){
    this.getMainService().municipioslist(e.value.id).subscribe(mun => { this.municipioArray = mun;});

    console.log(e.value.id);
    // console.log((e.value))
  }

}

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule
  ],
  declarations: [ SelectBoxCidadeEstadoComponent ],
  exports: [ SelectBoxCidadeEstadoComponent ]
})
export class SelectBoxCidadeEstadoModule { }
