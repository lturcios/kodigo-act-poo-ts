import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { CabeceraPagina } from './ts/cabecera.ts'
import { Calculadora } from './ts/calculadora.ts'
import { Cancion } from './ts/cancion.ts'
import { Cuenta } from './ts/cuenta.ts'
import { Empleado } from './ts/empleado.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function pruebaCabeceraPagina(): void {
    console.log('\n--- PRUEBAS EJERCICIO 1: Cabecera de Página ---');
    
    // prueba 1
    const miCabecera = new CabeceraPagina('Mi Sitio Web', 'azul', 'Arial');
    const propiedades = miCabecera.obtenerPropiedadesPagina();
    console.log('\n--- Test 1: Obtener Propiedades ---');
    console.log('Propiedades obtenidas:', propiedades);

    // prueba 2
    console.log('\n--- Test 2: Indicar Alineación del Título ---');
    miCabecera.indicarAlineacionTitulo('derecha'); 
    miCabecera.imprimirPropiedades();
}

function pruebaCalculadora(): void {
  console.log('\n--- PRUEBAS EJERCICIO 2: Calculadora ---');

  const calc = new Calculadora();

  // prueba 1: Suma
  console.log('\n--- Test 1: Suma ---');
  console.log('5 + 3 =', calc.sumar(5, 3));      
  console.log(' -10 + 2 =', calc.sumar(-10, 2)); 

  // prueba 2: Resta
  console.log('\n--- Test 2: Resta ---');
  console.log('10 - 4 =', calc.restar(10, 4));   
  console.log('3 - 8 =', calc.restar(3, 8));     

  // prueba 3: Multiplicación
  console.log('\n--- Test 3: Multiplicación ---');
  console.log('6 * 7 =', calc.multiplicar(6, 7));  
  console.log(' -5 * 3 =', calc.multiplicar(-5, 3)); 

  // prueba 4: División
  console.log('\n--- Test 4: División ---');
  console.log('20 / 5 =', calc.dividir(20, 5));     
  console.log(' 7 / 2 =', calc.dividir(7, 2));      

  // prueba 5: División entre cero
  console.log('\n--- Test 5: División entre Cero ---');
  try {
    console.log('10 / 0 =', calc.dividir(10, 0)); 
  } catch (e: any) {
    console.error('Error esperado:', e.message); 
  }

  // prueba 6: Potencia
  console.log('\n--- Test 6: Potencia ---');
  console.log('2^3 =', calc.potencia(2, 3));
  console.log('5^0 =', calc.potencia(5, 0));
  console.log('4^0.5 =', calc.potencia(4, 0.5));

  // prueba 7: Factorial
  console.log('\n--- Test 7: Factorial ---');
  console.log('Factorial de 0 =', calc.factorial(0)); 
  console.log('Factorial de 1 =', calc.factorial(1)); 
  console.log('Factorial de 5 =', calc.factorial(5)); 
  console.log('Factorial de 3 =', calc.factorial(3)); 

  // Caso de prueba 8: Factorial de número negativo 
  console.log('\n--- Test 8: Factorial de Número Negativo ---');
  try {
    console.log('Factorial de -3 =', calc.factorial(-3)); 
  } catch (e: any) {
    console.error('Error esperado:', e.message);
  }

  console.log('--- FIN PRUEBAS EJERCICIO 2 ---');
}

function pruebaCancion(): void {

  console.log('\n--- PRUEBAS EJERCICIO 3: Canción ---');

  // prueba 1: Creando una canción y mostrando sus datos iniciales
  const cancion1 = new Cancion('Bohemian Rhapsody', 'Rock');
  console.log('\n--- Test 1: Canción inicial ---');
  cancion1.mostrarDatosCancion(); 

  // prueba 2: Usando el setter para establecer el autor
  console.log('\n--- Test 2: Establecer autor con setter ---');
  cancion1.autor = 'Queen'; 
  cancion1.mostrarDatosCancion(); 

  // prueba 3: Usando el getter para obtener el autor
  console.log('\n--- Test 3: Obtener autor con getter ---');
  const autorCancion1 = cancion1.autor; 
  console.log(`El autor de "${cancion1.titulo}" es: ${autorCancion1}`); 

  // prueba 4: Creando otra canción, estableciendo autor y mostrando datos
  const cancion2 = new Cancion('Billie Jean', 'Pop');
  console.log('\n--- Test 4: Otra canción y establecer autor ---');
  cancion2.autor = 'Michael Jackson';
  cancion2.mostrarDatosCancion();

  // prueba 5: Intentando establecer un autor vacío (validación del setter)
  console.log('\n--- Test 5: Establecer autor vacío ---');
  cancion1.autor = ''; 
  cancion1.mostrarDatosCancion(); 

  console.log('--- FIN PRUEBAS EJERCICIO 3 ---');
}

