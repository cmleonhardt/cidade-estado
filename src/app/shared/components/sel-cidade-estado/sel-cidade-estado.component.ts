import {Component} from "@angular/core";
import {Estados} from "../../services/estados";
import {Municipios} from "../../services/municipios";
import {CidadeEstadoService} from "../../services/cidade-estado.service";

@Component({
  selector: 'sel-cidade-estado',
  templateUrl: './sel-cidade-estado.component.html',
  styleUrls: ['./sel-cidade-estado.component.scss']
})

export class SelCidadeEstadoComponent{


  dropDownOptions = { height:150 }

  public estadoArray: Estados[];
  public municipioArray: Municipios[];



  constructor(
    private mainService: CidadeEstadoService) {
      mainService.estadolist().subscribe(res => { this.estadoArray = res;});
      }
    getMainService(): any { return this.mainService; }


    onValueChanged(e){
      this.getMainService().municipioslist(e.value.id).subscribe(mun => { this.municipioArray = mun;});

      console.log(e.value.id);
      // console.log((e.value))

  }

}
