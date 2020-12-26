import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  /**
   * forma vieja y no yan optima de hacer
   * @param error
   */

  // obtenerUsuarios(){
  //   let params =new HttpParams().append('page','1');
  //   params.append("nombre","joel Guerrero");

  //   const headers = new HttpHeaders({
  //       'token-usuario': "ABC1221212"
  //   });
  //  return  this.http.get(`https://reqres111.in/api/user`,{
  //     params,
  //     headers
  //  }).pipe(
  //    map( resp => resp['data'] ),
  //    catchError(this.manejarError)
  //  );
  // }

  /**
   * interceptores
   */

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '1');
    params.append('nombre', 'joel Guerrero');

  
    return this.http
      .get(`https://reqres11.in/api/user`, {
        params
      })
      .pipe(
        map((resp) => resp['data'])
      );
  }

}
