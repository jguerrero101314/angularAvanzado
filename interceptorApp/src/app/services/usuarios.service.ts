import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  obtenerUsuarios(){
    let params =new HttpParams().append('page','1');
    params.append("nombre","joel Guerrero");

    const headers = new HttpHeaders({
        'token-usuario': "ABC1221212"
    });
   return  this.http.get(`https://reqres111.in/api/user`,{
      params,
      headers
   }).pipe(
     map( resp => resp['data'] ),
     catchError(this.manejarError)
   );
  }
  manejarError(error: HttpErrorResponse){
    console.log("sucedio un error");
    console.log("registrado en el log file");
    console.warn(error);
    return throwError('Error personalizado')
  }
}
