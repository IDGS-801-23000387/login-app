import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  contrasena = '';
  mensaje = '';

  usuarios = [
    { usuario: 'admin', contrasena: 'admin' },
    { usuario: 'root', contrasena: 'root' }
  ];

  constructor(private router: Router) {}

  aceptar() {
    const valido = this.usuarios.find(
      u => u.usuario === this.usuario && u.contrasena === this.contrasena
    );

    if (valido) {
      this.router.navigate(['/bienvenida']);
    } else {
      this.mensaje = 'Usuario o contraseña incorrectos';
    }
  }

  cancelar() {
    this.usuario = '';
    this.contrasena = '';
    this.mensaje = '';
  }
}
