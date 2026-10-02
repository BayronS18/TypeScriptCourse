// ==========================================
// PROGRAMACIÓN ORIENTADA A OBJETOS (POO)
// ==========================================

class Personaje {
    // Propiedad opcional fuera del constructor
    profesion?: string;

    // PROPIEDAD ESTÁTICA Y PRIVADA:
    // Pertenece a la CLASE Personaje, no a las instancias (instancias = new Personaje...).
    // Al ser 'private', solo se puede leer/modificar dentro de los métodos de esta clase.
    private static equipo: number = 1;

    // PARAMETER PROPERTIES (Atajos en el Constructor):
    // Al agregar modificadores de acceso (public, private, readonly) en los parámetros del constructor,
    // TypeScript declara e inicializa las propiedades automáticamente sin necesidad de usar 'this.x = x'.
    constructor(
        public readonly id: number,  // Solo lectura: no se puede reasignar tras la creación
        public name: string,
        public nivel: number,
        private _hp: number          // Privado: accesible únicamente mediante métodos o getters de la clase
    ) {}

    // MÉTODOS DE INSTANCIA
    subirNivel(): number {
        this.nivel += 1;
        return this.nivel;
    }

    // Encapsulamiento explícito mediante método (preferido frente a setters tradicionales si ejecuta lógica)
    cambiarHp(cantidad: number): number {
        this._hp += cantidad;
        return this._hp;
    }

    // GETTER: Permite leer el valor de '_hp' desde fuera como si fuera una propiedad pública (personaje.hp)
    get hp(): number {
        return this._hp;
    }

    // SETTER: Permite asignar valores realizando validaciones previas.
    // Ojo: los setters en TS/JS no retornan valores.
    set hp(cantidad: number) {
        if (cantidad < 0) {
            this._hp = 0;
            return;
        }
        this._hp = cantidad;
    }

    // MÉTODOS ESTÁTICOS:
    // Se ejecutan directamente sobre la clase: Personaje.agregarPersonaje()
    static agregarPersonaje(): void {
        Personaje.equipo++;
    }

    static getEquipo(): number {
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

    private static impuestoIva = 1.19

    constructor(
        public readonly id: number,
        public nombre: string,
        private precio: number,
        
        
    ){}

    get precioFinal():number {
        return this.precio * Repuesto.impuestoIva
    }
    actualizarPrecio(nuevoPrecio: number): number{
        if(nuevoPrecio > 0){
            this.precio = nuevoPrecio
            return this.precio
        }
        return this.precio
    }
}

const repuesto1 = new Repuesto(1, 'Bujia', 10000)
console.log(`el precio final de ${repuesto1.nombre} con iva es de :`, repuesto1.precioFinal)

const repuesto2 = new Repuesto(2, 'Culata', 200000)

repuesto2.actualizarPrecio(150000)
console.log(`el nuevo precio de ${repuesto2.nombre} + iva es de :`, repuesto2.precioFinal )