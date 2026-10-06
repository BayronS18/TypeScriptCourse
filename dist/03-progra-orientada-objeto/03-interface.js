"use strict";
// ==========================================
// 1. INTERFACES (Contratos de Estructura)
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// La palabra clave 'implements' obliga a la clase a cumplir con el contrato 'Animal'.
// Si a alguna clase le falta una propiedad o método de la interfaz, TS dará error de compilación.
class Caballo {
    nombre = "Caballo";
    caminar() {
        console.log("El caballo está caminando");
    }
    onomatopeya() {
        return "Relincho";
    }
}
class Cerdo {
    nombre = "Cerdo";
    caminar() {
        console.log("El cerdo está caminando");
    }
    onomatopeya() {
        return "Oink";
    }
}
class Perro {
    nombre = "Perro";
    caminar() {
        console.log("El perro está caminando");
    }
    onomatopeya() {
        return "Guau";
    }
}
// ==========================================
// POLIMORFISMO CON INTERFACES
// ==========================================
// Podemos crear arreglos o funciones que acepten cualquier objeto que cumpla con la interfaz 'Animal'
const miGranja = [new Caballo(), new Cerdo(), new Perro()];
miGranja.forEach(animal => {
    console.log(`${animal.nombre} dice: ${animal.onomatopeya()}`);
});
// ==========================================
// 2. INDEX SIGNATURES (Claves Dinámicas)
// ==========================================
// Se usan cuando NO SABEMOS de antemano el nombre de las claves/propiedades que va a tener un objeto,
// pero SÍ conocemos el tipo de la clave (generalmente string o number) y el tipo del valor.
class DiccionarioUsuario {
}
let diccionarioUsuario = new DiccionarioUsuario();
diccionarioUsuario['1a'] = 'usuario 1';
diccionarioUsuario['a1'] = 'usuario 2';
diccionarioUsuario['usr_99'] = 'Bayron'; // Se pueden agregar infinitas claves de tipo string
class RepuestoFreno {
    id;
    nombre;
    precioBase;
    constructor(id, nombre, precioBase) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
    obtenerPrecioConDescuento(porcentaje) {
        return this.precioBase - this.precioBase * (porcentaje / 100);
    }
}
const repuestoFreno = new RepuestoFreno(1, 'Frenoss', 20000);
console.log(`Respuesto con 10% de descuento`, repuestoFreno.obtenerPrecioConDescuento(10));
const miCarrito = {};
miCarrito['prod_1'] = 4;
//# sourceMappingURL=03-interface.js.map