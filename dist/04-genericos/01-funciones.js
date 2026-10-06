"use strict";
// ==========================================
// 1. GENÉRICOS EN FUNCIONES SIMPLES
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// T y V son "placeholders" (variables de tipo). 
// Permiten que la función acepte cualquier tipo, pero mantenga la relación entre lo que entra y lo que sale.
function log(a, b) {
    console.log(a, b);
    return b;
}
// 🔹 Forma explícita: Le indicamos los tipos manualmente entre < >
log('dato', 'Chanchito feliz');
log('dato', 42);
// 🔹 Inferencia de tipos: TypeScript deduce automáticamente los tipos según los argumentos pasados
log(1, 2); // TS infiere T = number, V = number
log('Saludo', 'Hola'); // TS infiere T = string, V = string
// <T> representa la estructura del dato JSON que la API devolverá.
// Retornamos Promise<T> para que quien invoque la función sepa exactamente qué datos recibirá al hacer await.
async function fetchData(recurso) {
    const respuesta = await fetch(recurso);
    return respuesta.json(); // Se retorna como Promise<T>
}
// 🔹 Uso correcto dentro de una función async/await
async function main() {
    // Al pasar <User>, 'user' automáticamente pasa a ser de tipo 'User'
    const user = await fetchData('/usuarios');
    console.log(user.id, user.name); // TS autocompleta .id y .name sin errores
}
function envolverRespuerta(datos, exito) {
    return {
        timestamp: Date.now(),
        exito: exito,
        payload: datos,
    };
}
const miTurbina = {
    sku: "TUR-101",
    nombre: "Turbo T3",
    precio: 350000
};
const turbina1 = envolverRespuerta(miTurbina, true);
console.log(turbina1.payload.nombre);
async function simularFetch(datosFalsos) {
    //simulamos quie el servidor respondio
    return datosFalsos;
}
const usuario1 = {
    id: 1,
    email: 'bayron_saaavedra@gmail.com',
};
async function probar(usuario) {
    const response = await simularFetch(usuario);
    return console.log(response.email);
}
probar(usuario1);
function procesarProducto(item, codigoCaja) {
    return {
        caja: codigoCaja,
        detalles: item
    };
}
const miLeche = {
    nombre: 'Leche entera',
    fechaVencimiento: "2026-12-31"
};
const miNotebook = {
    nombre: 'Notebook Lenovo',
    garantiaMeses: 12,
};
const escaneo1 = procesarProducto(miLeche, 1);
const escaneo2 = procesarProducto(miNotebook, 2);
console.log(escaneo1.detalles.nombre);
console.log(escaneo2.detalles.nombre);
//# sourceMappingURL=01-funciones.js.map