import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidaComponent }
];
