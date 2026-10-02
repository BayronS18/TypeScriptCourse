// ==========================================
// 1. INTERFACES (Contratos de Estructura)
// ==========================================

// La interfaz define "QUÉ" debe tener un objeto o clase, pero NO define "CÓMO" lo hace.
// No genera código en el JavaScript final (compilado); es puramente para verificación en desarrollo.
interface Animal {
    nombre: string;
    caminar(): void;
    onomatopeya(): string;
}

// La palabra clave 'implements' obliga a la clase a cumplir con el contrato 'Animal'.
// Si a alguna clase le falta una propiedad o método de la interfaz, TS dará error de compilación.
class Caballo implements Animal {
    nombre: string = "Caballo";

    caminar(): void {
        console.log("El caballo está caminando");
    }

    onomatopeya(): string {
        return "Relincho";
    }
}

class Cerdo implements Animal {
    nombre: string = "Cerdo";

    caminar(): void {
        console.log("El cerdo está caminando");
    }

    onomatopeya(): string {
        return "Oink";
    }
}

class Perro implements Animal {
    nombre: string = "Perro";

    caminar(): void {
        console.log("El perro está caminando");
    }

    onomatopeya(): string {
        return "Guau";
    }
}

// ==========================================
// POLIMORFISMO CON INTERFACES
// ==========================================
// Podemos crear arreglos o funciones que acepten cualquier objeto que cumpla con la interfaz 'Animal'
const miGranja: Animal[] = [new Caballo(), new Cerdo(), new Perro()];

miGranja.forEach(animal => {
    console.log(`${animal.nombre} dice: ${animal.onomatopeya()}`);
});


// ==========================================
// 2. INDEX SIGNATURES (Claves Dinámicas)
// ==========================================

// Se usan cuando NO SABEMOS de antemano el nombre de las claves/propiedades que va a tener un objeto,
// pero SÍ conocemos el tipo de la clave (generalmente string o number) y el tipo del valor.

class DiccionarioUsuario {
    // Definición del Index Signature: [clave: tipoClave]: tipoValor
    [id: string]: string;
}

let diccionarioUsuario = new DiccionarioUsuario();
diccionarioUsuario['1a'] = 'usuario 1';
diccionarioUsuario['a1'] = 'usuario 2';
diccionarioUsuario['usr_99'] = 'Bayron'; // Se pueden agregar infinitas claves de tipo string



//ejemplo 1

interface IProducto{
    id: number
    nombre: string
    obtenerPrecioConDescuento(porcentaje: number): number;
}

class RepuestoFreno implements IProducto{
    constructor(
        public id: number,
        public nombre: string,
        private precioBase: number,
    ){
    }
    
    obtenerPrecioConDescuento(porcentaje: number): number{
        return this.precioBase - this.precioBase * (porcentaje / 100)
        
    }

}

interface ICarritoRepuestos {
    [idProducto: string]: number;
}

const repuestoFreno = new RepuestoFreno(1, 'Frenoss', 20000)
console.log(`Respuesto con 10% de descuento`, repuestoFreno.obtenerPrecioConDescuento(10))

const miCarrito: ICarritoRepuestos = {}
miCarrito['prod_1'] = 4