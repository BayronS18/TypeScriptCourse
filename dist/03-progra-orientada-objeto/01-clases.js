"use strict";
// ==========================================
// PROGRAMACIÓN ORIENTADA A OBJETOS (POO)
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
class Personaje {
    id;
    name;
    nivel;
    _hp;
    // Propiedad opcional fuera del constructor
    profesion;
    // PROPIEDAD ESTÁTICA Y PRIVADA:
    // Pertenece a la CLASE Personaje, no a las instancias (instancias = new Personaje...).
    // Al ser 'private', solo se puede leer/modificar dentro de los métodos de esta clase.
    static equipo = 1;
    // PARAMETER PROPERTIES (Atajos en el Constructor):
    // Al agregar modificadores de acceso (public, private, readonly) en los parámetros del constructor,
    // TypeScript declara e inicializa las propiedades automáticamente sin necesidad de usar 'this.x = x'.
    constructor(id, // Solo lectura: no se puede reasignar tras la creación
    name, nivel, _hp // Privado: accesible únicamente mediante métodos o getters de la clase
    ) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    // MÉTODOS DE INSTANCIA
    subirNivel() {
        this.nivel += 1;
        return this.nivel;
    }
    // Encapsulamiento explícito mediante método (preferido frente a setters tradicionales si ejecuta lógica)
    cambiarHp(cantidad) {
        this._hp += cantidad;
        return this._hp;
    }
    // GETTER: Permite leer el valor de '_hp' desde fuera como si fuera una propiedad pública (personaje.hp)
    get hp() {
        return this._hp;
    }
    // SETTER: Permite asignar valores realizando validaciones previas.
    // Ojo: los setters en TS/JS no retornan valores.
    set hp(cantidad) {
        if (cantidad < 0) {
            this._hp = 0;
            return;
        }
        this._hp = cantidad;
    }
    // MÉTODOS ESTÁTICOS:
    // Se ejecutan directamente sobre la clase: Personaje.agregarPersonaje()
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
// ==========================================
// USO E INSTANCIACIÓN
// ==========================================
const personaje = new Personaje(1, 'Bayron', 1, 100);
personaje.cambiarHp(-10);
const personaje2 = new Personaje(2, 'Pepe', 1, 100);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo()); // Salida: 2
// COMPROBACIONES DE TIPO EN RUNTIME
// Nota sobre typeof vs instanceof:
// typeof personaje === 'object' (JS trata las instancias como 'object')
// instanceof verifica el prototipo de la clase específica:
if (personaje instanceof Personaje) {
    console.log(`${personaje.name} es una instancia de la clase Personaje`);
}
class Repuesto {
    id;
    nombre;
    precio;
    static impuestoIva = 1.19;
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    get precioFinal() {
        return this.precio * Repuesto.impuestoIva;
    }
    actualizarPrecio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.precio = nuevoPrecio;
            return this.precio;
        }
        return this.precio;
    }
}
const repuesto1 = new Repuesto(1, 'Bujia', 10000);
console.log(`el precio final de ${repuesto1.nombre} con iva es de :`, repuesto1.precioFinal);
const repuesto2 = new Repuesto(2, 'Culata', 200000);
repuesto2.actualizarPrecio(150000);
console.log(`el nuevo precio de ${repuesto2.nombre} + iva es de :`, repuesto2.precioFinal);
//# sourceMappingURL=01-clases.js.map