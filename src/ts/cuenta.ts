// EJERCICIO 4
export class Cuenta {
  public nombre: string;
  private _cantidad: number; 
  public tipoCuenta: string;
  public numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this._cantidad = cantidad; 
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  get cantidad(): number {
    return this._cantidad;
  }

  depositar(valor: number): void {
    if (valor <= 5.00) {
      console.log(`\n¡ERROR! El valor a depositar ($${valor.toFixed(2)}) debe ser mayor a $5.00.`);
    } else {
      this._cantidad += valor;
      console.log(`\nSe ha depositado correctamente $${valor.toFixed(2)}.`);
      console.log(`Nuevo saldo en cuenta: $${this._cantidad.toFixed(2)}`);
    }
  }

  retirar(valor: number): void {
    if (valor < 5.00) {
      console.log(`\n¡ERROR! El valor a retirar ($${valor.toFixed(2)}) debe ser mayor o igual a $5.00.`);
      return; 
    }

    if (this._cantidad === 0) {
      console.log('\nNo hay nada en la cuenta. Saldo actual: $0.00');
    } else if (this._cantidad < valor) {
      console.log(`\nFondos insuficientes. No se puede retirar $${valor.toFixed(2)}.`);
      console.log(`Saldo actual: $${this._cantidad.toFixed(2)}`);
    } else {
      this._cantidad -= valor;
      console.log(`\nSe ha retirado $${valor.toFixed(2)}.`);
      console.log(`Su saldo actual es: $${this._cantidad.toFixed(2)}`);
    }
  }

  mostrarDatosCuenta(): void {
    console.log('\n--- Datos de la Cuenta ---');
    console.log(`Nombre del Titular: ${this.nombre}`);
    console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
    console.log(`Número de Cuenta: ${this.numeroCuenta}`);
    console.log(`Saldo Actual: $${this._cantidad.toFixed(2)}`);
    console.log('--------------------------');
  }
}


