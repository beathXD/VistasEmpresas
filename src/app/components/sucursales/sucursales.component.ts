import { Component, OnInit } from '@angular/core';
import { Sucursales } from 'src/app/models/sucursales.model';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [SucursalesService]
})
export class SucursalesComponent implements OnInit {
  public sucursalesModelGet: Sucursales;
  public sucursalesmodelpost: Sucursales;
  constructor(private _sucursalesService: SucursalesService) {

    this.sucursalesmodelpost = new Sucursales(
      '',
      '',
      '')
   }

  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales(){
    this._sucursalesService.obtenerSucursal().subscribe(
      (response)=>{
          console.log(response.sucursal)
          this.sucursalesModelGet = response.sucursal;
      },
      (err) =>{
       console.log(<any>err);
      }
    )
  }

  postSucursal(){
    this._sucursalesService.agregarSucursal(this.sucursalesmodelpost).subscribe(
      (response)=>{

        this.getSucursales();
        this.sucursalesmodelpost.nombreSucursal = '';
      }, (err)=>{
        console.log(<any>err);
      }
    )
  }


}

