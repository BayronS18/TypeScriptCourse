

// ==========================================
// TIPOS AVANZADOS EN TYPESCRIPT
// ==========================================

// 1. UNION TYPES (|)
// Permite que una variable acepte más de un tipo de dato.
// Consejo: Úsalo para casos puntuales (ej: string | number). No abuses agregando 10 tipos.
let puntaje: number | string = 98;
puntaje = 'Hola mundo';

type Animal = { id: number; estado: string };
type Usuario = { id: number; name: string };

// Un objeto puede cumplir la forma de Usuario O de Animal
let animal: Usuario | Animal = { id: 1, estado: 'Activo', name: 'Bayron' };

// 2. TYPE NARROWING (Estrechamiento de tipos)
// TS analiza el flujo del código. Al usar 'typeof' dentro del 'if', TS "estrecha"
// el tipo y habilita el autocompletado específico para ese tipo dentro del bloque.
function sumaDos(n: number | string): number {
    if (typeof n === 'number') {
        return n + 2; // Aquí 'n' es tratado estrictamente como number
    }
    return parseInt(n) + 2; // Aquí TS sabe que 'n' es un string
}


// 3. INTERSECTION TYPES (&)
// Combina múltiples tipos en UNO SOLO que debe cumplir TODAS las propiedades.
type Audit = { created_at: string; modified_at: string };
type Product = { name: string };

// 'ProductWithAudit' debe tener obligatoriamente name, created_at y modified_at
type ProductWithAudit = Audit & Product;

const product: ProductWithAudit = { 
    created_at: '2026-09-29',
    modified_at: '2026-09-29',
    name: 'Filtro de Aceite'
};


// 4. LITERAL TYPES
// Restringe el valor a opciones exactas y fijas, no a tipos generales.
type Fibo = 0 | 1 | 2 | 3 | 5;
const ndeFibo: Fibo = 5; // Solo acepta esos números exactos


// 5. NULLABLE TYPES
// Manejo explícito de null y undefined para evitar fallos en tiempo de ejecución.
function toNumber(s: string | null | undefined): number {
    if (!s) {
        return 0; // Guard clause: si es null, undefined o "", retorna 0
    }
    return parseInt(s);
}


// 6. OPTIONAL CHAINING OPERATOR (?.)
// Accede de forma segura a propiedades, arrays o funciones sin romper la aplicación si son null/undefined.
function getUser(id: number) {
    if (id < 0) return null;
    return { id: 1, name: 'Bayron', created_at: new Date() };
}

const user = getUser(1);
console.log('Usuario fecha:', user?.created_at); // Si user es null, retorna undefined sin dar crash

const arr1: number[] | null = null;
console.log(arr1?.[0]); // Acceso seguro a arreglos

const fn5: (() => void) | null = null;
// fn5?.(); // Ejecución segura de funciones opcionales


// 7. NULLISH COALESCING OPERATOR (??)
// Retorna el lado derecho ÚNICAMENTE si el lado izquierdo es 'null' o 'undefined'.
// A diferencia de '||' (OR), respeta valores falsy válidos como el número 0 o el string vacío "".
const difficulty: number | null = 0;

const user2 = {
    username: 'Bayron',
    difficulty: difficulty ?? 1, // Mantiene el 0 porque NO es null ni undefined
};
console.log(user2.difficulty); // Imprime 0


// 8. TYPE ASSERTION (as)
// Le dice a TS: "Confía en mí, yo sé de qué tipo es esta variable".
// Muy usado al interactuar con el DOM de la web.
const input = document.getElementById('username') as HTMLInputElement;
// Sintaxis alternativa: const input2 = <HTMLInputElement>document.getElementById('username');
if (input) {
    console.log(input.value); // TS ya reconoce la propiedad .value
}


// 9. TIPO 'unknown' (El sustituto seguro de 'any')
// Acepta cualquier valor inicial, pero TE OBLIGA a validar su tipo ( Narrowing ) antes de usarlo.
function procesa(algo: unknown) {
    if (typeof algo === 'string') {
        return algo.toUpperCase(); // Seguro
    }
    if (typeof algo === 'number') {
        return algo.toFixed(2); // Seguro
    }
    return algo;
}

// Ejemplo 1

type EstadoPago = 'PENDIENTE' | 'APROBADO' |'RECHAZADO'

type ResultadoPago = {
    monto: number,
    estado: EstadoPago,
    transaccionId?: string | null
}

function procesarRespuestaPago(respuesta: unknown): string{
    if (typeof respuesta === 'object' && respuesta !== null){
        const pago = respuesta as ResultadoPago
        const id = pago.transaccionId ?? 'S/N'
        return `Transaccion ${id}, se encuentra en el siguiente estado ${pago.estado}`
    }
    return 'Respuesta no valida'
}


