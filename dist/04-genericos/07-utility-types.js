"use strict";
// ==========================================
// UTILITY TYPES NATIVOS EN TYPESCRIPT
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// Equivalente a: { x: number; y: number; descripcion: string; }
// ---------------------------------------------------------------------
// 3. Record<K, V>: Define objetos clave-valor (Diccionarios)
// ---------------------------------------------------------------------
// K = Tipo de las llaves | V = Tipo de los valores
const keyVal = {
    'soy un string': 42,
    'otro_codigo': 100
};
// Nota: 'type kv = { [key: string]: number }' es equivalente.
// ---------------------------------------------------------------------
// 4. Omit<T, K>: Crea un tipo ELIMINANDO las propiedades indicadas
// ---------------------------------------------------------------------
// Útil para remover IDs autogenerados, contraseñas o datos sensibles.
const puntoSinInfoExtra = {
    x: 1
};
// ---------------------------------------------------------------------
// 5. Pick<T, K>: Crea un tipo SELECCIONANDO solo las propiedades indicadas
// ---------------------------------------------------------------------
// Es la contraparte de Omit: te quedas únicamente con lo que pides.
const puntoSoloCoordenadas = {
    x: 1,
    y: 2
};
// ---------------------------------------------------------------------
// 6. Readonly<T>: Vuelve TODAS las propiedades de SOLO LECTURA
// ---------------------------------------------------------------------
// Previene que se modifiquen los valores después de crearse.
const readOnlyP = {
    x: 1,
    y: 3,
    descripcion: 'soy una descripcion'
};
// ❌ TypeScript marca error si intentas modificarlo:
// readOnlyP.x = 43; 
// Error: Cannot assign to 'x' because it is a read-only property.
//# sourceMappingURL=07-utility-types.js.map