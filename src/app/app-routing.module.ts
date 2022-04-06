import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerEmpresasComponent } from './components/ver-empresas/ver-empresas.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'appComponent', component: AppComponent},
  {path: 'paginaPrincipal', component: PaginaPrincipalComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ver-empresas', component: VerEmpresasComponent},
  {path: 'sucursales', component: SucursalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
