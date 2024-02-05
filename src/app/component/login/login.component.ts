import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],  // Asumiendo que Validators es necesario
      password: ['',Validators.required ]  // Asumiendo que Validators es necesario
    });
  }

  ngOnInit(): void {
    // El código que necesitas ejecutar en la inicialización del componente va aquí
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
  
    if(usuario == 'julian' && password == '123'){
      this.fakeLoging();
      // Se redirecciona al dashboard
    } else {
      // Mostramos un mensaje de error
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open('usuario o contraseña incorrecta','',{
      duration: 4000,
      horizontalPosition:"center",
      verticalPosition:"bottom"
    })

 }
 fakeLoging() {
  this.loading = true;
  setTimeout(() => {
    // redireccionamos el dashboard
    this.loading = false;
  }, 1500);
}
}

