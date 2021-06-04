import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public perfilForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: ['123', [Validators.required]],
      email: ['abc', [Validators.required, Validators.email]],
    });
  }

  updateProfile() {
    console.log(this.perfilForm.value);
    this.usuarioService
      .updateProfile(this.perfilForm.value)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
