// ==========================================
// GENÉRICOS EN INTERFACES
// ==========================================

// // Interfaz genérica que actúa como una estructura Llave-Valor flexible
// interface KeyValue<K, V> {
//     key: K;
//     value: V;
// }

// interface Product {
//     id: string;
//     nombre: string;
// }

// // 🔹 Caso 1: La llave es un string y el valor es un objeto Product
// function fetchProduct(): KeyValue<string, Product> {
//     return {
//         key: "PROD-101",
//         value: { id: "PROD-101", nombre: "Disco de Freno Brembo" }
//     };
// }

// // 🔹 Caso 2: La llave es un string y el valor es un number (stock)
// function fetchStock(): KeyValue<string, number> {
//     return {
//         key: "PROD-101",
//         value: 500
//     };
// }

// // 💡 Pruebas de ejecución:
// const producto = fetchProduct();
// console.log(producto.value.nombre); // TS sabe que .value es un Product y autocompleta .nombre

// const stock = fetchStock();
// console.log(`Stock disponible: ${stock.value} unidades`); // TS sabe que .value es un number


// ejercicio 1

type Repuesto ={
    sku: string;
    precio: number;
}

interface ApiResponse<T>{
    estado: string;
    codigoStatus: number;
    datos: T;
}

function obtenerRepuesto(): ApiResponse<Repuesto> {
    return{
        estado: 'ok',
        codigoStatus: 200,
        datos: {sku: 'Parachoque_001', precio: 100000}
    }
}

const res = obtenerRepuesto()
console.log(res.datos.sku)


// ejercicio 2

type Aceite = {
    marca: string;
    viscosidad: string; // ej: "5W-30"
    precio: number;
};

type Neumatico = {
    marca: string;
    aro: number;        // ej: 17
    precio: number;
};

class Inventario<T>{
    private items: T[] = [];
    constructor(

    ){}
    agregar(item: T): void{
        this.items.push(item)
    }
    objetenerTodos(): T[]{
        return this.items
    }
}

const inventarioAceites = new Inventario<Aceite>()
inventarioAceites.agregar({ marca: "Castrol", viscosidad: "5W-30", precio: 35000 })
inventarioAceites.agregar({ marca: "Mazda", viscosidad: "5W-40", precio: 45000 })
console.log(inventarioAceites.objetenerTodos())

const inventarioNeumaticos = new Inventario<Neumatico>()
inventarioNeumaticos.agregar({ marca: "Michelin", aro: 50, precio: 35000 })
inventarioNeumaticos.agregar({ marca: "Neumatiquin", aro: 60, precio: 45000 })
console.log(inventarioNeumaticos.objetenerTodos())