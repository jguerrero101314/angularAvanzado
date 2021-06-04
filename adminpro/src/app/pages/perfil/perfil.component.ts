import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from './../../models/usuario.model';
import { FileUploadService } from './../../services/file-upload.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public perfilForm: FormGroup;
  public usuario: Usuario;
  public picture: File;

  constructor(
    private readonly fb: FormBuilder,
    private readonly usuarioService: UsuarioService,
    private readonly fileUploadService: FileUploadService
  ) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, [Validators.required]],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  updateProfile() {
    console.log(this.perfilForm.value);
    this.usuarioService
      .updateProfile(this.perfilForm.value)
      .subscribe((resp) => {
        const { nombre, email } = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.email = email;
      });
  }

  changeImage(file: File) {
    this.picture = file;
  }

  subirImagen() {
    this.fileUploadService
      .updatePicture(this.picture, 'usuarios', this.usuario.uid)
      .then((img) => console.log(img));
  }
}
