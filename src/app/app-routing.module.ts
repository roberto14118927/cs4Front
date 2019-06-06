import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes Creados
import { LoginComponent } from './components/login/login.component';
import { NotPageComponent } from './components/not-page/not-page.component';
// Agregando los routers de cada componente 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: '**', component: NotPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
