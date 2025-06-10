// EJERCICIO 5
export abstract class Persona {
  // Atributos protegidos para que las clases hijas puedan accederlos
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: string;
  protected edad: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  esMayorDeEdad(): void {
    if (this.edad >= 18) {
      console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} ${this.apellido} NO es mayor de edad.`);
    }
  }

  abstract mostrarDatosPersonales(): void;
}