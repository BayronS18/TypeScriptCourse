// ==========================================
// 1. GENÉRICOS EN FUNCIONES SIMPLES
// ==========================================

// T y V son "placeholders" (variables de tipo). 
// Permiten que la función acepte cualquier tipo, pero mantenga la relación entre lo que entra y lo que sale.
function log<T, V>(a: T, b: V): V {
    console.log(a, b);
    return b;
}

// 🔹 Forma explícita: Le indicamos los tipos manualmente entre < >
log<string, string>('dato', 'Chanchito feliz');
log<string, number>('dato', 42);

// 🔹 Inferencia de tipos: TypeScript deduce automáticamente los tipos según los argumentos pasados
log(1, 2);                // TS infiere T = number, V = number
log('Saludo', 'Hola');    // TS infiere T = string, V = string


// ==========================================
// 2. GENÉRICOS EN FUNCIONES ASÍNCRONAS (APIs)
// ==========================================

type User = {
    id: string;
    name: string;
};

// <T> representa la estructura del dato JSON que la API devolverá.
// Retornamos Promise<T> para que quien invoque la función sepa exactamente qué datos recibirá al hacer await.
async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(recurso);
    return respuesta.json(); // Se retorna como Promise<T>
}

// 🔹 Uso correcto dentro de una función async/await
async function main() {
    // Al pasar <User>, 'user' automáticamente pasa a ser de tipo 'User'
    const user = await fetchData<User>('/usuarios');
    console.log(user.id, user.name); // TS autocompleta .id y .name sin errores
}

//ejemplo 1

type Repuesto = {
    sku: string,
    nombre: string,
    precio: number,
}

function envolverRespuerta<T>(datos: T , exito: boolean){
   return{
    timestamp: Date.now(),
    exito: exito,
    payload: datos,
   }
}

const miTurbina: Repuesto = {
    sku: "TUR-101",
    nombre: "Turbo T3",
    precio: 350000
};

const turbina1 = envolverRespuerta(miTurbina, true)
console.log(turbina1.payload.nombre)

//ejercicio 2
type Usuario ={
    id: number,
    email: string,
}

type ServicioTaller = {
    id: number,
    nombreServicio: string,
    costo: number,
}

async function simularFetch<T>(datosFalsos: T): Promise<T>{
    //simulamos quie el servidor respondio
    return datosFalsos
    
}

const usuario1: Usuario ={
    id: 1,
    email: 'bayron_saaavedra@gmail.com',
}

async function probar(usuario: Usuario) {
    const response = await simularFetch(usuario)
    
    return console.log(response.email)
    
}

probar(usuario1)


// ejercicio 3

type Alimentos = {
    nombre: string;
    fechaVencimiento: string;
}

type Electro = {
    nombre:string;
    garantiaMeses: number;
}

function procesarProducto<T>(item: T, codigoCaja: number){
    return{
        caja: codigoCaja,
        detalles: item
    }
}

const miLeche: Alimentos = {
    nombre: 'Leche entera',
    fechaVencimiento: "2026-12-31"
}

const miNotebook: Electro ={
    nombre: 'Notebook Lenovo',
    garantiaMeses: 12,
}

const escaneo1 = procesarProducto(miLeche, 1)
const escaneo2 = procesarProducto(miNotebook, 2)
console.log(escaneo1.detalles.nombre)
console.log(escaneo2.detalles.nombre)

