import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ModalImagenService {
  private _ocultarModal = true;
  public tipo: string;
  public id: string;
  public img?: string;

  get ocultarModal() {
    return this._ocultarModal;
  }

  abrirModal(
    tipo: 'usuarios' | 'medicos' | 'hospitales',
    id: string,
    img?: string = 'no-img'
  ) {
    this._ocultarModal = false;
    this.tipo = tipo;
    this.id = id;
    this.img = img;
    if (img.includes('https')) {
      this.img = img;
    } else {
      this.img = `${base_url}/upload/${tipo}/${img}`;
    }
  }

  cerrarModal() {
    this._ocultarModal = true;
  }

  constructor() {}
}
