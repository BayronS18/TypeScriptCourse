"use strict";
// ==========================================
// 1. INFERENCIA Y TIPOS PRIMITIVOS
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// Definición explícita con tipo string
let mensaje = "Hola Mundo";
mensaje = "Chanchito Feliz";
mensaje = "Chao mundo";
console.log(mensaje);
// Curiosidad de JS: typeof [] devuelve "object" porque en JavaScript los arrays son objetos.
console.log(typeof []);
/*
 * REPASO DE TIPOS:
 * - Primitivos de JS: number, string, boolean, null, undefined, symbol.
 * - Tipos de TS: any, unknown, never, arrays, tuplas, enums, type aliases/interfaces.
 */
// Inferencia de tipos: TS es tan inteligente que deduce el tipo sin que lo escribas.
// Nota el uso de guiones bajos en números largos (76_000_000): mejora la lectura visual y TS/JS lo reconoce como número.
let extioncionDinosaurios = 76_000_000; // Deduce tipo: number
let dinosaurioFavorito = 'T-Rex'; // Deduce tipo: string
let extintos = true; // Deduce tipo: boolean
// ==========================================
// 2. EL TIPO 'any' (¡Evítalo en lo posible!)
// ==========================================
// 'any' le quita la protección a TypeScript. Vuelve la variable como JS puro.
// Solo úsalo si es estrictamente necesario o en migraciones de código antiguo.
function chanchitoFeliz(config) {
    return config;
}
// ==========================================
// 3. ARRAYS (ARREGLOS)
// ==========================================
let animales = ['Perro', 'Gato', 'Oso'];
let nums = [1, 2, 3];
let checks = [];
// Sintaxis genérica para arreglos (hace exactamente lo mismo que number[])
let nums2 = [];
// Ventaja de TS con arrays: Al hacer .map() o iterar, el autocompletado te sugiere
// métodos específicos del tipo (ejemplo: metodos de string o de number como .toFixed()).
nums.map(x => x.toFixed(2));
// ==========================================
// 4. TUPLAS
// ==========================================
// Una tupla es un arreglo con un número FJO de elementos donde CADA POSICIÓN tiene un tipo definido.
// Posición 0 -> number | Posición 1 -> arreglo de strings
let tupla = [1, ['Chanchito feliz', 'Chanchito triste']];
// Cuidado: TS permite hacer .push() en tuplas por comportamiento heredado de JS,
// pero estructuralmente debes respetarla como un par fijo de datos.
// ==========================================
// 5. ENUMS (ENUMERACIONES)
// ==========================================
// Alternativa con constantes globales
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
// Enum estándar: agrupa constantes relacionadas. Se usa PascalCase para el nombre.
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1); // Imprime 'l'
// const enum: Optimización. No genera código JS extra al compilar,
// simplemente reemplaza el valor directo en el archivo traducido.
var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["Idle"] = 0] = "Idle";
    LoadingState[LoadingState["Loading"] = 1] = "Loading";
    LoadingState[LoadingState["Success"] = 2] = "Success";
    LoadingState[LoadingState["Error"] = 3] = "Error";
})(LoadingState || (LoadingState = {})); // Asigna índices 0, 1, 2, 3 automáticamente
const estado = LoadingState.Success;
const objeto = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'siempre viva',
        pais: 'Chile'
    }
};
// Arreglo que solo acepta objetos que cumplan con la estructura de 'Persona'
const arr = [];
// ==========================================
// 7. FUNCIONES
// ==========================================
// Opción A: Asignar el tipo de la función directo a la variable mediante sintaxis de flecha
const fn = (edad) => {
    if (edad > 17)
        return 'Puedes ingresar';
    return 'No puedes pasar';
};
// Opción B (Más común): Tipar parámetros y el valor de retorno explícitamente en la declaración
// Nota: 'mensaje = "mensaje defecto"' define un parámetro opcional con valor por defecto.
function validaEdad(edad, mensaje = 'mensaje defecto') {
    if (edad > 17)
        return `Puedes ingresar ${mensaje}`;
    return 'No puedes pasar';
}
validaEdad(10, 'Bayron');
// ==========================================
// 8. TIPO 'never'
// ==========================================
// 'never' representa valores que NUNCA suceden o funciones que NUNCA retornan un valor
// (por ejemplo, porque lanzan una excepción que detiene la ejecución o tienen un bucle infinito).
function ErrorUsuario() {
    throw new Error('error de usuario');
}
// EJEMPLO 1
var CategoriaRepuesto;
(function (CategoriaRepuesto) {
    CategoriaRepuesto[CategoriaRepuesto["Motor"] = 0] = "Motor";
    CategoriaRepuesto[CategoriaRepuesto["Frenos"] = 1] = "Frenos";
    CategoriaRepuesto[CategoriaRepuesto["Carroceria"] = 2] = "Carroceria";
    CategoriaRepuesto[CategoriaRepuesto["Accesorios"] = 3] = "Accesorios";
})(CategoriaRepuesto || (CategoriaRepuesto = {}));
// Le decimos que el parámetro 'repuesto' debe ser de tipo 'Repuesto'
function obtenerDetalleRepuesto(repuesto) {
    return `Producto: ${repuesto.nombre} - Precio: $${repuesto.precio}`;
}
// Ejemplo de uso:
const miRepuesto = {
    id: 101,
    nombre: 'Parachoques Estilo Evo X',
    precio: 250000,
    categoria: CategoriaRepuesto.Carroceria,
    compatibilidad: ['Lancer 2017', 'Lancer 2018']
};
// Al llamar a la función, TS te autocompleta los datos y verifica que el objeto sea válido
console.log(obtenerDetalleRepuesto(miRepuesto));
// Resultado: "Producto: Parachoques Estilo Evo X - Precio: $250000"
//EJemplo 2
// 1. Enum de estados
var EstadoCita;
(function (EstadoCita) {
    EstadoCita["Pendiente"] = "PENDIENTE";
    EstadoCita["EnProceso"] = "EN_PROCESO";
    EstadoCita["Completada"] = "COMPLETADA";
    EstadoCita["Cancelada"] = "CANCELADA";
})(EstadoCita || (EstadoCita = {}));
// 3. Objeto de prueba
const miCita = {
    idCita: 501,
    cliente: 'Gu3rr3r0',
    vehiculo: 'Lancer 2017',
    servicio: 'Instalación de Kit de Carrocería',
    estado: EstadoCita.Pendiente
};
function cambiarEstadoCita(cita, nuevoEstado) {
    cita.estado = nuevoEstado;
    return `Cita cambiada con éxito, su estado ahora es: ${cita.estado}`;
}
// Probar la función:
console.log(cambiarEstadoCita(miCita, EstadoCita.EnProceso));
//ejemplo 3
// 1. Enum para las categorías de repuestos
var CategoriaRepuesto2;
(function (CategoriaRepuesto2) {
    CategoriaRepuesto2["Motor"] = "MOTOR";
    CategoriaRepuesto2["Frenos"] = "FRENOS";
    CategoriaRepuesto2["Carroceria"] = "CARROCERIA";
    CategoriaRepuesto2["Accesorios"] = "ACCESORIOS";
})(CategoriaRepuesto2 || (CategoriaRepuesto2 = {}));
// 3. Objeto de prueba
const repuestoPrueba2 = {
    id: 101,
    nombre: 'Parachoques Estilo Evo X',
    precio: 250000,
    stock: 5,
    categoria: CategoriaRepuesto.Carroceria
};
function venderRepuesto(repuesto, cantidad) {
    repuesto.stock -= cantidad;
    return `Venta realizada: ${cantidad}unidades de ${repuesto.nombre}, stock actual: ${repuesto.stock}`;
}
console.log(venderRepuesto(repuestoPrueba2, 1));
// ejemplo 4
var TipoVehiculo;
(function (TipoVehiculo) {
    TipoVehiculo["Sedan"] = "SEDAN";
    TipoVehiculo["Hatchback"] = "HATCHBACK";
    TipoVehiculo["Suv"] = "SUV";
})(TipoVehiculo || (TipoVehiculo = {}));
const primerCliente = {
    id: 1,
    nombre: 'Bayron',
    vehiculo: 'Mitsubishi Lancer',
    tipo: TipoVehiculo.Sedan,
    atendido: false
};
function marcarClienteAtendido(cliente) {
    cliente.atendido = true;
    return `El cliente ${cliente.nombre}, acaba de ser atendido :D ${cliente.atendido}`;
}
console.log(marcarClienteAtendido(primerCliente));
//# sourceMappingURL=01-tipos-primitivos.js.map