function pruebaCuenta(): void {
  console.log('\n--- PRUEBAS EJERCICIO 4: Cuenta ---');

  console.log('\n--- Creando una cuenta inicial ---');
  const miCuenta = new Cuenta('Juan Pérez', 100.00, 'Ahorro', 'ES1234567890');
  miCuenta.mostrarDatosCuenta(); 

  // prueba 1: Depositar una cantidad válida
  console.log('\n--- Test 1: Depositar $50.75 ---');
  miCuenta.depositar(50.75); 
  miCuenta.mostrarDatosCuenta();

  // prueba 2: Intentar depositar una cantidad menor a $5.00
  console.log('\n--- Test 2: Intentar depositar $3.50 ---');
  miCuenta.depositar(3.50); 
  miCuenta.mostrarDatosCuenta(); 

  // prueba 3: Retirar una cantidad válida
  console.log('\n--- Test 3: Retirar $25.50 ---');
  miCuenta.retirar(25.50);
  miCuenta.mostrarDatosCuenta();

  // prueba 4: Intentar retirar una cantidad menor a $5.00
  console.log('\n--- Test 4: Intentar retirar $4.99 ---');
  miCuenta.retirar(4.99); 
  miCuenta.mostrarDatosCuenta(); 

  // prueba 5: Intentar retirar más de lo que hay en la cuenta
  console.log('\n--- Test 5: Intentar retirar $500.00 (más del saldo) ---');
  miCuenta.retirar(500.00); 
  miCuenta.mostrarDatosCuenta(); 

  // prueba 6: Vaciar la cuenta y luego intentar retirar
  console.log('\n--- Test 6: Vaciar la cuenta y luego intentar retirar ---');
  miCuenta.retirar(miCuenta.cantidad - 10); 
  console.log('Saldo después de retirar casi todo:', miCuenta.cantidad.toFixed(2));
  miCuenta.retirar(miCuenta.cantidad + 1); 
  console.log('Saldo después de dejar en 0:', miCuenta.cantidad.toFixed(2));
  miCuenta.retirar(10.00); 
  miCuenta.mostrarDatosCuenta(); 

  // prueba 7: Crear una cuenta con saldo inicial bajo y probar depósitos/retiros
  console.log('\n--- Test 7: Nueva cuenta con saldo bajo ---');
  const cuentaCero = new Cuenta('Maria Lopez', 0.00, 'Corriente', 'CR9876543210');
  cuentaCero.mostrarDatosCuenta(); 

  cuentaCero.retirar(10.00); 
  cuentaCero.depositar(4.00); 
  cuentaCero.depositar(20.00); 
  cuentaCero.retirar(15.00); 
  cuentaCero.retirar(6.00); 

  console.log('--- FIN PRUEBAS EJERCICIO 4 ---');
}

function pruebaEmpleado(): void {
  console.log('\n--- PRUEBAS EJERCICIO 5: Persona y Empleado ---');

  console.log('\n--- Creando un objeto Empleado ---');
  const empleado1 = new Empleado(
    'Ana',
    'García',
    'Calle Principal 123',
    '7560-9134',
    30,
    1500.00
  );

  empleado1.mostrarDatosPersonales(); 

  console.log('\n--- Test: Verificar mayor de edad ---');
  empleado1.esMayorDeEdad(); 

  console.log('\n--- Test: Nuevo sueldo ---');
  empleado1.cargarSueldo(1650.50);
  empleado1.imprimirSueldo();

  console.log('\n--- Test: Sueldo negativo ---');
  empleado1.cargarSueldo(-100);
  empleado1.imprimirSueldo();

  console.log('\n--- Creando otro objeto Empleado (menor de edad) ---');
  const empleado2 = new Empleado(
    'Pedro',
    'Martínez',
    'Av. Roosevelt 987',
    '6168-6119',
    17,
    800.00
  );
  empleado2.mostrarDatosPersonales();
  empleado2.esMayorDeEdad();

  console.log('--- FIN PRUEBAS EJERCICIO 5 ---');
}

pruebaCabeceraPagina();
pruebaCalculadora();
pruebaCancion();
pruebaCuenta();
pruebaEmpleado();