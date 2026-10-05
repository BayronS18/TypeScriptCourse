// ==========================================
// OPERADOR keyof (Type Query Operator)
// ==========================================

type Calendar = {
    id: number;
    fuente: string;
    dueno: string;
};

const calendar: Calendar = { id: 1, fuente: "Google", dueno: "Bayron" };

// 💡 MEJORA PROFESIONAL:
// Usamos <T, K extends keyof T> para que 'K' represente una llave válida de 'T'.
// El tipo de retorno T[K] le indica a TS el tipo exacto que guardaba esa propiedad.
function getProp<T, K extends keyof T>(objeto: T, property: K): T[K] {
    return objeto[property];
}

// 🔹 Casos VÁLIDOS:
const idValue = getProp(calendar, 'id');          // TS infiere que idValue es de tipo 'number'
const fuenteValue = getProp(calendar, 'fuente');  // TS infiere que fuenteValue es de tipo 'string'

console.log(idValue);     // 1
console.log(fuenteValue); // Google

// ❌ Caso INVÁLIDO (Descomentar para probar el error de compilación):
// getProp(calendar, 'propiedadQueNoExiste');
// Error: Argument of type '"propiedadQueNoExiste"' is not assignable to parameter of type 'keyof Calendar'.


type Repuesto = {
    sku: string;
    precio: number;
    stock: number;
};

// 💡 MEJORA: Retornamos 'repuesto' (el objeto completo actualizado)
function actualizarPropiedad<K extends keyof Repuesto>(
    repuesto: Repuesto,
    llave: K,
    nuevoValor: Repuesto[K]
): Repuesto {
    repuesto[llave] = nuevoValor;
    return repuesto;
}

const repuestoInicial: Repuesto = {
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

// ❌ Casos INVÁLIDOS que TypeScript frena:
// actualizarPropiedad(repuestoInicial, "categoria", 40000); 
// Error: 'categoria' no es una llave de Repuesto ("sku" | "precio" | "stock")

// actualizarPropiedad(repuestoInicial, "precio", "cuarenta mil"); 
// Error: Gracias a Repuesto[K], TS exige que para "precio" envíes un number, no un string


// ejercicio 1

type Neumatico = {
    marca: string,
    aro: number,
    precio: number
}

function imprimirAtributo<T, K extends keyof T>(objeto: T, clave: K){
    console.log(`El atributo: `, clave, `tiene el valor:`, objeto[clave])
    return objeto[clave]
}

const neumaticoMichelin: Neumatico = {marca: "Michelin", aro: 17, precio: 95000}

imprimirAtributo(neumaticoMichelin, 'aro')
imprimirAtributo(neumaticoMichelin, 'marca')