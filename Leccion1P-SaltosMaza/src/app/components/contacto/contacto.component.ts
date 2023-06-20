import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  nombre: string = 'Ryan Jesús';
  apellido: string = 'Saltos Maza';
  correo: string = 'ryan.saltosm@ug.edu.ec';
  telefono: string = '0979191739';
}
