import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TerminationService {
  public url: string;

  constructor(private http: HttpClient) {
      this.url = GLOBAL.url;
   }


  // ================================================
   // GUARDAR UNA UNIDAD EN TERMINADO
   // ================================================
   addTermination(token, termination): Observable<any> {
    const params = JSON.stringify(termination);
    const headers = new HttpHeaders({'Content-Type': 'application/json',
          Authorization: token});

    return this.http.post(this.url + 'addtermination', params, {headers});
  }


   // ================================================
  // ELIMINAR UNA UNIDAD EN TERMINADO
  // ================================================
  updateTermination(token, termination): Observable<any> {
    const params = JSON.stringify(termination);
    const headers = new HttpHeaders({'Content-Type': 'application/json',
          Authorization: token});

    return this.http.put(this.url + 'delete-item-termination', params, {headers});
  }


  // ================================================
  // LISTAR LAS COLECCIONES DE TERMINADO
  // ================================================
  getTerminations(): Observable<any> {
    return this.http.get(this.url + 'gettermination').pipe(map(response => response));
  }


  // ================================================
  // ELIMINAR UNA COLECCION DE TERMINADO
  // ================================================
  deleteTermination(token, id): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json',
          Authorization: token});

    return this.http.delete(this.url + 'deletetermination/' + id, {headers});
  }
}
