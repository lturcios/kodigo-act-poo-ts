// EJERCICIO 1
type alineaciones = 'centrado' | 'derecha' | 'izquierda';

export class CabeceraPagina {
  private titulo: string;
  private color: string;
  private fuente: string;
  private alineacionTitulo: alineaciones;

  constructor(titulo: string, color: string, fuente: string, alineacion?: alineaciones) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
    this.alineacionTitulo = alineacion || 'centrado';
  }

  obtenerPropiedadesPagina(): { titulo: string; color: string; fuente: string } {
    return {
      titulo: this.titulo,
      color: this.color,
      fuente: this.fuente,
    };
  }

  indicarAlineacionTitulo(alineacion: alineaciones): void {
    if (['centrado', 'derecha', 'izquierda'].includes(alineacion)) {
      this.alineacionTitulo = alineacion;
      console.log(`La alineación del título se ha establecido a: ${alineacion}`);
    } else {
      console.warn('Alineación inválida. Por favor, use "centrado", "derecha" o "izquierda".');
    }
  }

  imprimirPropiedades(): void {
    console.log('--- Propiedades de la Cabecera de Página ---');
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación del Título: ${this.alineacionTitulo}`);
    console.log('------------------------------------------');
  }
}
