export class Usuario {
    nombre: string;
    apellido: string;
    telefono: number;
    cedula: string;
    contraseña: string;
  

    constructor(nombre: string, apellido: string, telefono: number, cedula: string, contraseña: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.cedula = cedula;
        this.contraseña = contraseña;

    }
    
} 