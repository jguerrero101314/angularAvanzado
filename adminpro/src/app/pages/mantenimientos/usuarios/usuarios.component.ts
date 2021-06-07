import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusquedasService } from '../../../services/busquedas.service';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  public usuariosTemp: Usuario[] = [];

  public imgSubs: Subscription;
  public desde: number = 0;
  public cargando: boolean = true;

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly busquedasService: BusquedasService
  ) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService
      .cargarUsuarios(this.desde)
      .subscribe(({ total, usuarios }) => {
        this.totalUsuarios = total;
        this.usuarios = usuarios;
        this.usuariosTemp = usuarios;
        this.cargando = false;
      });
  }

  buscar(termino: string) {
    this.busquedasService
      .buscar('usuarios', termino)
      .subscribe((resultados) => {
        this.usuarios = resultados;
      });
  }

  cambiarPagina(valor: number) {
    this.desde += valor;
    if (this.desde < 0) {
      this.desde = 0;
    } else if (this.desde >= this.totalUsuarios) {
      this.desde -= valor;
    }
    this.cargarUsuarios();
  }
}
