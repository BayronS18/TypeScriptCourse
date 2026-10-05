// ==========================================
// GENÉRICOS EN CLASES
// ==========================================

type Computador = {
    encender(): void;     // Método escrito de forma tradicional
    apagar: () => void;   // Método escrito como arrow function
};

class Programador<T> {
    // Usamos parameter property (public) para no tener que declarar la variable arriba ni hacer this.computador = t
    constructor(public computador: T) {}
}

// 🔹 Caso 1: T es de tipo Computador
const programador1 = new Programador<Computador>({ 
    encender() { console.log("Iniciando sistema..."); }, 
    apagar: () => console.log("Apagando...") 
});

// 🔹 Caso 2: T es de tipo string (TypeScript infiere <string> automáticamente)
const programador2 = new Programador('HP Omen / Lenovo');

// 💡 Ejecución correcta:
programador1.computador.encender(); // Importante poner los () para ejecutar el método
console.log(`Largo del nombre: ${programador2.computador.length}`); // Propiedad de string


//ejercicio 1

type Freno ={
    posicion: string;
    precio: number;
}

class CajaAlmacen<T> {
    constructor(
        public contenido: T,
        public readonly ubicacion: string
    ){}
    obtenerContenido(){
        return this.contenido
    }

}

const cajaFrenos =  new CajaAlmacen<Freno>( {posicion: "Delantero", precio: 45000}, 'A-12')
console.log(cajaFrenos.obtenerContenido())