import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListaComponent} from './components/lista/lista.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {HomeComponent} from './components/home/home.component';



const routes: Routes = [
  // Rutas definidas de los componentes
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
