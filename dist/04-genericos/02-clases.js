"use strict";
// ==========================================
// GENÉRICOS EN CLASES
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
class Programador {
    computador;
    // Usamos parameter property (public) para no tener que declarar la variable arriba ni hacer this.computador = t
    constructor(computador) {
        this.computador = computador;
    }
}
// 🔹 Caso 1: T es de tipo Computador
const programador1 = new Programador({
    encender() { console.log("Iniciando sistema..."); },
    apagar: () => console.log("Apagando...")
});
// 🔹 Caso 2: T es de tipo string (TypeScript infiere <string> automáticamente)
const programador2 = new Programador('HP Omen / Lenovo');
// 💡 Ejecución correcta:
programador1.computador.encender(); // Importante poner los () para ejecutar el método
console.log(`Largo del nombre: ${programador2.computador.length}`); // Propiedad de string
class CajaAlmacen {
    contenido;
    ubicacion;
    constructor(contenido, ubicacion) {
        this.contenido = contenido;
        this.ubicacion = ubicacion;
    }
    obtenerContenido() {
        return this.contenido;
    }
}
const cajaFrenos = new CajaAlmacen({ posicion: "Delantero", precio: 45000 }, 'A-12');
console.log(cajaFrenos.obtenerContenido());
//# sourceMappingURL=02-clases.js.map