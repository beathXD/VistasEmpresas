import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursales } from '../models/sucursales.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public url: String = 'http://localhost:3000/api';
  public headresVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }
  obtenerSucursal(): Observable<any>{
return this._http.get(this.url+ '/obtenersucursal', {headers: this.headresVariable})
  }

  agregarSucursal( modeloEmpresa: Sucursales): Observable<any>{
    let parametros = JSON.stringify(modeloEmpresa)

    return this._http.post(this.url+ '/agregarsucursal', parametros,{headers: this.headresVariable})
  }
}
