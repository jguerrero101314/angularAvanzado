import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  public usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private readonly router: Router
  ) {
    this.usuario = usuarioService.usuario;
  }

  logout() {
    this.usuarioService.logout();
  }
  buscar(txtTermino: string) {
    if (txtTermino.length === 0) {
      return;
    }
    this.router.navigateByUrl(`/dashboard/buscar/${txtTermino}`);
  }
}
