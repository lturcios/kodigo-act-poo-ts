// CONTINUACION DEL EJERCICIO 5
import { Persona } from './persona';

export class Empleado extends Persona {
  // Atributo específico de Empleado
  private sueldo: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
    super(nombre, apellido, direccion, telefono, edad); // Llama al constructor de Persona
    this.sueldo = sueldo;
  }

  cargarSueldo(nuevoSueldo: number): void {
    if (nuevoSueldo >= 0) { 
      this.sueldo = nuevoSueldo;
      console.log(`\nSueldo de ${this.nombre} ${this.apellido} actualizado a: $${this.sueldo.toFixed(2)}`);
    } else {
      console.warn('El sueldo no puede ser un valor negativo.');
    }
  }

  imprimirSueldo(): void {
    console.log(`Sueldo de ${this.nombre} ${this.apellido}: $${this.sueldo.toFixed(2)}`);
  }

  mostrarDatosPersonales(): void {
    console.log('\n--- Datos del Empleado ---');
    console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
    console.log('--------------------------');
  }
}
