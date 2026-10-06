"use strict";
// ==========================================
// OPERADOR keyof (Type Query Operator)
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
const calendar = { id: 1, fuente: "Google", dueno: "Bayron" };
// 💡 MEJORA PROFESIONAL:
// Usamos <T, K extends keyof T> para que 'K' represente una llave válida de 'T'.
// El tipo de retorno T[K] le indica a TS el tipo exacto que guardaba esa propiedad.
function getProp(objeto, property) {
    return objeto[property];
}
// 🔹 Casos VÁLIDOS:
const idValue = getProp(calendar, 'id'); // TS infiere que idValue es de tipo 'number'
const fuenteValue = getProp(calendar, 'fuente'); // TS infiere que fuenteValue es de tipo 'string'
console.log(idValue); // 1
console.log(fuenteValue); // Google
// 💡 MEJORA: Retornamos 'repuesto' (el objeto completo actualizado)
function actualizarPropiedad(repuesto, llave, nuevoValor) {
    repuesto[llave] = nuevoValor;
    return repuesto;
}
const repuestoInicial = {
    sku: "DISCO-BREMBO",
    precio: 45000,
    stock: 10
};
console.log("Original:", repuestoInicial);
// 🔹 Usamos la función para actualizar el precio
actualizarPropiedad(repuestoInicial, "precio", 40000);
console.log("Actualizado:", repuestoInicial);
// 🔹 Usamos la función para actualizar el stock (TS valida que 'stock' pide un number)
actualizarPropiedad(repuestoInicial, "stock", 15);
function imprimirAtributo(objeto, clave) {
    console.log(`El atributo: `, clave, `tiene el valor:`, objeto[clave]);
    return objeto[clave];
}
const neumaticoMichelin = { marca: "Michelin", aro: 17, precio: 95000 };
imprimirAtributo(neumaticoMichelin, 'aro');
imprimirAtributo(neumaticoMichelin, 'marca');
//# sourceMappingURL=06-operador-keyof.js.map