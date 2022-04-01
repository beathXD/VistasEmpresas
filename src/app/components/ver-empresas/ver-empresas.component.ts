import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.scss'],
  providers: [EmpresasService]
})
export class VerEmpresasComponent implements OnInit {
  public empresaModelGet: Empresas;
  public empresamodelpost: Empresas;
  constructor(private _empresaService: EmpresasService) {

    this.empresamodelpost = new Empresas(
      '',
      '',
      '')
   }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa(){
    this._empresaService.obtenerEmpresa().subscribe(
      (response)=>{
          console.log(response.empresa)
          this.empresaModelGet = response.empresa;
      },
      (err) =>{
       console.log(<any>err);
      }
    )
  }

  postEmpresa(){
    this._empresaService.agregarEmpresa(this.empresamodelpost).subscribe(
      (response)=>{

        this.getEmpresa();
        this.empresamodelpost.nombreEmpresa = '';
      }, (err)=>{
        console.log(<any>err);
      }
    )
  }


}

