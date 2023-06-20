import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


interface Donacion {
  nombre: string;
  apellido: string;
  valor: number;
  fechaEntrega: Date;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  donaciones: Donacion[] = [];
  valorTotalRecaudado: number = 0;

  agregarDonacion(nombre: string, apellido: string, valor: number, fechaEntrega: string) {
    const donacion: Donacion = {
      nombre,
      apellido,
      valor,
      fechaEntrega: new Date(fechaEntrega)
    };
    this.donaciones.push(donacion);
    this.dataSource = new MatTableDataSource(this.donaciones);

    
  }

  eliminarDonacion(index: number) {
    const list = this.donaciones[index]
    const total: number = list.valor;

    this.valorTotalRecaudado += total;

    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
    
  }

}
