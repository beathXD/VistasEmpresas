import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresas.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  public url: String = 'http://localhost:3000/api';
  public headresVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }
  obtenerEmpresa(): Observable<any>{
return this._http.get(this.url+ '/obtenerempresa', {headers: this.headresVariable})
  }

  agregarEmpresa( modeloEmpresa: Empresas): Observable<any>{
    let parametros = JSON.stringify(modeloEmpresa)

    return this._http.post(this.url+ '/agregarempresa', parametros,{headers: this.headresVariable})
  }
}
