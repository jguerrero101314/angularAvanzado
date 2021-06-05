import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];

  constructor(private readonly usuariService: UsuarioService) {}

  ngOnInit(): void {
    this.usuariService.cargarUsuario(0).subscribe(({ total, usuarios }) => {
      this.totalUsuarios = total;
      this.usuarios = usuarios;
    });
  }
}
