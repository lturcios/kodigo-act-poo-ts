// EJERCICIO 3
export class Cancion {
  public titulo: string;
  public genero: string;
  private _autor: string; 

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
    this._autor = 'Desconocido'; // valor por defecto
  }

  get autor(): string {
    return this._autor;
  }

  set autor(nuevoAutor: string) {
    if (nuevoAutor && nuevoAutor.trim() !== '') { // Pequeña validación para asegurar que el autor no sea una cadena vacía
      this._autor = nuevoAutor;
      console.log(`El autor de "${this.titulo}" se ha actualizado a: ${nuevoAutor}`);
    } else {
      console.warn('El nombre del autor no puede estar vacío.');
    }
  }

  mostrarDatosCancion(): void {
    console.log('\n--- Datos de la Canción ---');
    console.log(`Título: ${this.titulo}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Autor: ${this.autor}`); // getter para acceder al autor
    console.log('--------------------------');
  }
}

