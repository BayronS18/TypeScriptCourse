"use strict";
// ==========================================
// TIPOS AVANZADOS EN TYPESCRIPT
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. UNION TYPES (|)
// Permite que una variable acepte más de un tipo de dato.
// Consejo: Úsalo para casos puntuales (ej: string | number). No abuses agregando 10 tipos.
let puntaje = 98;
puntaje = 'Hola mundo';
// Un objeto puede cumplir la forma de Usuario O de Animal
let animal = { id: 1, estado: 'Activo', name: 'Bayron' };
// 2. TYPE NARROWING (Estrechamiento de tipos)
// TS analiza el flujo del código. Al usar 'typeof' dentro del 'if', TS "estrecha"
// el tipo y habilita el autocompletado específico para ese tipo dentro del bloque.
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2; // Aquí 'n' es tratado estrictamente como number
    }
    return parseInt(n) + 2; // Aquí TS sabe que 'n' es un string
}
const product = {
    created_at: '2026-09-29',
    modified_at: '2026-09-29',
    name: 'Filtro de Aceite'
};
const ndeFibo = 5; // Solo acepta esos números exactos
// 5. NULLABLE TYPES
// Manejo explícito de null y undefined para evitar fallos en tiempo de ejecución.
function toNumber(s) {
    if (!s) {
        return 0; // Guard clause: si es null, undefined o "", retorna 0
    }
    return parseInt(s);
}
// 6. OPTIONAL CHAINING OPERATOR (?.)
// Accede de forma segura a propiedades, arrays o funciones sin romper la aplicación si son null/undefined.
function getUser(id) {
    if (id < 0)
        return null;
    return { id: 1, name: 'Bayron', created_at: new Date() };
}
const user = getUser(1);
console.log('Usuario fecha:', user?.created_at); // Si user es null, retorna undefined sin dar crash
const arr1 = null;
console.log(arr1?.[0]); // Acceso seguro a arreglos
const fn5 = null;
// fn5?.(); // Ejecución segura de funciones opcionales
// 7. NULLISH COALESCING OPERATOR (??)
// Retorna el lado derecho ÚNICAMENTE si el lado izquierdo es 'null' o 'undefined'.
// A diferencia de '||' (OR), respeta valores falsy válidos como el número 0 o el string vacío "".
const difficulty = 0;
const user2 = {
    username: 'Bayron',
    difficulty: difficulty ?? 1, // Mantiene el 0 porque NO es null ni undefined
};
console.log(user2.difficulty); // Imprime 0
// 8. TYPE ASSERTION (as)
// Le dice a TS: "Confía en mí, yo sé de qué tipo es esta variable".
// Muy usado al interactuar con el DOM de la web.
const input = document.getElementById('username');
// Sintaxis alternativa: const input2 = <HTMLInputElement>document.getElementById('username');
if (input) {
    console.log(input.value); // TS ya reconoce la propiedad .value
}
// 9. TIPO 'unknown' (El sustituto seguro de 'any')
// Acepta cualquier valor inicial, pero TE OBLIGA a validar su tipo ( Narrowing ) antes de usarlo.
function procesa(algo) {
    if (typeof algo === 'string') {
        return algo.toUpperCase(); // Seguro
    }
    if (typeof algo === 'number') {
        return algo.toFixed(2); // Seguro
    }
    return algo;
}
function procesarRespuestaPago(respuesta) {
    if (typeof respuesta === 'object' && respuesta !== null) {
        const pago = respuesta;
        const id = pago.transaccionId ?? 'S/N';
        return `Transaccion ${id}, se encuentra en el siguiente estado ${pago.estado}`;
    }
    return 'Respuesta no valida';
}
//# sourceMappingURL=01-tipos-avanzados.js.map