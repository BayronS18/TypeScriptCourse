// ==========================================
// UTILITY TYPES NATIVOS EN TYPESCRIPT
// ==========================================

type Punto = {
    x: number;
    y: number;
    descripcion?: string; // Propiedad opcional (?)
};

// ---------------------------------------------------------------------
// 1. Partial<T>: Hace que TODAS las propiedades sean opcionales (?)
// ---------------------------------------------------------------------
// Ideal para: Formularios de actualización (PATCH/Edición).
type PuntoOpcional = Partial<Punto>; 
// Equivalente a: { x?: number; y?: number; descripcion?: string; }


// ---------------------------------------------------------------------
// 2. Required<T>: Quita el '?' y exige TODAS las propiedades
// ---------------------------------------------------------------------
type PuntoRequerido = Required<Punto>; 
// Equivalente a: { x: number; y: number; descripcion: string; }


// ---------------------------------------------------------------------
// 3. Record<K, V>: Define objetos clave-valor (Diccionarios)
// ---------------------------------------------------------------------
// K = Tipo de las llaves | V = Tipo de los valores
const keyVal: Record<string, number> = {
    'soy un string': 42,
    'otro_codigo': 100
};
// Nota: 'type kv = { [key: string]: number }' es equivalente.


// ---------------------------------------------------------------------
// 4. Omit<T, K>: Crea un tipo ELIMINANDO las propiedades indicadas
// ---------------------------------------------------------------------
// Útil para remover IDs autogenerados, contraseñas o datos sensibles.
const puntoSinInfoExtra: Omit<Punto, 'descripcion' | 'y'> = {
    x: 1
};


// ---------------------------------------------------------------------
// 5. Pick<T, K>: Crea un tipo SELECCIONANDO solo las propiedades indicadas
// ---------------------------------------------------------------------
// Es la contraparte de Omit: te quedas únicamente con lo que pides.
const puntoSoloCoordenadas: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 2
};


// ---------------------------------------------------------------------
// 6. Readonly<T>: Vuelve TODAS las propiedades de SOLO LECTURA
// ---------------------------------------------------------------------
// Previene que se modifiquen los valores después de crearse.
const readOnlyP: Readonly<Punto> = {
    x: 1,
    y: 3,
    descripcion: 'soy una descripcion'
};

// ❌ TypeScript marca error si intentas modificarlo:
// readOnlyP.x = 43; 
// Error: Cannot assign to 'x' because it is a read-only property.