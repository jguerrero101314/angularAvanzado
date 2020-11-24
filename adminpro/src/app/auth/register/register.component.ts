import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public registerForm = this.fb.group({
    nombre:['Joel',[Validators.required]],
    email:['test01@hotmail.com',[Validators.required]],
    password:['1222',[Validators.required]],
    password2:['1222',[Validators.required]],
    terminos:[false,[Validators.required]]
  });

  constructor( private fb: FormBuilder) { }

  crearUsuario(){
    console.log(this.registerForm.value);
  }
}
