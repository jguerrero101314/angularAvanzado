import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form-interfaces';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  validarToken(){
    const token = localStorage.getItem('token') || '';
     return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp:any) => {
        localStorage.setItem('token', resp.token);
      }),
      map(resp => true),
      catchError( error => of(false))
    );
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  loginGoogle(token) {
    console.log('tokenService',token);
    // console.log(`${base_url}/login/google`, {token});
    return this.http.post(`${base_url}/login/google`, {token}).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
}
