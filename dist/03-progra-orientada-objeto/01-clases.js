"use strict";
// programacion orientada a objeto clases
Object.defineProperty(exports, "__esModule", { value: true });
class Personaje {
    id;
    name;
    nivel;
    _hp;
    // readonly id: number //solo lectura
    // name: string
    // nivel: number
    // private _hp: number //control de acceso, es privada y algunos le agregan la convencion "_"
    profesion; //opcional
    static equipo = 1; //metodo estatico privado solo para la clase
    constructor(id, //solo lectura
    name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
        // this.id = id
        // this.name = name
        // this.nivel = nivel
        // this._hp = _hp
    }
    subirNivel() {
        this.nivel += 1;
        return this.nivel;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    //preferible usar esta manera que un setter
    cambiarHp(cantidad) {
        this._hp += cantidad;
        return this._hp;
    }
    //getter y setter
    get hp() {
        return this._hp;
    }
    //perefiblemente usarlo solo para realizar una validacion del dato que estamos colocando
    // set hp(cantidad: number): number{
    //     this._hp += cantidad
    // }
    static getEquipo() {
        return Personaje.equipo;
    }
}
const personaje = new Personaje(1, 'Bayron', 1, 100);
personaje.cambiarHp(-10);
// Personaje.equipo = 1 //ya no se puede modificar
// console.log(personaje)
const personaje2 = new Personaje(2, 'Pepe', 1, 100);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
if (typeof personaje) {
}
if (personaje instanceof Personaje) {
}
//# sourceMappingURL=01-clases.js.map